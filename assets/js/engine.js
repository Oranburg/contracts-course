/**
 * K Exercise Engine — Shared rendering and interaction logic
 *
 * Each exercise defines a global EXERCISE object in data.js, then loads
 * this engine. The engine reads EXERCISE and handles all rendering,
 * scoring, navigation, and progress tracking.
 *
 * EXERCISE schema:
 * {
 *   slug: string,
 *   title: string,
 *   kicker: string,           // e.g. "Module 1 • What Is Contract Law?"
 *   subtitle: string,         // e.g. "Bag End, The Shire"
 *   chapterNum: number,
 *   law: string,              // e.g. "R2d § 1"
 *   narrative: string,        // fact pattern / scene setting
 *   image: string,            // path to chapter image
 *   prevChapter: { title, url } | null,
 *   nextChapter: { title, url } | null,
 *   tome: string[],           // doctrine primer quotes
 *   artifacts: [{ id, name, text }],
 *   steps: Step[]
 * }
 *
 * Step types: desk, mcq, redline, dragdrop, scales, madlibs, objection, pivot, info
 */
(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────────────────

  var state = {
    stepIndex: 0,
    score: 0,
    total: 0,
    artifactOpen: null,
    locked: false,
    feedback: '',
    correct: false,
    selectedChoice: -1,
    redlineHit: false,
    dragAssignments: {},
    dragMessage: '',
    scaleSelections: {},
    madlibsValues: {}
  };

  // ── Helpers ────────────────────────────────────────────────────────

  function el(id) { return document.getElementById(id); }
  function step() { return EXERCISE.steps[state.stepIndex]; }
  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function resetStep() {
    state.locked = false;
    state.feedback = '';
    state.correct = false;
    state.selectedChoice = -1;
    state.redlineHit = false;
    state.dragAssignments = {};
    state.dragMessage = '';
    state.scaleSelections = {};
    state.madlibsValues = {};
  }

  var GRADED_TYPES = ['mcq', 'redline', 'dragdrop', 'madlibs', 'scales', 'objection'];

  function gradedCount() {
    return EXERCISE.steps.filter(function (s) {
      return GRADED_TYPES.indexOf(s.type) !== -1;
    }).length;
  }

  // ── Step Renderers ─────────────────────────────────────────────────

  function renderFeedback() {
    if (!state.feedback) return '';
    return '<div class="feedback ' + (state.correct ? 'ok' : 'bad') + '">' + esc(state.feedback) + '</div>';
  }

  function continueBtn() {
    return '<div class="btn-row"><button class="btn-primary" onclick="APP.next()">Continue</button></div>';
  }

  function renderArtifacts() {
    return '<div class="card-grid">' + EXERCISE.artifacts.map(function (a) {
      return '<button class="artifact-card" onclick="APP.openArtifact(\'' + a.id + '\')">' +
        '<span class="artifact-name">' + esc(a.name) + '</span>' +
        '<span class="artifact-note">Click to read evidence.</span></button>';
    }).join('') + '</div>';
  }

  function renderDesk(s) {
    return '<p class="prompt">' + esc(s.prompt) + '</p>' + renderArtifacts() + continueBtn();
  }

  function renderInfo(s) {
    return '<p class="prompt">' + esc(s.prompt) + '</p>' + continueBtn();
  }

  function renderMCQ(s) {
    var choices = s.options.map(function (o, i) {
      var cls = 'choice';
      if (state.locked) {
        if (o.correct) cls += ' correct';
        else if (state.selectedChoice === i) cls += ' wrong';
        else cls += ' dim';
      }
      return '<button class="' + cls + '" ' + (state.locked ? 'disabled' : '') +
        ' onclick="APP.pick(' + i + ')">' + esc(o.text) + '</button>';
    }).join('');
    return '<p class="prompt">' + esc(s.prompt) + '</p><div class="choices">' + choices + '</div>' +
      renderFeedback() + (state.locked ? continueBtn() : '');
  }

  function renderRedline(s) {
    var raw = s.docText || '';
    var target = s.target || '';
    var i = raw.indexOf(target);
    var doc = esc(raw);
    if (i >= 0 && target) {
      doc = esc(raw.slice(0, i)) +
        '<span class="redline-target ' + (state.redlineHit ? 'hit' : '') +
        '" onclick="APP.hitRedline()">' + esc(target) + '</span>' +
        esc(raw.slice(i + target.length));
    }
    return '<p class="prompt">' + esc(s.prompt) + '</p>' +
      '<div class="redline-doc">' + doc + '</div>' +
      renderFeedback() + (state.locked ? continueBtn() : '');
  }

  function renderDragDrop(s) {
    var pool = s.tokens.filter(function (t) {
      return !state.dragAssignments[t.id];
    }).map(function (t) {
      return '<div class="draggable" draggable="true" data-token="' + t.id + '">' + esc(t.label) + '</div>';
    }).join('');

    var buckets = s.buckets.map(function (b) {
      var items = Object.keys(state.dragAssignments).filter(function (k) {
        return state.dragAssignments[k] === b.id;
      }).map(function (id) {
        var tok = s.tokens.find(function (t) { return t.id === id; });
        return '<div class="drop-item">' + esc(tok ? tok.label : id) + '</div>';
      }).join('');
      return '<div class="bucket" data-bucket="' + b.id + '"><h4>' + esc(b.label) + '</h4>' + items + '</div>';
    }).join('');

    return '<p class="prompt">' + esc(s.prompt) + '</p>' +
      '<div class="bucket-wrap"><div class="bucket" data-bucket="pool"><h4>Evidence Desk</h4>' + pool + '</div>' + buckets + '</div>' +
      '<div class="drop-message">' + esc(state.dragMessage || '') + '</div>' +
      renderFeedback() +
      '<div class="btn-row">' + (state.locked ?
        '<button class="btn-primary" onclick="APP.next()">Continue</button>' :
        '<button class="btn-primary" onclick="APP.checkDrag()">Evaluate Board</button>') + '</div>';
  }

  function renderScales(s) {
    var selected = Object.keys(state.scaleSelections).filter(function (k) { return state.scaleSelections[k]; });
    var width = 50 + Math.round((selected.length / s.factors.length) * 50);
    var factors = s.factors.map(function (f) {
      return '<label><input type="checkbox" ' + (state.scaleSelections[f.id] ? 'checked' : '') +
        ' onchange="APP.toggleFactor(\'' + f.id + '\', this.checked)"> ' + esc(f.label) + '</label>';
    }).join('');

    return '<p class="prompt">' + esc(s.prompt) + '</p>' +
      '<div class="scale-wrap"><div class="factor-list">' + factors + '</div>' +
      '<div class="scale-meter"><div class="fill" style="width:' + width + '%"></div></div>' +
      '<div class="scale-labels"><span>' + esc(s.labelLeft || 'Material Breach') + '</span><span>' + esc(s.labelRight || 'Substantial Performance') + '</span></div></div>' +
      renderFeedback() +
      '<div class="btn-row">' + (state.locked ?
        '<button class="btn-primary" onclick="APP.next()">Continue</button>' :
        '<button class="btn-primary" onclick="APP.checkScale()">Lock Balancing Test</button>') + '</div>';
  }

  function renderMadlibs(s) {
    var t = s.template;
    s.blanks.forEach(function (b) {
      var opts = b.options.map(function (o) {
        return '<option value="' + esc(o) + '" ' + (state.madlibsValues[b.key] === o ? 'selected' : '') + '>' + esc(o) + '</option>';
      }).join('');
      var sel = '<select onchange="APP.setMadlib(\'' + b.key + '\', this.value)">' +
        '<option value="">Select</option>' + opts + '</select>';
      t = t.replace('[' + b.key + ']', sel);
    });
    return '<p class="prompt">' + esc(s.prompt) + '</p>' +
      '<div class="madlibs">' + t + '</div>' +
      renderFeedback() +
      '<div class="btn-row">' + (state.locked ?
        '<button class="btn-primary" onclick="APP.next()">Continue</button>' :
        '<button class="btn-primary" onclick="APP.checkMadlibs()">Check Holding</button>') + '</div>';
  }

  function renderPivot(s) {
    var annotation = s.annotation || 'Casebook path: if bargain consideration fails, analyze reliance-based enforcement under § 90.';
    return '<p class="prompt">' + esc(s.prompt) + '</p>' +
      '<div class="feedback ok">' + esc(annotation) + '</div>' +
      '<div class="btn-row"><button class="btn-primary" onclick="APP.next()">' + esc(s.button || 'Continue') + '</button></div>';
  }

  function renderObjection(s) {
    var choices = s.options.map(function (o, i) {
      return '<button class="choice" onclick="APP.pick(' + i + ')">' + esc(o.text) + '</button>';
    }).join('');
    return '<div class="modal"><div class="modal-card">' +
      '<h3 class="modal-title">Objection!</h3>' +
      '<p class="prompt">' + esc(s.prompt) + '</p>' +
      '<div class="choices">' + choices + '</div>' +
      renderFeedback() +
      (state.locked ? continueBtn() : '') +
      '</div></div>';
  }

  function renderStepBody(s) {
    switch (s.type) {
      case 'desk': return renderDesk(s);
      case 'mcq': return renderMCQ(s);
      case 'redline': return renderRedline(s);
      case 'dragdrop': return renderDragDrop(s);
      case 'scales': return renderScales(s);
      case 'madlibs': return renderMadlibs(s);
      case 'pivot': return renderPivot(s);
      case 'objection': return renderObjection(s);
      default: return renderInfo(s);
    }
  }

  // ── Modal ──────────────────────────────────────────────────────────

  function renderModal() {
    if (!state.artifactOpen) return '';
    var a = EXERCISE.artifacts.find(function (x) { return x.id === state.artifactOpen; });
    if (!a) return '';
    return '<div class="modal" onclick="APP.closeArtifact(event)"><div class="modal-card">' +
      '<h3 class="modal-title">' + esc(a.name) + '</h3>' +
      '<p>' + esc(a.text) + '</p>' +
      '<div class="btn-row"><button class="btn-secondary" onclick="APP.closeArtifact(event)">Close</button></div>' +
      '</div></div>';
  }

  // ── Drag & Drop Binding ────────────────────────────────────────────

  function bindDrag() {
    document.querySelectorAll('.draggable').forEach(function (item) {
      item.addEventListener('dragstart', function (ev) {
        ev.dataTransfer.setData('text/plain', item.dataset.token);
        ev.dataTransfer.effectAllowed = 'move';
      });
    });
    document.querySelectorAll('.bucket').forEach(function (bucket) {
      bucket.addEventListener('dragover', function (ev) {
        ev.preventDefault();
        bucket.classList.add('over');
      });
      bucket.addEventListener('dragleave', function () {
        bucket.classList.remove('over');
      });
      bucket.addEventListener('drop', function (ev) {
        ev.preventDefault();
        bucket.classList.remove('over');
        var tokenId = ev.dataTransfer.getData('text/plain');
        var b = bucket.dataset.bucket;
        if (b === 'pool') {
          delete state.dragAssignments[tokenId];
        } else {
          state.dragAssignments[tokenId] = b;
        }
        state.dragMessage = '';
        render();
      });
    });
  }

  // ── Main Render ────────────────────────────────────────────────────

  function render() {
    if (state.stepIndex >= EXERCISE.steps.length) { renderSummary(); return; }
    var s = step();
    var total = gradedCount();
    var pct = total ? Math.round((state.score / total) * 100) : 0;

    var imageHtml = '';
    if (EXERCISE.image) {
      imageHtml = '<div class="intro-art"><img src="' + esc(EXERCISE.image) + '" alt="' + esc(EXERCISE.subtitle) + '"></div>';
    }

    el('game').innerHTML =
      '<section class="intro" style="margin-bottom:var(--space-lg)">' +
        '<div class="intro-kicker">' + esc(EXERCISE.kicker) + '</div>' +
        '<h1>' + esc(EXERCISE.title) + '</h1>' +
        '<p class="intro-doctrine">' + esc(EXERCISE.law) + '</p>' +
        imageHtml +
      '</section>' +
      '<div class="progress-wrap"><div class="progress-bar"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
      '<div class="progress-meta"><span>Step ' + (state.stepIndex + 1) + ' of ' + EXERCISE.steps.length + '</span>' +
      '<span>Score: ' + state.score + '/' + state.total + '</span></div></div>' +
      '<div class="exercise-layout">' +
        '<section class="stage">' +
          '<div class="stage-header"><div>' +
            '<div class="stage-module">' + esc(EXERCISE.subtitle) + '</div>' +
            '<h2 class="stage-title">' + esc(s.irac || 'Analysis') + '</h2>' +
          '</div><span class="stage-irac">Chapter ' + EXERCISE.chapterNum + '</span></div>' +
          '<p class="story">' + esc(EXERCISE.narrative) + '</p>' +
          renderStepBody(s) +
        '</section>' +
        '<aside class="tome"><div class="tome-head"><h3 class="tome-title">Tome of Law</h3></div>' +
        '<div class="tome-body">' + EXERCISE.tome.map(function (x) { return '<p>' + esc(x) + '</p>'; }).join('') + '</div></aside>' +
      '</div>' +
      renderModal();

    if (s.type === 'dragdrop' && !state.locked) bindDrag();
  }

  // ── Summary ────────────────────────────────────────────────────────

  function renderSummary() {
    // Fire progress sync
    if (typeof KSync !== 'undefined') {
      KSync.complete({
        exerciseId: EXERCISE.slug,
        exerciseTitle: EXERCISE.title,
        chapterNum: EXERCISE.chapterNum,
        score: state.score,
        total: state.total
      });
    }

    // Expose score for export system
    window._kScore = state.score;
    window._kTotal = state.total;

    var pct = Math.round((state.score / (state.total || 1)) * 100);

    var navHtml = '';
    if (EXERCISE.prevChapter || EXERCISE.nextChapter) {
      navHtml = '<div class="summary-nav">';
      if (EXERCISE.prevChapter) {
        navHtml += '<a href="' + esc(EXERCISE.prevChapter.url) + '" class="btn-secondary" style="text-decoration:none">&larr; ' + esc(EXERCISE.prevChapter.title) + '</a>';
      }
      navHtml += '<a href="../../" class="btn-secondary" style="text-decoration:none">Course Roadmap</a>';
      if (EXERCISE.nextChapter) {
        navHtml += '<a href="' + esc(EXERCISE.nextChapter.url) + '" class="btn-primary" style="text-decoration:none">' + esc(EXERCISE.nextChapter.title) + ' &rarr;</a>';
      }
      navHtml += '</div>';
    }

    el('game').innerHTML =
      '<section class="summary">' +
        '<div class="intro-kicker">Chapter ' + EXERCISE.chapterNum + ' Complete</div>' +
        '<h2>Judgment Filed</h2>' +
        '<span class="summary-score">' + state.score + ' / ' + state.total + '</span>' +
        '<p>' + esc(EXERCISE.title) + ' — ' + pct + '%</p>' +
        '<div id="summary-actions" class="btn-row" style="justify-content:center">' +
          '<button class="btn-secondary" onclick="APP.restart()">Run Again</button>' +
        '</div>' +
        navHtml +
      '</section>';

    // Add export button if export.js is loaded
    if (typeof KExport !== 'undefined') {
      KExport.addButton(document.getElementById('summary-actions'));
    }

    // Load media resources for this chapter
    loadMediaForChapter(EXERCISE.chapterNum);
  }

  // ── Media Resources ───────────────────────────────────────────

  function loadMediaForChapter(chapterNum) {
    fetch('../../data/media-map.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var ch = data.chapters && data.chapters[String(chapterNum)];
        if (!ch) return;
        var container = document.getElementById('summary-actions');
        if (!container) return;

        var mediaHtml = '<div style="margin-top:var(--space-lg);text-align:center">';
        mediaHtml += '<p style="color:var(--muted);font-size:0.9rem;margin-bottom:var(--space-sm)">Review this chapter:</p>';
        mediaHtml += '<div class="btn-row" style="justify-content:center">';

        if (ch.podcast) {
          mediaHtml += '<a href="https://bizlawbreakdown.podbean.com" target="_blank" rel="noopener" class="btn-secondary" style="text-decoration:none">' +
            '&#127911; ' + esc(ch.podcast.title) + '</a>';
        }
        if (ch.video) {
          mediaHtml += '<a href="https://www.youtube.com/watch?v=' + esc(ch.video.id) + '" target="_blank" rel="noopener" class="btn-secondary" style="text-decoration:none">' +
            '&#9654; ' + esc(ch.video.title) + '</a>';
        }

        mediaHtml += '</div></div>';
        container.insertAdjacentHTML('afterend', mediaHtml);
      })
      .catch(function () { /* silent */ });
  }

  // ── Public API ─────────────────────────────────────────────────────

  var APP = {
    openArtifact: function (id) { state.artifactOpen = id; render(); },
    closeArtifact: function (e) {
      var t = e && e.target;
      if (t && !t.classList.contains('modal') && !t.classList.contains('btn-secondary')) return;
      state.artifactOpen = null;
      render();
    },
    pick: function (i) {
      if (state.locked) return;
      var s = step();
      state.selectedChoice = i;
      state.locked = true;
      state.total++;
      state.correct = !!s.options[i].correct;
      if (state.correct) state.score++;
      state.feedback = s.options[i].feedback;
      render();
    },
    hitRedline: function () {
      if (state.locked) return;
      var s = step();
      state.redlineHit = true;
      state.locked = true;
      state.total++;
      state.correct = true;
      state.score++;
      state.feedback = s.success;
      render();
    },
    checkDrag: function () {
      if (state.locked) return;
      var s = step();
      var required = s.requiredAssignments || {};
      var ok = Object.keys(required).every(function (k) {
        return state.dragAssignments[k] === required[k];
      });
      state.locked = true;
      state.total++;
      state.correct = ok;
      if (ok) state.score++;
      state.feedback = ok ? s.success : s.failure;
      render();
    },
    toggleFactor: function (id, checked) {
      if (state.locked) return;
      state.scaleSelections[id] = checked;
      render();
    },
    checkScale: function () {
      if (state.locked) return;
      var s = step();
      var ok = (s.required || []).every(function (id) { return !!state.scaleSelections[id]; });
      state.locked = true;
      state.total++;
      state.correct = ok;
      if (ok) state.score++;
      state.feedback = ok ? s.success : s.failure;
      render();
    },
    setMadlib: function (k, v) {
      if (state.locked) return;
      state.madlibsValues[k] = v;
    },
    checkMadlibs: function () {
      if (state.locked) return;
      var s = step();
      var complete = true;
      var ok = true;
      s.blanks.forEach(function (b) {
        if (!state.madlibsValues[b.key]) complete = false;
        if (state.madlibsValues[b.key] !== b.answer) ok = false;
      });
      if (!complete) {
        state.feedback = 'Fill every blank before checking the holding.';
        state.correct = false;
        render();
        return;
      }
      state.locked = true;
      state.total++;
      state.correct = ok;
      if (ok) state.score++;
      state.feedback = ok ? s.success : s.failure;
      render();
    },
    next: function () {
      if (state.stepIndex < EXERCISE.steps.length - 1) {
        state.stepIndex++;
        resetStep();
        render();
        window.scrollTo(0, 0);
        return;
      }
      state.stepIndex = EXERCISE.steps.length;
      renderSummary();
    },
    restart: function () {
      state.stepIndex = 0;
      state.score = 0;
      state.total = 0;
      state.artifactOpen = null;
      resetStep();
      render();
      window.scrollTo(0, 0);
    }
  };

  // ── Init ───────────────────────────────────────────────────────────

  window.APP = APP;

  function init() {
    // Set page title from EXERCISE data
    if (typeof EXERCISE !== 'undefined' && EXERCISE.title) {
      document.title = EXERCISE.title + ' — Contract Law';
    }
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
