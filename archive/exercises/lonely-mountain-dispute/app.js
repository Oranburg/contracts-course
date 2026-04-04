/**
 * Whose Arkenstone? (Breach & Remedies) — App Logic
 * Contracts remedies simulation classroom tool
 * Theme handled by shared theme.js
 */

// ---------- Navigation ----------

function initNavigation() {
  document.querySelectorAll('[data-scroll]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.querySelector(btn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelectorAll('.nav-link').forEach(function (n) { n.classList.remove('active'); });
      if (btn.classList.contains('nav-link')) btn.classList.add('active');
    });
  });
}

// ---------- Role Tabs ----------

function initRoleTabs() {
  var tabs = document.querySelectorAll('.tab');
  var panels = document.querySelectorAll('.role-panel');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById('role-' + tab.dataset.role).classList.add('active');
    });
  });
}

// ---------- Timer ----------

function initTimer() {
  var timerEl = document.getElementById('timer');
  var minutesInput = document.getElementById('minutes');
  var remaining = parseInt(minutesInput.value, 10) * 60;
  var interval = null;

  function render() {
    var m = Math.floor(remaining / 60).toString().padStart(2, '0');
    var s = (remaining % 60).toString().padStart(2, '0');
    timerEl.textContent = m + ':' + s;
  }

  render();

  document.getElementById('startTimer').addEventListener('click', function () {
    if (interval) return;
    interval = setInterval(function () {
      if (remaining > 0) {
        remaining -= 1;
        render();
      } else {
        clearInterval(interval);
        interval = null;
        timerEl.textContent = 'Time';
      }
    }, 1000);
  });

  document.getElementById('pauseTimer').addEventListener('click', function () {
    clearInterval(interval);
    interval = null;
  });

  document.getElementById('resetTimer').addEventListener('click', function () {
    clearInterval(interval);
    interval = null;
    remaining = parseInt(minutesInput.value || 20, 10) * 60;
    render();
  });

  minutesInput.addEventListener('change', function () {
    remaining = parseInt(minutesInput.value || 20, 10) * 60;
    render();
  });
}

// ---------- Settlement Summary ----------

function buildSummary() {
  if(typeof KSync!=="undefined")KSync.complete({exerciseId:"lonely-mountain-dispute",exerciseTitle:"Whose Arkenstone?",chapterNum:7});
  var remedies = [];
  document.querySelectorAll('.remedy:checked').forEach(function (el) {
    remedies.push(el.value);
  });

  var fields = ['parties', 'payment', 'arkenstone', 'timing', 'form', 'releases', 'admission', 'forum', 'rationale', 'strategy'];
  var parts = {};
  fields.forEach(function (id) {
    var el = document.getElementById(id);
    parts[id] = el ? el.value.trim() : '';
  });

  return [
    'LONELY MOUNTAIN SETTLEMENT SUMMARY',
    '',
    'Parties: ' + (parts.parties || '\u2014'),
    'Remedies in play: ' + (remedies.length ? remedies.join(', ') : '\u2014'),
    'Payment structure: ' + (parts.payment || '\u2014'),
    'Arkenstone treatment: ' + (parts.arkenstone || '\u2014'),
    'Timing: ' + (parts.timing || '\u2014'),
    'Form of payment: ' + (parts.form || '\u2014'),
    'Releases: ' + (parts.releases || '\u2014'),
    'Admission: ' + (parts.admission || '\u2014'),
    'Future dispute resolution: ' + (parts.forum || '\u2014'),
    '',
    'Strategy note:',
    parts.strategy || '\u2014',
    '',
    'Rationale:',
    parts.rationale || '\u2014'
  ].join('\n');
}

function initSettlement() {
  var output = document.getElementById('summaryOutput');

  document.getElementById('generateSummary').addEventListener('click', function () {
    output.textContent = buildSummary();
  });

  document.getElementById('copySummary').addEventListener('click', function () {
    var text = buildSummary();
    output.textContent = text;
    try { navigator.clipboard.writeText(text); } catch (e) { /* fallback: text is visible */ }
  });

  document.getElementById('clearForm').addEventListener('click', function () {
    document.getElementById('termSheet').reset();
    document.getElementById('strategy').value = '';
    document.querySelectorAll('.remedy').forEach(function (el) { el.checked = false; });
    output.textContent = 'No settlement summary generated yet.';
  });
}

// ---------- Init ----------

document.addEventListener('DOMContentLoaded', function () {
  initNavigation();
  initRoleTabs();
  initTimer();
  initSettlement();
});
