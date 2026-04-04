const EXERCISE = {
  "slug": "shire-promises",
  "title": "Shire Promises — Nature of Promises",
  "description": "R2d § 2 objective theory exercise at Bag End.",
  "kicker": "Module 1 • Nature of Promises",
  "subtitle": "Bag End, The Shire",
  "law": "R2d § 2 (Objective Theory of Contracts)",
  "narrative": "Frodo says: \"I intend to give Sam my best gardening shears at harvest.\" Sam cancels his order for new shears. Frodo changes his mind.",
  "image": "https://github.com/user-attachments/assets/baacbe8b-5ffa-4709-a24d-143e682f1edf",
  "tome": [
    "R2d § 2: \"A promise is a manifestation of intention ... so made as to justify a promisee in understanding that a commitment has been made.\"",
    "Casebook: \"A mere expression of an intention is not a promise.\"",
    "Casebook: \"Contract law asks how a reasonable person would interpret objective manifestations.\""
  ],
  "artifacts": [
    {
      "id": "pippin",
      "name": "Pippin Statement",
      "text": "\"He was just musing, not pledging.\""
    },
    {
      "id": "ledger",
      "name": "Shire Smith Ledger",
      "text": "\"Samwise Gamgee cancelled purchase order: shears.\""
    },
    {
      "id": "market",
      "name": "Market Post",
      "text": "\"Harvest shears sold out this week.\""
    }
  ],
  "steps": [
    {
      "type": "desk",
      "irac": "Facts",
      "prompt": "Open all three artifacts in the Investigation Desk before ruling."
    },
    {
      "type": "redline",
      "irac": "Issue",
      "prompt": "Click the word that signals no legal commitment in: \"I intend to give you my shears.\"",
      "docText": "I intend to give you my shears.",
      "target": "intend",
      "success": "Correct. Casebook: \"A mere expression of an intention is not a promise.\""
    },
    {
      "type": "mcq",
      "irac": "Rule + Application",
      "prompt": "Under the objective standard, what did Frodo manifest?",
      "options": [
        {
          "text": "A statement of future intention, not a commitment.",
          "correct": true,
          "feedback": "Yes. Casebook: contract law focuses on \"outward expressions\" showing commitment."
        },
        {
          "text": "A binding promise because Sam relied.",
          "correct": false,
          "feedback": "Reliance alone does not convert non-commitment words into a promise under § 2."
        },
        {
          "text": "An enforceable option contract.",
          "correct": false,
          "feedback": "No option language or bargained-for option appears in the facts."
        }
      ]
    },
    {
      "type": "madlibs",
      "irac": "Conclusion",
      "prompt": "Complete the holding:",
      "template": "The court finds no [A] because Frodo's words were a [B] and not a [C]. Under the [D], no commitment was manifested.",
      "blanks": [
        {
          "key": "A",
          "options": [
            "contract",
            "option",
            "settlement"
          ],
          "answer": "contract"
        },
        {
          "key": "B",
          "options": [
            "statement of intention",
            "firm offer",
            "bargained exchange"
          ],
          "answer": "statement of intention"
        },
        {
          "key": "C",
          "options": [
            "promise",
            "consideration",
            "memorandum"
          ],
          "answer": "promise"
        },
        {
          "key": "D",
          "options": [
            "objective standard",
            "subjective hope",
            "trade usage"
          ],
          "answer": "objective standard"
        }
      ],
      "success": "Holding complete and doctrinally aligned with R2d § 2 and casebook language.",
      "failure": "Revise to match objective-manifestation analysis."
    }
  ]
};


const state = {
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
  madlibsValues: {},
};

function el(id){return document.getElementById(id)}
function step(){return EXERCISE.steps[state.stepIndex]}
function esc(v){return String(v ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;')}

function resetStep(){
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

function gradedCount(){
  return EXERCISE.steps.filter(s => ['mcq','redline','dragdrop','madlibs','scales','objection'].includes(s.type)).length;
}

function renderArtifacts(){
  return '<div class="card-grid">' + EXERCISE.artifacts.map(a =>
    `<button class="artifact-card" onclick="APP.openArtifact('${a.id}')"><span class="artifact-name">${esc(a.name)}</span><span class="artifact-note">Click to read evidence.</span></button>`
  ).join('') + '</div>';
}

function renderFeedback(){
  if(!state.feedback) return '';
  return `<div class="feedback ${state.correct ? 'ok' : 'bad'}">${esc(state.feedback)}</div>`;
}

function renderMCQ(s){
  const choices = s.options.map((o,i)=>{
    let cls='choice';
    if(state.locked){
      if(o.correct) cls+=' correct';
      else if(state.selectedChoice===i) cls+=' wrong';
      else cls+=' dim';
    }
    return `<button class="${cls}" ${state.locked?'disabled':''} onclick="APP.pick(${i})">${esc(o.text)}</button>`;
  }).join('');
  return `<p class="prompt">${esc(s.prompt)}</p><div class="choices">${choices}</div>${renderFeedback()}${state.locked?'<div class="btn-row"><button class="btn-primary" onclick="APP.next()">Continue</button></div>':''}`;
}

function renderDesk(s){
  return `<p class="prompt">${esc(s.prompt)}</p>${renderArtifacts()}<div class="btn-row"><button class="btn-primary" onclick="APP.next()">Continue</button></div>`;
}

function renderInfo(s){
  return `<p class="prompt">${esc(s.prompt)}</p><div class="btn-row"><button class="btn-primary" onclick="APP.next()">Continue</button></div>`;
}

function renderRedline(s){
  const raw=s.docText||''; const target=s.target||''; const i=raw.indexOf(target);
  let doc=esc(raw);
  if(i>=0&&target){
    doc = esc(raw.slice(0,i)) + `<span class="redline-target ${state.redlineHit?'hit':''}" onclick="APP.hitRedline()">${esc(target)}</span>` + esc(raw.slice(i+target.length));
  }
  return `<p class="prompt">${esc(s.prompt)}</p><div class="redline-doc">${doc}</div>${renderFeedback()}${state.locked?'<div class="btn-row"><button class="btn-primary" onclick="APP.next()">Continue</button></div>':''}`;
}

function renderDragDrop(s){
  const pool=s.tokens.filter(t=>!state.dragAssignments[t.id]).map(t=>`<div class="draggable" draggable="true" data-token="${t.id}">${esc(t.label)}</div>`).join('');
  const buckets=s.buckets.map(b=>{
    const items=Object.keys(state.dragAssignments).filter(k=>state.dragAssignments[k]===b.id).map(id=>{
      const tok=s.tokens.find(t=>t.id===id); return `<div class="drop-item">${esc(tok?tok.label:id)}</div>`;
    }).join('');
    return `<div class="bucket" data-bucket="${b.id}"><h4>${esc(b.label)}</h4>${items}</div>`;
  }).join('');
  return `<p class="prompt">${esc(s.prompt)}</p><div class="bucket-wrap"><div class="bucket" data-bucket="pool"><h4>Evidence Desk</h4>${pool}</div>${buckets}</div><div class="drop-message">${esc(state.dragMessage||'')}</div>${renderFeedback()}<div class="btn-row">${state.locked?'<button class="btn-primary" onclick="APP.next()">Continue</button>':'<button class="btn-primary" onclick="APP.checkDrag()">Evaluate Board</button>'}</div>`;
}

function renderScales(s){
  const selected=Object.keys(state.scaleSelections).filter(k=>state.scaleSelections[k]);
  const width=50+Math.round((selected.length/s.factors.length)*50);
  return `<p class="prompt">${esc(s.prompt)}</p><div class="scale-wrap"><div class="factor-list">${s.factors.map(f=>`<label><input type="checkbox" ${state.scaleSelections[f.id]?'checked':''} onchange="APP.toggleFactor('${f.id}', this.checked)"> ${esc(f.label)}</label>`).join('')}</div><div class="scale-meter"><div class="fill" style="width:${width}%"></div></div><div class="scale-labels"><span>Material Breach</span><span>Substantial Performance</span></div></div>${renderFeedback()}<div class="btn-row">${state.locked?'<button class="btn-primary" onclick="APP.next()">Continue</button>':'<button class="btn-primary" onclick="APP.checkScale()">Lock Balancing Test</button>'}</div>`;
}

function renderMadlibs(s){
  let t=s.template;
  s.blanks.forEach(b=>{
    const sel=`<select onchange="APP.setMadlib('${b.key}', this.value)"><option value="">Select</option>${b.options.map(o=>`<option value="${esc(o)}" ${state.madlibsValues[b.key]===o?'selected':''}>${esc(o)}</option>`).join('')}</select>`;
    t=t.replace(`[${b.key}]`, sel);
  });
  return `<p class="prompt">${esc(s.prompt)}</p><div class="madlibs">${t}</div>${renderFeedback()}<div class="btn-row">${state.locked?'<button class="btn-primary" onclick="APP.next()">Continue</button>':'<button class="btn-primary" onclick="APP.checkMadlibs()">Check Holding</button>'}</div>`;
}

function renderPivot(s){
  return `<p class="prompt">${esc(s.prompt)}</p><div class="feedback ok">Casebook path: if bargain consideration fails, analyze reliance-based enforcement under § 90.</div><div class="btn-row"><button class="btn-primary" onclick="APP.next()">${esc(s.button || 'Continue')}</button></div>`;
}

function renderObjection(s){
  return `<div class="modal"><div class="modal-card"><h3 class="modal-title">Objection!</h3><p class="prompt">${esc(s.prompt)}</p><div class="choices">${s.options.map((o,i)=>`<button class="choice" onclick="APP.pickObjection(${i})">${esc(o.text)}</button>`).join('')}</div>${renderFeedback()}${state.locked?'<div class="btn-row"><button class="btn-primary" onclick="APP.next()">Continue</button></div>':''}</div></div>`;
}

function renderStepBody(s){
  if(s.type==='desk') return renderDesk(s);
  if(s.type==='mcq') return renderMCQ(s);
  if(s.type==='redline') return renderRedline(s);
  if(s.type==='dragdrop') return renderDragDrop(s);
  if(s.type==='scales') return renderScales(s);
  if(s.type==='madlibs') return renderMadlibs(s);
  if(s.type==='pivot') return renderPivot(s);
  if(s.type==='objection') return renderObjection(s);
  return renderInfo(s);
}

function renderModal(){
  if(!state.artifactOpen) return '';
  const a = EXERCISE.artifacts.find(x=>x.id===state.artifactOpen);
  if(!a) return '';
  return `<div class="modal" onclick="APP.closeArtifact(event)"><div class="modal-card"><h3 class="modal-title">${esc(a.name)}</h3><p>${esc(a.text)}</p><div class="btn-row"><button class="btn-secondary" onclick="APP.closeArtifact(event)">Close</button></div></div></div>`;
}

function bindDrag(){
  const s=step();
  document.querySelectorAll('.draggable').forEach(item=>{
    item.addEventListener('dragstart',ev=>{ev.dataTransfer.setData('text/plain', item.dataset.token); ev.dataTransfer.effectAllowed='move';});
  });
  document.querySelectorAll('.bucket').forEach(bucket=>{
    bucket.addEventListener('dragover',ev=>{ev.preventDefault(); bucket.classList.add('over');});
    bucket.addEventListener('dragleave',()=>bucket.classList.remove('over'));
    bucket.addEventListener('drop',ev=>{
      ev.preventDefault(); bucket.classList.remove('over');
      const tokenId=ev.dataTransfer.getData('text/plain'); const b=bucket.dataset.bucket;
      if(b==='pool'){ delete state.dragAssignments[tokenId]; state.dragMessage=''; render(); return; }
      state.dragAssignments[tokenId]=b; state.dragMessage=''; render();
    });
  });
}

function render(){
  if(state.stepIndex>=EXERCISE.steps.length){ renderSummary(); return; }
  const s=step();
  const done=state.total; const total=gradedCount(); const pct=total?Math.round((done/total)*100):0;
  el('game').innerHTML = `
    <section class="intro" style="margin-bottom:var(--space-lg)">
      <div class="intro-kicker">${esc(EXERCISE.kicker)}</div>
      <h1>${esc(EXERCISE.title)}</h1>
      <p class="intro-doctrine">${esc(EXERCISE.law)}</p>
      <div class="intro-art"><img src="${esc(EXERCISE.image)}" alt="${esc(EXERCISE.subtitle)}"></div>
    </section>
    <div class="progress-wrap"><div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div><div class="progress-meta"><span>Step ${state.stepIndex+1} of ${EXERCISE.steps.length}</span><span>Score: ${state.score}/${state.total}</span></div></div>
    <div class="exercise-layout">
      <section class="stage">
        <div class="stage-header"><div><div class="stage-module">${esc(EXERCISE.subtitle)}</div><h2 class="stage-title">${esc(s.irac || 'Analysis')}</h2></div><span class="stage-irac">Standalone Exercise</span></div>
        <p class="story">${esc(EXERCISE.narrative)}</p>
        ${renderStepBody(s)}
      </section>
      <aside class="tome"><div class="tome-head"><h3 class="tome-title">Tome of Law</h3></div><div class="tome-body">${EXERCISE.tome.map(x=>`<p>${esc(x)}</p>`).join('')}</div></aside>
    </div>
    ${state.stepIndex>=EXERCISE.steps.length?'' : renderModal()}
  `;
  if(s.type==='dragdrop' && !state.locked) bindDrag();
  if(state.stepIndex>=EXERCISE.steps.length) renderSummary();
}

function renderSummary(){
  if(typeof KSync!=="undefined")KSync.complete({exerciseId:"shire-promises",exerciseTitle:"Shire Promises",chapterNum:1,score:state.score,total:state.total,mastery:state.mastery});
  const pct = Math.round((state.score/(state.total||1))*100);
  el('game').innerHTML = `<section class="summary"><div class="intro-kicker">Complete</div><h2>Judgment Filed</h2><p>You completed <strong>${esc(EXERCISE.title)}</strong> with <strong>${state.score}/${state.total}</strong> (${pct}%).</p><div class="btn-row" style="justify-content:center"><button class="btn-primary" onclick="APP.restart()">Run Again</button></div></section>`;
}

const APP = {
  openArtifact(id){state.artifactOpen=id; render();},
  closeArtifact(e){
    const t=e&&e.target;
    if(t && !t.classList.contains('modal') && !t.classList.contains('btn-secondary')) return;
    state.artifactOpen=null; render();
  },
  pick(i){
    if(state.locked) return;
    const s=step(); state.selectedChoice=i;
    state.locked=true; state.total++; state.correct=!!s.options[i].correct; if(state.correct) state.score++;
    state.feedback=s.options[i].feedback; render();
  },
  pickObjection(i){ this.pick(i); },
  hitRedline(){
    if(state.locked) return;
    const s=step(); state.redlineHit=true; state.locked=true; state.total++; state.correct=true; state.score++; state.feedback=s.success; render();
  },
  checkDrag(){
    if(state.locked) return;
    const s=step();
    const ok = Object.keys(s.requiredAssignments||{}).every(k=>state.dragAssignments[k]===s.requiredAssignments[k]);
    state.locked=true; state.total++; state.correct=ok; if(ok) state.score++; state.feedback=ok?s.success:s.failure; render();
  },
  toggleFactor(id,checked){ if(state.locked) return; state.scaleSelections[id]=checked; render(); },
  checkScale(){
    if(state.locked) return;
    const s=step();
    const ok=(s.required||[]).every(id=>!!state.scaleSelections[id]);
    state.locked=true; state.total++; state.correct=ok; if(ok) state.score++; state.feedback=ok?s.success:s.failure; render();
  },
  setMadlib(k,v){ if(state.locked) return; state.madlibsValues[k]=v; },
  checkMadlibs(){
    if(state.locked) return;
    const s=step(); let complete=true, ok=true;
    s.blanks.forEach(b=>{ if(!state.madlibsValues[b.key]) complete=false; if(state.madlibsValues[b.key]!==b.answer) ok=false; });
    if(!complete){ state.feedback='Fill every blank before checking the holding.'; state.correct=false; render(); return; }
    state.locked=true; state.total++; state.correct=ok; if(ok) state.score++; state.feedback=ok?s.success:s.failure; render();
  },
  next(){
    if(state.stepIndex < EXERCISE.steps.length - 1){ state.stepIndex++; resetStep(); render(); return; }
    renderSummary();
  },
  restart(){
    state.stepIndex=0; state.score=0; state.total=0; state.artifactOpen=null; resetStep(); render();
  }
}

window.APP=APP;
document.addEventListener('DOMContentLoaded', render);
