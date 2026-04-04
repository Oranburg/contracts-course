var MODULES = [
  {
    id: 'm3',
    title: 'Module 3 — Consideration & Promissory Estoppel',
    subtitle: 'Bilbo, Frodo, and the Mithril Promise',
    narrative: 'Bilbo Baggins speaks to young Frodo. "If you travel to Rivendell and present yourself to Elrond, I promise to bestow upon you my priceless Mithril shirt." Frodo spends 50 silver pennies on supplies and braves dangerous roads to reach Rivendell. Elrond informs Frodo that Bilbo changed his mind. Frodo sues Bilbo.',
    tome: [
      'R2d § 71 (Consideration): "To constitute consideration, a performance or a return promise must be bargained for..."',
      'The Holmesian Formula: "The promise must induce the detriment and the detriment must induce the promise."',
      'R2d § 90 (Promissory Estoppel): "A promise which the promisor should reasonably expect to induce action or forbearance... and which does induce such action or forbearance is binding if injustice can be avoided only by enforcement of the promise."'
    ],
    artifacts: [
      { id: 'elrond-deposition', name: "Elrond's Witness Deposition", text: '"Bilbo confessed he did not care whether Frodo went to Rivendell. He simply wanted to give the boy a gift."' },
      { id: 'frodo-receipt', name: "Frodo's Travel Receipt", text: '"50 silver pennies for rations and rope."' }
    ],
    steps: [
      { type: 'desk', irac: 'Facts', prompt: 'Open each artifact on the Investigation Desk before analyzing enforceability.' },
      {
        type: 'mcq', irac: 'Issue', prompt: "Did Bilbo's promise create a binding bargain contract?",
        options: [
          { text: 'No, this was a conditional gift.', correct: true, feedback: 'Correct. The proper bargain-contract classification is a conditional gift, not bargained-for exchange.' },
          { text: 'Yes, Frodo accepted by performance and a bargain contract formed.', correct: false, feedback: 'Not here. The better characterization under the given facts is a conditional gift.' },
          { text: 'Yes, because any promise tied to travel is consideration.', correct: false, feedback: 'Travel conditions can be logistical steps to receive a gift rather than bargained-for exchange.' }
        ]
      },
      {
        type: 'mcq', irac: 'Rule + Application', prompt: 'Applying the Holmesian formula, why is this a conditional gift?',
        options: [
          { text: "Bilbo's promise did not induce the detriment; travel was merely a necessary logistical step to receive the gift.", correct: true, feedback: 'Exactly. Under the Holmesian formula, the induced-bargain nexus is missing.' },
          { text: 'Because gifts can never be delivered in another location.', correct: false, feedback: 'Location is not the doctrine. The key is whether detriment and promise induced one another.' },
          { text: 'Because Elrond was a third party and all third-party delivery promises fail.', correct: false, feedback: 'Third-party involvement alone is not dispositive.' }
        ]
      },
      {
        type: 'objection',
        irac: 'Objection!',
        prompt: `Bilbo's counsel interrupts: "Objection! Bilbo acted in good faith and didn't mean to deceive Frodo!"`,
        timer: 12,
        options: [
          { text: 'Overrule the objection.', correct: true, feedback: 'Correct. Bad faith is not a required element of Promissory Estoppel under § 90; reasonable reliance is the focus.' },
          { text: 'Sustain the objection.', correct: false, feedback: 'Not correct. Promissory estoppel does not require proof of bad faith deception.' }
        ],
        timeoutFeedback: 'Time. The objection should be overruled: § 90 turns on reasonable reliance and injustice, not bad faith.'
      },
      {
        type: 'madlibs',
        irac: 'Conclusion',
        prompt: 'Complete the ruling:',
        template: 'Because Frodo detrimentally relied on the promise, the court awards [A] in the amount of [B] rather than [C] to prevent a disproportionate windfall.',
        blanks: [
          { key: 'A', options: ['Reliance Damages', 'Expectation Damages', 'Restitution'], answer: 'Reliance Damages' },
          { key: 'B', options: ['50 silver pennies', '1 Mithril shirt', '500 gold pieces'], answer: '50 silver pennies' },
          { key: 'C', options: ['Expectation Damages', 'Specific Performance', 'Punitive Damages'], answer: 'Expectation Damages' }
        ],
        success: 'Correct conclusion: reliance recovery of 50 silver pennies avoids an expectation windfall.',
        failure: 'Try again: match the conclusion to reliance-based enforcement under § 90.'
      }
    ]
  },
  {
    id: 'm4a',
    title: 'Module 4a — Statute of Frauds',
    subtitle: 'Isengard Pike Contract',
    narrative: 'Saruman orally agrees to purchase 10,000 pikes from the Dunlending smiths for 500 gold pieces. The smiths forge the pikes with the White Hand of Isengard deeply etched into the steel. Saruman breaches the agreement.',
    tome: [
      'UCC § 2-201(1): A contract for the sale of goods for $500 or more is not enforceable unless there is a signed writing.',
      'UCC § 2-201(3)(a) [Specially Manufactured Goods Exception].'
    ],
    artifacts: [
      { id: 'unsigned-order', name: 'Unsigned Requisition Order', text: '"10,000 pikes for 500 gold pieces."' },
      { id: 'white-hand-blueprint', name: "The Blacksmith's Blueprint", text: 'Shows the White Hand etching on each pike shaft and blade collar.' }
    ],
    steps: [
      {
        type: 'mcq', irac: 'Issue', prompt: 'Does the Statute of Frauds apply?',
        options: [
          { text: 'Yes, sale of goods for $500 or more.', correct: true, feedback: 'Correct. This transaction triggers UCC § 2-201(1).' },
          { text: 'No, because pikes are military goods.', correct: false, feedback: 'Type of goods does not remove § 2-201 coverage.' },
          { text: 'No, because quantity terms are clear.', correct: false, feedback: 'A clear quantity term does not replace the writing requirement under § 2-201(1).' }
        ]
      },
      {
        type: 'dragdrop',
        irac: 'Application',
        prompt: "Drag each artifact into the best category. To defeat Saruman's defense, place the Blueprint correctly.",
        tokens: [
          { id: 'unsigned-order', label: 'Unsigned Requisition Order' },
          { id: 'white-hand-blueprint', label: "Blacksmith's Blueprint" }
        ],
        buckets: [
          { id: 'signed-writing', label: 'Signed Writing' },
          { id: 'specially-manufactured', label: 'Specially Manufactured Goods' }
        ],
        reject: { tokenId: 'unsigned-order', bucketId: 'signed-writing', message: 'Rejected: unsigned requisition order cannot satisfy the Signed Writing bucket.' },
        required: { tokenId: 'white-hand-blueprint', bucketId: 'specially-manufactured' },
        success: 'Correct. The blueprint belongs in Specially Manufactured Goods.',
        failure: 'Not yet. Place the blueprint in Specially Manufactured Goods under § 2-201(3)(a).'
      },
      {
        type: 'mcq',
        irac: 'Rule + Application',
        prompt: 'How does the blueprint defeat the defense?',
        options: [
          { text: 'The White Hand etching makes the goods "not suitable for sale to others in the ordinary course of business," triggering UCC § 2-201(3)(a).', correct: true, feedback: 'Exactly. The customization triggers the specially manufactured goods exception.' },
          { text: 'It proves Saruman signed the contract.', correct: false, feedback: 'The blueprint does not substitute for a signed writing by Saruman.' },
          { text: 'It eliminates all writing requirements for goods contracts.', correct: false, feedback: 'No. It supports a specific exception, not elimination of § 2-201.' }
        ]
      }
    ]
  },
  {
    id: 'm4b',
    title: 'Module 4b — Improper Bargaining',
    subtitle: 'Théoden and Wormtongue',
    narrative: `King Théoden is weakened and isolated. Gríma Wormtongue relentlessly pressures him into signing a contract granting Isengard exclusive rights to all of Rohan's grain, assuring the King it is "necessary for Rohan's survival."`,
    tome: [
      'R2d § 175 (Duress): Assent induced by an improper threat leaving no reasonable alternative.',
      'R2d § 177 (Undue Influence): Unfair persuasion of a party under the domination of the person exercising the persuasion.'
    ],
    steps: [
      {
        type: 'mcq', irac: 'Issue', prompt: 'Under what doctrine should Théoden seek to void the contract?',
        options: [
          { text: 'Undue Influence.', correct: true, feedback: 'Correct. The better doctrine here is undue influence.' },
          { text: 'Duress.', correct: false, feedback: 'Duress centers on improper threats; these facts emphasize domination and unfair persuasion.' },
          { text: 'Promissory Estoppel.', correct: false, feedback: 'Promissory estoppel is not the voidability doctrine for this pressure scenario.' }
        ]
      },
      {
        type: 'mcq', irac: 'Rule + Application', prompt: 'Why Undue Influence over Duress?',
        options: [
          { text: 'Gríma did not make an improper threat; he exploited a special relationship of trust and used excessive persuasion.', correct: true, feedback: 'Exactly. The fact pattern points to unfair persuasion under domination.' },
          { text: 'Because duress only applies to physical violence.', correct: false, feedback: 'Duress can include non-physical threats; this answer overstates the rule.' },
          { text: 'Because kings cannot claim duress.', correct: false, feedback: 'Status does not bar duress categorically.' }
        ]
      },
      {
        type: 'madlibs',
        irac: 'Conclusion',
        prompt: 'Complete the ruling:',
        template: `The contract is [A] because Gríma Wormtongue's actions constitute [B], which is defined as [C] that overcame the King's independent judgment.`,
        blanks: [
          { key: 'A', options: ['Voidable', 'Void', 'Automatically Enforceable'], answer: 'Voidable' },
          { key: 'B', options: ['Undue Influence', 'Duress', 'Fraud in the Factum'], answer: 'Undue Influence' },
          { key: 'C', options: ['excessive persuasion', 'an improper threat', 'a writing defect'], answer: 'excessive persuasion' }
        ],
        success: 'Correct. This tracks the module conclusion exactly.',
        failure: 'Try again: the holding language is voidable + undue influence + excessive persuasion.'
      }
    ]
  },
  {
    id: 'm5',
    title: 'Module 5 — Interpretation & Ambiguity',
    subtitle: 'Dwarves, Elves, and “Precious Metal”',
    narrative: 'The Dwarves of Moria contract to sell 1,000 pounds of "precious metal" to the Elves. The Dwarves deliver silver. The Elves expected Mithril based on 50 prior contracts between them.',
    tome: [
      'UCC § 1-303 Hierarchy: (1) Express Terms, (2) Course of Performance, (3) Course of Dealing, (4) Trade Usage.'
    ],
    steps: [
      {
        type: 'redline',
        irac: 'Issue',
        prompt: 'Highlight the latent ambiguity in this contract by clicking the right phrase.',
        docText: 'Seller agrees to deliver 1,000 pounds of precious metal to Buyer in exchange for agreed payment.',
        target: 'precious metal',
        success: 'Correct. “precious metal” is the phrase that becomes ambiguous in context.'
      },
      {
        type: 'mcq', irac: 'Issue', prompt: 'What type of ambiguity is this?',
        options: [
          { text: 'Latent Ambiguity, because it only arises when applied to external circumstances.', correct: true, feedback: 'Correct. The ambiguity emerges when the term is applied to context and prior dealings.' },
          { text: 'Patent Ambiguity, because the text is grammatically broken.', correct: false, feedback: 'The phrase is facially clear; ambiguity appears in application.' },
          { text: 'No ambiguity exists if both metals are valuable.', correct: false, feedback: 'Value alone does not resolve meaning.' }
        ]
      },
      {
        type: 'mcq', irac: 'Rule', prompt: 'Applying the UCC hierarchy, which controls?',
        options: [
          { text: 'Course of Dealing overrides Trade Usage.', correct: true, feedback: 'Correct under the stated hierarchy ranking in this module.' },
          { text: 'Trade Usage overrides all prior interactions.', correct: false, feedback: 'Not under the provided hierarchy.' },
          { text: 'Trade Usage and Course of Dealing are always equal.', correct: false, feedback: 'The provided hierarchy orders them.' }
        ]
      },
      {
        type: 'info',
        irac: 'Application + Conclusion',
        prompt: 'Rule for the Elves: The 50 prior deliveries of Mithril establish a common basis of understanding.'
      }
    ]
  },
  {
    id: 'm6a',
    title: 'Module 6a — Substantial Performance vs. Material Breach',
    subtitle: 'Minas Tirith Gate Stone',
    narrative: 'Aragorn hires a master builder to reconstruct the outer gates of Minas Tirith for 50,000 silver pieces, specifying "White Stone." The builder mistakenly uses "Grey Stone." Structural integrity is identical. Replacing the stone requires demolishing the gate (costing 60,000 silver). The diminution in market value is 0 silver. Aragorn refuses to pay.',
    tome: [
      'R2d § 241: Factors for determining material breach.',
      'Substantial Performance: Jacob & Youngs v. Kent.',
      'Economic Waste: Diminution in value vs. Cost of completion.'
    ],
    steps: [
      {
        type: 'mcq',
        irac: 'Issue',
        prompt: 'What is the central determination?',
        options: [
          { text: 'Material breach vs. Substantial performance.', correct: true, feedback: 'Correct. That is the core doctrinal determination.' },
          { text: 'Whether the contract was ever formed.', correct: false, feedback: 'Formation is not the central issue in this fact pattern.' },
          { text: 'Whether this is a Statute of Frauds dispute.', correct: false, feedback: 'This is a performance/remedy dispute, not writing enforceability.' }
        ]
      },
      {
        type: 'scales',
        irac: 'Rule + Application',
        prompt: 'Check all present factors and watch the Scales of Justice tip.',
        factors: [
          { id: 'venial', label: 'Defect is a venial fault', weight: 1 },
          { id: 'integrity', label: 'Structural integrity is intact', weight: 1 },
          { id: 'waste', label: 'Demolition causes Economic Waste', weight: 1 }
        ],
        required: ['venial', 'integrity', 'waste'],
        success: 'The scale tips to Substantial Performance (Minor Breach).',
        failure: 'Select all three listed factors to complete the balancing test.'
      },
      {
        type: 'mcq',
        irac: 'Conclusion',
        prompt: 'What damages is Aragorn entitled to?',
        options: [
          { text: 'Diminution in Value. Aragorn must pay 50,000 silver minus the 0 silver difference in value to avoid Economic Waste.', correct: true, feedback: 'Correct. With zero diminution and massive completion cost, economic waste reasoning points to payment less 0.' },
          { text: 'Cost of completion: 60,000 silver.', correct: false, feedback: 'That would impose economic waste under these facts.' },
          { text: 'No payment at all because any deviation is material.', correct: false, feedback: 'The balancing factors point to substantial, not failed, performance.' }
        ]
      }
    ]
  },
  {
    id: 'm6b',
    title: 'Module 6b — Excuse from Performance',
    subtitle: 'Prancing Pony Balcony and the Canceled Procession',
    narrative: 'A merchant rents a premium balcony room at the Prancing Pony in Bree for 100 silver pennies to watch a highly anticipated procession of Rangers. The Nazgûl attack, and the Rangers cancel the parade. The merchant refuses to pay for the room.',
    tome: [
      'R2d § 261 (Impracticability)',
      'R2d § 265 (Frustration of Purpose) (Krell v. Henry).'
    ],
    artifacts: [
      { id: 'rental-contract', name: 'Room Rental Contract', text: '"Room 4 with balcony."' },
      { id: 'town-crier', name: 'Bree Town Crier Flyer', text: '"Watch the Ranger Procession! Best views from the Prancing Pony balconies!"' }
    ],
    steps: [
      { type: 'desk', irac: 'Facts', prompt: 'Review both artifacts to identify the shared basic assumption.' },
      {
        type: 'mcq', irac: 'Issue', prompt: 'Which excuse doctrine applies?',
        options: [
          { text: 'Frustration of Purpose.', correct: true, feedback: 'Correct. The principal purpose was destroyed though occupancy remains possible.' },
          { text: 'Impossibility only.', correct: false, feedback: 'It is still physically possible to occupy the room.' },
          { text: 'No excuse doctrine applies.', correct: false, feedback: 'The cancellation event directly undercuts the principal purpose.' }
        ]
      },
      {
        type: 'mcq', irac: 'Rule + Application', prompt: 'Why Frustration of Purpose over Impossibility?',
        options: [
          { text: 'It is not physically impossible to occupy the room; rather, the principal purpose has been destroyed.', correct: true, feedback: 'Exactly. The doctrine distinction tracks physical possibility vs. defeated purpose.' },
          { text: 'Because impossibility only applies to goods contracts.', correct: false, feedback: 'Impossibility/impracticability are not limited that way.' },
          { text: 'Because parade cancellation is always foreseeable.', correct: false, feedback: 'Foreseeability is not resolved by that blanket statement.' }
        ]
      },
      {
        type: 'artifact-choice',
        irac: 'Application',
        prompt: 'Which artifact proves Butterbur knew the principal purpose of the contract?',
        options: [
          { id: 'town-crier', text: 'The Town Crier Flyer, establishing a shared basic assumption.', correct: true, feedback: 'Correct. The flyer links the balcony rental to the procession purpose.' },
          { id: 'rental-contract', text: 'The Room Rental Contract only.', correct: false, feedback: 'The contract text alone does not show the parade-purpose knowledge as clearly as the flyer.' }
        ]
      },
      {
        type: 'info',
        irac: 'Conclusion',
        prompt: 'The merchant is excused from paying because the foundation of the contract was destroyed by an unforeseeable event.'
      }
    ]
  }
];

var state = {
  screen: 'intro',
  moduleIndex: 0,
  stepIndex: 0,
  score: 0,
  total: 0,
  tomeOpen: true,
  artifactOpen: null,
  choiceLocked: false,
  stepFeedback: '',
  stepCorrect: false,
  dragAssignments: {},
  dragMessage: '',
  redlineHit: false,
  scaleSelections: {},
  madlibsValues: {},
  objectionTimerId: null,
  objectionSeconds: 0,
  objectionExpired: false,
  summary: [],
  selectedChoice: -1
};

function el(id) { return document.getElementById(id); }
function currentModule() { return MODULES[state.moduleIndex]; }
function currentStep() { return currentModule().steps[state.stepIndex]; }

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function clearObjectionTimer() {
  if (state.objectionTimerId) {
    clearInterval(state.objectionTimerId);
    state.objectionTimerId = null;
  }
}

function resetPerStepState() {
  clearObjectionTimer();
  state.choiceLocked = false;
  state.stepFeedback = '';
  state.stepCorrect = false;
  state.artifactOpen = null;
  state.dragMessage = '';
  state.redlineHit = false;
  state.scaleSelections = {};
  state.madlibsValues = {};
  state.objectionExpired = false;
  state.selectedChoice = -1;
  if (currentStep().type === 'dragdrop') state.dragAssignments = {};
  if (currentStep().type === 'objection') state.objectionSeconds = currentStep().timer || 10;
}

function totalGradedSteps() {
  var n = 0;
  MODULES.forEach(function (m) {
    m.steps.forEach(function (s) {
      if (['mcq', 'objection', 'dragdrop', 'redline', 'scales', 'madlibs', 'artifact-choice'].indexOf(s.type) >= 0) n++;
    });
  });
  return n;
}

function renderIntro() {
  var list = MODULES.map(function (m) {
    return '<div class="module-item"><strong>' + escapeHtml(m.title) + '</strong><div>' + escapeHtml(m.subtitle) + '</div></div>';
  }).join('');
  el('game').innerHTML = '<section class="intro">'
    + '<div class="intro-kicker">Contracts Course &bull; Fellowship of the Contract</div>'
    + '<h1>The Fellowship of the Contract</h1>'
    + '<p class="intro-doctrine">Interactive IRAC Investigations — Modules 3, 4a, 4b, 5, 6a, 6b</p>'
    + '<p class="intro-copy">Use the Investigation Desk, Tome of Law, Redline issue spotting, Objection interruptions, balancing scales, and Mad-Libs holdings to apply black-letter law across six Middle-earth hypotheticals.</p>'
    + '<div class="intro-art"><img src="https://github.com/user-attachments/assets/baacbe8b-5ffa-4709-a24d-143e682f1edf" alt="Bilbo promising Frodo a mithril shirt at the doorway of Bag End"></div>'
    + '<div class="module-list">' + list + '</div>'
    + '<button class="btn-primary" onclick="FEL.start()">Begin Exercise Suite</button>'
    + '</section>';
}

function renderProgress() {
  var done = state.summary.length;
  var total = totalGradedSteps();
  var pct = total ? (done / total) * 100 : 0;
  return '<div class="progress-wrap"><div class="progress-bar"><div class="progress-fill" style="width:' + pct + '%"></div></div><div class="progress-meta"><span>Module ' + (state.moduleIndex + 1) + ' of ' + MODULES.length + '</span><span>Score: ' + state.score + ' / ' + state.total + '</span></div></div>';
}

function renderTome(module) {
  return '<aside class="tome" aria-label="Tome of Law"><div class="tome-head"><h3 class="tome-title">Tome of Law</h3><button class="btn-secondary" onclick="FEL.toggleTome()">' + (state.tomeOpen ? 'Hide' : 'Show') + '</button></div><div class="tome-body">' + module.tome.map(function (line) { return '<p>' + escapeHtml(line) + '</p>'; }).join('') + '</div></aside>';
}

function renderArtifactCards(module) {
  if (!module.artifacts) return '';
  return '<div class="card-grid">' + module.artifacts.map(function (a) {
    return '<button class="artifact-card" onclick="FEL.openArtifact(\'' + a.id + '\')"><span class="artifact-name">' + escapeHtml(a.name) + '</span><span class="artifact-note">Click to read evidence.</span></button>';
  }).join('') + '</div>';
}

function lockStep(correct, feedback) {
  state.total++;
  if (correct) state.score++;
  state.choiceLocked = true;
  state.stepCorrect = correct;
  state.stepFeedback = feedback;
  state.summary.push({ module: currentModule().id, step: state.stepIndex, correct: correct });
  render();
}

function renderMCQ(step) {
  var choices = step.options.map(function (opt, idx) {
    var cls = 'choice';
    if (state.choiceLocked) {
      if (opt.correct) cls += ' correct';
      else if (state.selectedChoice === idx) cls += ' wrong';
      else cls += ' dim';
    }
    return '<button class="' + cls + '" ' + (state.choiceLocked ? 'disabled' : '') + ' onclick="FEL.pickChoice(' + idx + ')">' + escapeHtml(opt.text) + '</button>';
  }).join('');
  var feedback = state.stepFeedback ? '<div class="feedback ' + (state.stepCorrect ? 'ok' : 'bad') + '">' + escapeHtml(state.stepFeedback) + '</div>' : '';
  var btn = state.choiceLocked ? '<div class="btn-row"><button class="btn-primary" onclick="FEL.next()">Continue</button></div>' : '';
  return '<p class="prompt">' + escapeHtml(step.prompt) + '</p><div class="choices">' + choices + '</div>' + feedback + btn;
}

function renderObjection(step) {
  if (!state.objectionTimerId && !state.choiceLocked && !state.objectionExpired) {
    state.objectionTimerId = setInterval(function () {
      state.objectionSeconds -= 1;
      var clock = el('objection-clock');
      if (clock) clock.textContent = String(state.objectionSeconds);
      if (state.objectionSeconds <= 0) {
        clearObjectionTimer();
        state.objectionExpired = true;
        lockStep(false, step.timeoutFeedback);
      }
    }, 1000);
  }
  var inner = '<div class="modal"><div class="modal-card"><h3 class="modal-title">Objection!</h3><p class="prompt">' + escapeHtml(step.prompt) + '</p>';
  if (!state.choiceLocked && !state.objectionExpired) {
    inner += '<p><strong>Time remaining:</strong> <span id="objection-clock">' + state.objectionSeconds + '</span>s</p><div class="choices">' + step.options.map(function (opt, idx) {
      return '<button class="choice" onclick="FEL.pickObjection(' + idx + ')">' + escapeHtml(opt.text) + '</button>';
    }).join('') + '</div>';
  }
  if (state.stepFeedback) inner += '<div class="feedback ' + (state.stepCorrect ? 'ok' : 'bad') + '">' + escapeHtml(state.stepFeedback) + '</div><div class="btn-row"><button class="btn-primary" onclick="FEL.next()">Continue</button></div>';
  return inner + '</div></div>';
}

function renderMadlibs(step) {
  var filled = step.template;
  step.blanks.forEach(function (b) {
    var sel = '<select onchange="FEL.setMadlib(\'' + b.key + '\', this.value)"><option value="">Select</option>' + b.options.map(function (o) {
      return '<option value="' + escapeHtml(o) + '"' + (state.madlibsValues[b.key] === o ? ' selected' : '') + '>' + escapeHtml(o) + '</option>';
    }).join('') + '</select>';
    filled = filled.replace('[' + b.key + ']', sel);
  });
  var html = '<p class="prompt">' + escapeHtml(step.prompt) + '</p><div class="madlibs">' + filled + '</div>';
  if (state.stepFeedback) html += '<div class="feedback ' + (state.stepCorrect ? 'ok' : 'bad') + '">' + escapeHtml(state.stepFeedback) + '</div>';
  html += '<div class="btn-row">' + (state.choiceLocked ? '<button class="btn-primary" onclick="FEL.next()">Continue</button>' : '<button class="btn-primary" onclick="FEL.checkMadlibs()">Check Holding</button>') + '</div>';
  return html;
}

function renderRedline(step) {
  var raw = step.docText || '';
  var target = step.target || '';
  var idx = raw.indexOf(target);
  var doc;
  if (idx >= 0 && target) {
    var before = raw.slice(0, idx);
    var after = raw.slice(idx + target.length);
    doc = escapeHtml(before)
      + '<span class="redline-target ' + (state.redlineHit ? 'hit' : '') + '" onclick="FEL.hitRedline()">'
      + escapeHtml(target)
      + '</span>'
      + escapeHtml(after);
  } else {
    doc = escapeHtml(raw);
  }
  var html = '<p class="prompt">' + escapeHtml(step.prompt) + '</p><div class="redline-doc">' + doc + '</div>';
  if (state.stepFeedback) html += '<div class="feedback ok">' + escapeHtml(state.stepFeedback) + '</div><div class="btn-row"><button class="btn-primary" onclick="FEL.next()">Continue</button></div>';
  return html;
}

function renderScales(step) {
  var selected = Object.keys(state.scaleSelections).filter(function (k) { return state.scaleSelections[k]; });
  var width = 50 + Math.round((selected.length / step.factors.length) * 50);
  var html = '<p class="prompt">' + escapeHtml(step.prompt) + '</p><div class="scale-wrap"><div class="factor-list">' + step.factors.map(function (f) {
    return '<label><input type="checkbox" ' + (state.scaleSelections[f.id] ? 'checked' : '') + ' onchange="FEL.toggleFactor(\'' + f.id + '\', this.checked)"> ' + escapeHtml(f.label) + '</label>';
  }).join('') + '</div><div class="scale-meter"><div class="fill" style="width:' + width + '%"></div></div><div class="scale-labels"><span>Material Breach</span><span>Substantial Performance (Minor Breach)</span></div></div>';
  if (state.stepFeedback) html += '<div class="feedback ' + (state.stepCorrect ? 'ok' : 'bad') + '">' + escapeHtml(state.stepFeedback) + '</div>';
  html += '<div class="btn-row">' + (state.choiceLocked ? '<button class="btn-primary" onclick="FEL.next()">Continue</button>' : '<button class="btn-primary" onclick="FEL.checkScale()">Lock Balancing Test</button>') + '</div>';
  return html;
}

function renderDragDrop(step) {
  function tokenLabel(id) {
    var t = step.tokens.find(function (x) { return x.id === id; });
    return t ? t.label : id;
  }
  var pool = step.tokens.filter(function (t) { return !state.dragAssignments[t.id]; }).map(function (t) {
    return '<div class="draggable" draggable="true" data-token="' + t.id + '">' + escapeHtml(t.label) + '</div>';
  }).join('');
  var html = '<p class="prompt">' + escapeHtml(step.prompt) + '</p><div class="bucket-wrap"><div class="bucket" data-bucket="pool"><h4>Evidence Desk</h4>' + pool + '</div>' + step.buckets.map(function (b) {
    var items = Object.keys(state.dragAssignments).filter(function (k) { return state.dragAssignments[k] === b.id; }).map(function (tokenId) { return '<div class="drop-item">' + escapeHtml(tokenLabel(tokenId)) + '</div>'; }).join('');
    return '<div class="bucket" data-bucket="' + b.id + '"><h4>' + escapeHtml(b.label) + '</h4>' + items + '</div>';
  }).join('') + '</div><div class="drop-message">' + escapeHtml(state.dragMessage || '') + '</div>';
  if (state.stepFeedback) html += '<div class="feedback ' + (state.stepCorrect ? 'ok' : 'bad') + '">' + escapeHtml(state.stepFeedback) + '</div>';
  html += '<div class="btn-row">' + (state.choiceLocked ? '<button class="btn-primary" onclick="FEL.next()">Continue</button>' : '<button class="btn-primary" onclick="FEL.checkDragDrop()">Evaluate Evidence Board</button>') + '</div>';
  return html;
}

function renderArtifactChoice(step) {
  var options = step.options.map(function (o, idx) {
    var cls = 'choice';
    if (state.choiceLocked) {
      if (o.correct) cls += ' correct';
      else if (state.selectedChoice === idx) cls += ' wrong';
      else cls += ' dim';
    }
    return '<button class="' + cls + '" ' + (state.choiceLocked ? 'disabled' : '') + ' onclick="FEL.pickChoice(' + idx + ')">' + escapeHtml(o.text) + '</button>';
  }).join('');
  var html = '<p class="prompt">' + escapeHtml(step.prompt) + '</p>' + renderArtifactCards(currentModule()) + '<div class="choices" style="margin-top:var(--space-sm)">' + options + '</div>';
  if (state.stepFeedback) html += '<div class="feedback ' + (state.stepCorrect ? 'ok' : 'bad') + '">' + escapeHtml(state.stepFeedback) + '</div>';
  if (state.choiceLocked) html += '<div class="btn-row"><button class="btn-primary" onclick="FEL.next()">Continue</button></div>';
  return html;
}

function renderStepBody(step, module) {
  if (step.type === 'desk') return '<p class="prompt">' + escapeHtml(step.prompt) + '</p>' + renderArtifactCards(module) + '<div class="btn-row"><button class="btn-primary" onclick="FEL.next()">Continue</button></div>';
  if (step.type === 'mcq') return renderMCQ(step);
  if (step.type === 'objection') return renderObjection(step);
  if (step.type === 'madlibs') return renderMadlibs(step);
  if (step.type === 'redline') return renderRedline(step);
  if (step.type === 'scales') return renderScales(step);
  if (step.type === 'dragdrop') return renderDragDrop(step);
  if (step.type === 'artifact-choice') return renderArtifactChoice(step);
  return '<p class="prompt">' + escapeHtml(step.prompt) + '</p><div class="btn-row"><button class="btn-primary" onclick="FEL.next()">Continue</button></div>';
}

function renderArtifactModal(module) {
  if (!state.artifactOpen || !module.artifacts) return '';
  var artifact = module.artifacts.find(function (a) { return a.id === state.artifactOpen; });
  if (!artifact) return '';
  return '<div class="modal" onclick="FEL.closeArtifact(event)"><div class="modal-card"><h3 class="modal-title">' + escapeHtml(artifact.name) + '</h3><p>' + escapeHtml(artifact.text) + '</p><div class="btn-row"><button class="btn-secondary" onclick="FEL.closeArtifact(event)">Close</button></div></div></div>';
}

function renderSummary() {
  if(typeof KSync!=="undefined")KSync.complete({exerciseId:"fellowship-of-the-contract",exerciseTitle:"Fellowship of the Contract",chapterNum:1,score:state.score,total:state.total});
  var pct = Math.round((state.score / (state.total || 1)) * 100);
  var rank = pct >= 90 ? 'Ring-Bearer of Doctrine' : pct >= 75 ? 'Counsel of Rivendell' : pct >= 60 ? 'Steward of Analysis' : 'Apprentice Advocate';
  el('game').innerHTML = '<section class="summary"><div class="intro-kicker">Complete</div><h2>' + rank + '</h2><p>You completed all Fellowship modules with a score of <strong>' + state.score + ' / ' + state.total + '</strong> (' + pct + '%).</p><div class="btn-row" style="justify-content:center"><button class="btn-primary" onclick="FEL.restart()">Run Again</button><button class="btn-secondary" onclick="FEL.home()">Back to Overview</button></div></section>';
}

function bindDragAndDrop() {
  var step = currentStep();
  document.querySelectorAll('.draggable').forEach(function (item) {
    item.addEventListener('dragstart', function (ev) {
      ev.dataTransfer.setData('text/plain', item.dataset.token);
      ev.dataTransfer.effectAllowed = 'move';
    });
  });
  document.querySelectorAll('.bucket').forEach(function (bucket) {
    bucket.addEventListener('dragover', function (ev) { ev.preventDefault(); bucket.classList.add('over'); });
    bucket.addEventListener('dragleave', function () { bucket.classList.remove('over'); });
    bucket.addEventListener('drop', function (ev) {
      ev.preventDefault();
      bucket.classList.remove('over');
      var tokenId = ev.dataTransfer.getData('text/plain');
      var bucketId = bucket.dataset.bucket;
      if (bucketId === 'pool') {
        delete state.dragAssignments[tokenId];
        state.dragMessage = '';
        return render();
      }
      if (step.reject && step.reject.tokenId === tokenId && step.reject.bucketId === bucketId) {
        state.dragMessage = step.reject.message;
        return render();
      }
      state.dragAssignments[tokenId] = bucketId;
      state.dragMessage = '';
      render();
    });
  });
}

function render() {
  if (state.screen === 'intro') return renderIntro();
  if (state.screen === 'summary') return renderSummary();
  var module = currentModule();
  var step = currentStep();
  var layoutClass = state.tomeOpen ? 'exercise-layout' : 'exercise-layout tome-closed';
  el('game').innerHTML = renderProgress()
    + '<div class="' + layoutClass + '"><section class="stage"><div class="stage-header"><div><div class="stage-module">' + escapeHtml(module.title) + '</div><h2 class="stage-title">' + escapeHtml(module.subtitle) + '</h2></div><span class="stage-irac">' + escapeHtml(step.irac || 'Analysis') + '</span></div><p class="story">' + escapeHtml(module.narrative) + '</p>'
    + renderStepBody(step, module)
    + '</section>'
    + (state.tomeOpen ? renderTome(module) : '<aside class="tome"><div class="tome-head"><h3 class="tome-title">Tome of Law</h3><button class="btn-secondary" onclick="FEL.toggleTome()">Show</button></div></aside>')
    + '</div>' + renderArtifactModal(module);
  if (step.type === 'dragdrop' && !state.choiceLocked) bindDragAndDrop();
}

var FEL = {
  start: function () {
    state.screen = 'module';
    state.moduleIndex = 0;
    state.stepIndex = 0;
    state.score = 0;
    state.total = 0;
    state.tomeOpen = true;
    state.summary = [];
    resetPerStepState();
    render();
  },
  restart: function () { FEL.start(); },
  home: function () { clearObjectionTimer(); state.screen = 'intro'; render(); },
  toggleTome: function () { state.tomeOpen = !state.tomeOpen; render(); },
  openArtifact: function (id) { state.artifactOpen = id; render(); },
  closeArtifact: function (event) {
    var target = event && event.target;
    if (target && !target.classList.contains('modal') && !target.classList.contains('btn-secondary')) return;
    state.artifactOpen = null; render();
  },
  next: function () {
    clearObjectionTimer();
    if (state.stepIndex < currentModule().steps.length - 1) {
      state.stepIndex++; resetPerStepState(); return render();
    }
    if (state.moduleIndex < MODULES.length - 1) {
      state.moduleIndex++; state.stepIndex = 0; resetPerStepState(); return render();
    }
    state.screen = 'summary'; render();
  },
  pickChoice: function (idx) {
    if (state.choiceLocked) return;
    var step = currentStep();
    state.selectedChoice = idx;
    lockStep(!!step.options[idx].correct, step.options[idx].feedback);
  },
  pickObjection: function (idx) {
    if (state.choiceLocked) return;
    clearObjectionTimer();
    var step = currentStep();
    lockStep(!!step.options[idx].correct, step.options[idx].feedback);
  },
  setMadlib: function (key, value) { if (!state.choiceLocked) state.madlibsValues[key] = value; },
  checkMadlibs: function () {
    if (state.choiceLocked) return;
    var step = currentStep();
    var complete = true;
    var correct = true;
    step.blanks.forEach(function (b) {
      var v = state.madlibsValues[b.key];
      if (!v) complete = false;
      if (v !== b.answer) correct = false;
    });
    if (!complete) {
      state.stepFeedback = 'Fill each blank before checking the holding.';
      state.stepCorrect = false;
      return render();
    }
    lockStep(correct, correct ? step.success : step.failure);
  },
  hitRedline: function () {
    if (state.choiceLocked) return;
    state.redlineHit = true;
    lockStep(true, currentStep().success);
  },
  toggleFactor: function (id, checked) { if (!state.choiceLocked) { state.scaleSelections[id] = checked; render(); } },
  checkScale: function () {
    if (state.choiceLocked) return;
    var step = currentStep();
    var ok = step.required.every(function (id) { return !!state.scaleSelections[id]; });
    lockStep(ok, ok ? step.success : step.failure);
  },
  checkDragDrop: function () {
    if (state.choiceLocked) return;
    var step = currentStep();
    var ok = state.dragAssignments[step.required.tokenId] === step.required.bucketId;
    lockStep(ok, ok ? step.success : step.failure);
  }
};

window.FEL = FEL;
document.addEventListener('DOMContentLoaded', renderIntro);
