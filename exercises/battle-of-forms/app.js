/**
 * Merchant Road — Battle of the Forms (UCC 2-207 Learning Game)
 * Trade Disputes on the Merchant Road
 * Theme handled by shared theme.js
 */

var SCENARIOS = [
  {
    title: "The Shire Pipeweed Deal",
    region: "The Shire",
    tag: "Between merchants — non-material additional term",
    tags: ["2-207(1)", "2-207(2)", "2-207(2)(b)"],
    masteryKey: "Formation by writings",
    narrative: "Barliman Butterbur, innkeeper of the Prancing Pony in Bree, sends a purchase order to the Hornblower family in Longbottom — the finest pipeweed growers in the Southfarthing — for fifty barrels of Old Toby. The Hornblowers send back an acknowledgment that matches the order in every respect, except it adds one new term.",
    offer: {
      label: "Purchase Order — The Prancing Pony, Bree",
      fields: [
        ["From", "Barliman Butterbur, The Prancing Pony, Bree"],
        ["To", "Hornblower & Sons, Longbottom, The Shire"],
        ["Goods", "50 barrels Old Toby pipeweed, standard grade"],
        ["Price", "2 silver pennies per barrel"],
        ["Delivery", "FOB Longbottom, carrier at buyer's risk"],
        ["Payment", "Net 30 days from delivery"]
      ]
    },
    response: {
      label: "Acknowledgment — Hornblower & Sons",
      fields: [
        ["From", "Hornblower & Sons, Longbottom, The Shire"],
        ["To", "Barliman Butterbur, The Prancing Pony, Bree"],
        ["Goods", "50 barrels Old Toby pipeweed, standard grade"],
        ["Price", "2 silver pennies per barrel"],
        ["Delivery", "FOB Longbottom, carrier at buyer's risk"],
        ["Payment", "Net 30 days from delivery"]
      ],
      additions: ["Seller to include one wooden display rack per barrel at no additional cost"]
    },
    questions: [
      {
        subsection: "2-207(1)",
        text: "Does the Hornblowers' acknowledgment operate as an acceptance under 2-207(1)?",
        choices: [
          { text: "Yes — it is a definite expression of acceptance. The additional display-rack term does not prevent formation.", correct: true, feedback: "Masterful. Under 2-207(1), a definite and seasonable expression of acceptance operates as an acceptance even with additional terms. The mirror-image rule does not apply under Article 2." },
          { text: "No — the display-rack term changes the offer, so this is a counteroffer under the mirror-image rule.", correct: false, feedback: "Counselor, reconsider. The whole point of 2-207 is to reject the mirror-image rule for sales of goods. Additional terms do not prevent acceptance." },
          { text: "No — the acknowledgment is expressly conditional on Butterbur's assent to the new term.", correct: false, feedback: "Look again. The Hornblowers' acknowledgment contains no 'expressly conditional' language. It simply adds a term. The 2-207(1) proviso does not apply." }
        ]
      },
      {
        subsection: "2-207(2)",
        text: "Does the display-rack term become part of the contract?",
        choices: [
          { text: "Yes — both parties are merchants, the offer did not limit acceptance, the rack is not a material alteration, and no objection was given.", correct: true, feedback: "Precisely right. All four gates of 2-207(2) are open: merchant-to-merchant, no express limitation, non-material addition, no objection. The rack enters the contract." },
          { text: "No — additional terms never automatically become part of a contract.", correct: false, feedback: "That is the common law rule, not the UCC rule. Between merchants, 2-207(2) provides that additional terms do enter automatically — subject to three exceptions." },
          { text: "Only if Butterbur expressly agrees to it.", correct: false, feedback: "Express assent is required only when one party is not a merchant. Here, both are merchants, so the automatic-entry rule of 2-207(2) applies." }
        ]
      },
      {
        subsection: "Final terms",
        text: "What are the final contract terms?",
        choices: [
          { text: "All of the purchase order's terms plus the display-rack term.", correct: true, feedback: "Correct. Contract formed under (1). Non-material additional term entered under (2). Result: original terms plus display rack." },
          { text: "Only the purchase order's original terms.", correct: false, feedback: "Almost. But because both are merchants and the rack is non-material, 2-207(2) brings it in automatically." },
          { text: "Only the acknowledgment's terms.", correct: false, feedback: "Neither the 'last shot' nor 'first shot' rule applies under 2-207. The analysis is subsection by subsection." }
        ]
      }
    ]
  },
  {
    title: "The Gondorian Shield Order",
    region: "Minas Tirith",
    tag: "Between merchants — material alteration blocked",
    tags: ["2-207(1)", "2-207(2)(b)", "Comment 4"],
    masteryKey: "Material alteration",
    narrative: "The quartermaster of Minas Tirith sends a purchase order to Gimli's forge in Erebor for two hundred steel shields. The forge acknowledges the order but adds a complete warranty disclaimer and a mandatory arbitration clause requiring all disputes to be resolved by a dwarvish council in Erebor.",
    offer: {
      label: "Purchase Order — Gondor Quartermaster's Office",
      fields: [
        ["From", "Quartermaster, Seventh Circle, Minas Tirith"],
        ["To", "Gimli's Forge, Erebor"],
        ["Goods", "200 steel shields, regulation size, Gondorian standard"],
        ["Price", "15 silver pennies per shield"],
        ["Delivery", "FOB Erebor, carrier arranged by buyer"],
        ["Payment", "Net 45 days"],
        ["Warranty", "Seller warrants shields free from defects for 2 years"]
      ]
    },
    response: {
      label: "Acknowledgment — Gimli's Forge",
      fields: [
        ["From", "Gimli's Forge, Erebor"],
        ["To", "Quartermaster, Minas Tirith"],
        ["Goods", "200 steel shields, regulation size, Gondorian standard"],
        ["Price", "15 silver pennies per shield"],
        ["Delivery", "FOB Erebor, carrier arranged by buyer"],
        ["Payment", "Net 45 days"],
        ["Warranty", "SOLD AS-IS. Seller disclaims all warranties express or implied"]
      ],
      additions: ["All disputes resolved exclusively by Dwarvish Arbitration Council in Erebor"]
    },
    questions: [
      {
        subsection: "2-207(1)",
        text: "Does the forge's acknowledgment operate as an acceptance under 2-207(1)?",
        choices: [
          { text: "Yes — it is a definite expression of acceptance. The changed warranty and added arbitration clause do not prevent formation.", correct: true, feedback: "Correct. Under 2-207(1), additional or different terms do not block acceptance unless the response is expressly conditional. The forge used no conditional language." },
          { text: "No — changing the warranty from '2 years' to 'as-is' is a rejection and counteroffer.", correct: false, feedback: "That would be the mirror-image rule, which 2-207 displaces. A contract forms; the question is which terms survive under 2-207(2)." },
          { text: "No — the acknowledgment contains materially different terms, so it cannot be an acceptance.", correct: false, feedback: "Material alteration is a 2-207(2) issue that determines which terms enter the contract — not a 2-207(1) issue that determines whether a contract forms." }
        ]
      },
      {
        subsection: "2-207(2)(b)",
        text: "Do the warranty disclaimer and arbitration clause become part of the contract?",
        choices: [
          { text: "No — a warranty disclaimer and mandatory arbitration in a distant forum are material alterations that cause surprise or hardship.", correct: true, feedback: "Well argued. Comment 4 to 2-207 specifically identifies warranty disclaimers as material alterations. An arbitration clause in a remote jurisdiction likewise causes hardship. Both fall out under 2-207(2)(b)." },
          { text: "Yes — both parties are merchants, so all additional terms enter automatically.", correct: false, feedback: "Being merchants is necessary but not sufficient. 2-207(2) provides three exceptions, and (b) — material alteration — applies here." },
          { text: "Yes — the forge's terms control because it sent the last form.", correct: false, feedback: "The 'last shot' doctrine is precisely what 2-207 was designed to eliminate. Analyze each term under the subsection (2) framework." }
        ]
      },
      {
        subsection: "Final terms",
        text: "What warranty term governs the contract?",
        choices: [
          { text: "The original 2-year warranty from the purchase order.", correct: true, feedback: "Correct. The disclaimer was excluded as a material alteration under 2-207(2)(b). Gondor's warranty stands." },
          { text: "The 'sold as-is' disclaimer from the acknowledgment.", correct: false, feedback: "The disclaimer was a material alteration and was excluded. It does not enter the contract." },
          { text: "Neither — the contract has no warranty term, so the UCC implied warranty applies.", correct: false, feedback: "The purchase order's express 2-year warranty was part of the offer and was not displaced. It governs." }
        ]
      }
    ]
  },
  {
    title: "Farmer Maggot's Plow",
    region: "The Marish",
    tag: "Non-merchant buyer — terms are proposals only",
    tags: ["2-207(1)", "2-207(2)", "Merchant status"],
    masteryKey: "Merchant status",
    narrative: "Farmer Maggot of the Marish needs a new iron plow. He walks to a smithy in Bree and places an order: one heavy plow, delivered to his farm, cash on delivery. The smith sends a written confirmation that matches the order but changes the payment terms to Net 30 with interest on late payment.",
    offer: {
      label: "Order — Farmer Maggot, The Marish",
      fields: [
        ["From", "Farmer Maggot, Bamfurlong Farm, The Marish"],
        ["To", "Heathertoes Smithy, Bree"],
        ["Goods", "1 heavy iron plow, 36-inch blade"],
        ["Price", "8 silver pennies"],
        ["Delivery", "To Bamfurlong Farm"],
        ["Payment", "Cash on delivery"]
      ]
    },
    response: {
      label: "Confirmation — Heathertoes Smithy",
      fields: [
        ["From", "Heathertoes Smithy, Bree"],
        ["To", "Farmer Maggot, The Marish"],
        ["Goods", "1 heavy iron plow, 36-inch blade"],
        ["Price", "8 silver pennies"],
        ["Delivery", "To Bamfurlong Farm"],
        ["Payment", "Net 30 days; 2% monthly interest on late payment"]
      ],
      additions: []
    },
    questions: [
      {
        subsection: "2-207(1)",
        text: "Does the smith's confirmation operate as an acceptance under 2-207(1)?",
        choices: [
          { text: "Yes — it is a definite expression of acceptance even though it changes the payment term.", correct: true, feedback: "Correct. Under 2-207(1), different or additional terms do not prevent acceptance. A contract forms." },
          { text: "No — changing 'cash on delivery' to 'Net 30' is a rejection.", correct: false, feedback: "Under the common law mirror-image rule, perhaps. But 2-207 displaces that rule for sales of goods." },
          { text: "No — the smith must accept all terms exactly as offered.", correct: false, feedback: "That is the mirror-image rule, which 2-207 replaces. A definite expression of acceptance forms a contract even with variant terms." }
        ]
      },
      {
        subsection: "2-207(2)",
        text: "Does the 'Net 30 with interest' payment term become part of the contract?",
        choices: [
          { text: "No — Farmer Maggot is not a merchant, so additional terms are merely proposals requiring his express assent.", correct: true, feedback: "Precisely. 2-207(2) states that additional terms are 'proposals for addition to the contract.' The automatic-entry rule applies only 'between merchants.' Maggot is a farmer, not a merchant." },
          { text: "Yes — it automatically enters because neither party objected.", correct: false, feedback: "Automatic entry requires both parties to be merchants. Maggot is not a merchant, so the term is only a proposal." },
          { text: "Yes — the seller's confirmation always controls payment terms.", correct: false, feedback: "There is no rule that the seller's form controls. Analyze the parties' merchant status under 2-207(2)." }
        ]
      },
      {
        subsection: "Final terms",
        text: "What payment term governs the contract?",
        choices: [
          { text: "Cash on delivery — Maggot's original term.", correct: true, feedback: "Correct. The smith's credit term was only a proposal under 2-207(2). Without Maggot's assent, his original 'cash on delivery' term governs." },
          { text: "Net 30 with 2% interest — the smith's term.", correct: false, feedback: "This term was merely a proposal. It does not enter the contract without the non-merchant buyer's assent." },
          { text: "No payment term — a UCC gap-filler applies.", correct: false, feedback: "Maggot's original order included a payment term (cash on delivery). That term remains because the smith's replacement was only a proposal." }
        ]
      }
    ]
  },
  {
    title: "The Dwarvish Conditional",
    region: "Erebor",
    tag: "Expressly conditional — 2-207(1) proviso triggers (3)",
    tags: ["2-207(1) proviso", "2-207(3)", "Gap-fillers"],
    masteryKey: "Expressly conditional",
    narrative: "A textile merchant in Dale orders one hundred mithril-clasped cloaks from the weavers' guild of Erebor. The guild's response says it accepts — but the final paragraph reads: 'This acceptance is expressly conditional upon buyer's assent to all terms stated herein.' The response also adds an indemnification clause.",
    offer: {
      label: "Purchase Order — Dale Textile Exchange",
      fields: [
        ["From", "Braga & Sons, Dale Textile Exchange"],
        ["To", "Weavers' Guild, Erebor"],
        ["Goods", "100 mithril-clasped cloaks, winter weight"],
        ["Price", "25 silver pennies per cloak"],
        ["Delivery", "FOB Dale, within 60 days"],
        ["Payment", "Net 30 days"]
      ]
    },
    response: {
      label: "Response — Weavers' Guild, Erebor",
      fields: [
        ["From", "Weavers' Guild, Erebor"],
        ["To", "Braga & Sons, Dale"],
        ["Goods", "100 mithril-clasped cloaks, winter weight"],
        ["Price", "25 silver pennies per cloak"],
        ["Delivery", "FOB Dale, within 60 days"],
        ["Payment", "Net 30 days"],
        ["Condition", "THIS ACCEPTANCE IS EXPRESSLY CONDITIONAL upon buyer's assent to all terms herein"]
      ],
      additions: ["Buyer shall indemnify and hold harmless the Guild against all claims arising from use of the cloaks"]
    },
    questions: [
      {
        subsection: "2-207(1) proviso",
        text: "Does the guild's response operate as an acceptance under 2-207(1)?",
        choices: [
          { text: "No — the 'expressly conditional' language triggers the proviso in 2-207(1), so no contract forms by the writings.", correct: true, feedback: "Exactly right. The proviso states that a response does NOT operate as acceptance if 'acceptance is expressly made conditional on assent to the additional or different terms.' The guild used precisely this language." },
          { text: "Yes — the word 'acceptance' in the response is sufficient.", correct: false, feedback: "Calling something an 'acceptance' does not make it one. The expressly conditional language overrides the label and triggers the 2-207(1) proviso." },
          { text: "Yes — the core terms match, so the conditional language is irrelevant.", correct: false, feedback: "Matching core terms does not override the proviso. Expressly conditional language prevents formation by the writings regardless of how much the forms agree on." }
        ]
      },
      {
        subsection: "2-207(3)",
        text: "The Dale merchant never responds to the guild's conditions but sends payment when the cloaks arrive. Is there a contract?",
        choices: [
          { text: "Yes — the parties' conduct (shipping and paying) recognizes a contract under 2-207(3).", correct: true, feedback: "Correct. Under 2-207(3), conduct by both parties that recognizes the existence of a contract is sufficient to establish one. The guild shipped; Dale paid. That is mutual recognition." },
          { text: "No — without matching writings, no contract can exist.", correct: false, feedback: "2-207(3) exists precisely for this situation: writings fail, but the parties perform anyway. Conduct forms the contract." },
          { text: "Yes — Dale's payment constitutes acceptance of the guild's counteroffer.", correct: false, feedback: "Under 2-207(3), you do not analyze this as acceptance of a counteroffer. The framework is different: conduct creates a contract, and the terms come from the writings' agreement plus gap-fillers." }
        ]
      },
      {
        subsection: "2-207(3) terms",
        text: "What terms govern the conduct-based contract?",
        choices: [
          { text: "Terms on which both writings agree, plus UCC gap-fillers for the rest.", correct: true, feedback: "Precisely. Under 2-207(3), you take the overlapping terms from both forms and supplement with Article 2 gap-fillers. The indemnification clause — present only in the guild's form — falls out." },
          { text: "The guild's terms, because it sent the last form.", correct: false, feedback: "The 'last shot' rule does not apply under 2-207. Under subsection (3), only mutually agreed terms survive." },
          { text: "The Dale merchant's original purchase order terms.", correct: false, feedback: "The 'first shot' does not control either. Under 2-207(3), only terms common to both forms survive; gaps are filled by the UCC." }
        ]
      }
    ]
  },
  {
    title: "The Dorwinion Wine Shipment",
    region: "Rhovanion",
    tag: "Total mismatch — formation by conduct only",
    tags: ["2-207(1)", "2-207(3)", "Knockout rule"],
    masteryKey: "Conduct-based contract",
    narrative: "Thranduil's cellarer sends an order for three hundred casks of Dorwinion red. The vineyard's response changes the price, delivery, and payment, and adds expressly conditional language. The forms are irreconcilable — but the vineyard ships the wine anyway, and Thranduil's court accepts delivery and sends payment.",
    offer: {
      label: "Order — Cellarer of the Woodland Realm",
      fields: [
        ["From", "Office of the Cellarer, Thranduil's Halls"],
        ["To", "Dorwinion Royal Vineyard"],
        ["Goods", "300 casks Dorwinion Red, vintage reserve"],
        ["Price", "5 gold pieces per cask"],
        ["Delivery", "CIF Woodland Realm, within 90 days"],
        ["Payment", "Net 60 days from delivery"]
      ]
    },
    response: {
      label: "Response — Dorwinion Royal Vineyard",
      fields: [
        ["From", "Dorwinion Royal Vineyard"],
        ["To", "Office of the Cellarer, Thranduil's Halls"],
        ["Goods", "300 casks Dorwinion Red, vintage reserve"],
        ["Price", "7 gold pieces per cask"],
        ["Delivery", "FOB Dorwinion; buyer arranges transport"],
        ["Payment", "50% deposit before shipment; balance on delivery"],
        ["Condition", "ACCEPTANCE EXPRESSLY CONDITIONAL on buyer's assent to all terms"]
      ],
      additions: []
    },
    questions: [
      {
        subsection: "2-207(1)",
        text: "Does the vineyard's response operate as an acceptance under 2-207(1)?",
        choices: [
          { text: "No — the response changes price, delivery, and payment, and is expressly conditional.", correct: true, feedback: "Correct. The response varies on price (5 vs. 7 gold), delivery (CIF vs. FOB), and payment (net 60 vs. deposit-plus-balance), and includes 'expressly conditional' language. No contract forms by the writings." },
          { text: "Yes — both parties want the same wine, so there is a definite expression of acceptance.", correct: false, feedback: "Agreement on the goods alone does not make a response a 'definite expression of acceptance.' The expressly conditional language independently blocks formation under (1)." },
          { text: "No — but only because elves and vintners cannot be merchants under the UCC.", correct: false, feedback: "Merchant status affects 2-207(2), not 2-207(1). The reason this fails under (1) is the conditional language and the extent of the variance." }
        ]
      },
      {
        subsection: "2-207(3)",
        text: "The vineyard ships the wine. Thranduil's court accepts delivery and sends payment. Is there a contract?",
        choices: [
          { text: "Yes — conduct by both parties recognizes a contract under 2-207(3).", correct: true, feedback: "Correct. Both parties acted as if a deal existed. The vineyard shipped; Thranduil accepted and paid. Under 2-207(3), that conduct is sufficient to establish a contract." },
          { text: "No — the writings never agreed, so there can be no contract.", correct: false, feedback: "2-207(3) was written for exactly this situation. Conduct can create a contract even when the writings are irreconcilable." },
          { text: "Yes — Thranduil accepted the vineyard's counteroffer by paying.", correct: false, feedback: "Under 2-207(3), the analysis is not offer-counteroffer-acceptance. Conduct creates the contract, and the terms come from the knockout rule, not from either party's form." }
        ]
      },
      {
        subsection: "2-207(3) terms",
        text: "What terms govern price and delivery?",
        choices: [
          { text: "Terms on which both writings agree (the wine itself), plus UCC gap-fillers for price, delivery, and payment.", correct: true, feedback: "Exactly. Under 2-207(3), conflicting terms knock each other out. Both agree on the goods (300 casks Dorwinion Red). For price, delivery, and payment — where the writings conflict — UCC Article 2 gap-fillers govern." },
          { text: "The vineyard's price of 7 gold per cask, because they shipped at that price and Thranduil paid it.", correct: false, feedback: "Course-of-performance evidence might matter at trial, but the formal 2-207(3) answer is: conflicting terms cancel, gap-fillers apply." },
          { text: "The cellarer's original terms, because the order was sent first.", correct: false, feedback: "The 'first shot' does not control. Under 2-207(3), only the terms both forms agree on survive." }
        ]
      }
    ]
  }
];

// ---------- State ----------

var state = {
  screen: 'intro',
  scenario: 0,
  question: 0,
  score: 0,
  total: 0,
  selected: -1,
  mastery: {},
  history: []
};

// ---------- Helpers ----------

function el(id) { return document.getElementById(id); }

function renderDoc(doc, isResponse) {
  var html = '<div class="doc-header">' + doc.label + '</div>';
  html += '<div class="doc-fields">';
  doc.fields.forEach(function (f) {
    var isCondition = f[0] === 'Condition';
    var cls = isCondition ? 'doc-field doc-condition' : 'doc-field';
    html += '<div class="' + cls + '">'
      + '<span class="doc-key">' + f[0] + '</span>'
      + '<span class="doc-val">' + f[1] + '</span>'
      + '</div>';
  });
  if (isResponse && doc.additions && doc.additions.length) {
    doc.additions.forEach(function (a) {
      html += '<div class="doc-field doc-added">'
        + '<span class="doc-key">Added</span>'
        + '<span class="doc-val">' + a + '</span>'
        + '</div>';
    });
  }
  html += '</div>';
  return html;
}

function renderProgress() {
  var total = SCENARIOS.length * 3;
  var done = 0;
  state.history.forEach(function () { done++; });
  var pct = (done / total) * 100;
  return '<div class="game-progress">'
    + '<div class="progress-bar"><div class="progress-fill" style="width:' + pct + '%"></div></div>'
    + '<div class="progress-meta">'
    + '<span>Scenario ' + (state.scenario + 1) + ' of ' + SCENARIOS.length
    + ' &mdash; ' + SCENARIOS[state.scenario].region + '</span>'
    + '<span>Score: ' + state.score + ' / ' + state.total + '</span>'
    + '</div></div>';
}

function renderTags(tags) {
  var html = '<div class="tag-row">';
  tags.forEach(function (t) {
    html += '<span class="doc-tag">' + t + '</span>';
  });
  html += '</div>';
  return html;
}

// ---------- Screens ----------

function renderIntro() {
  var g = el('game');
  g.innerHTML = '<div class="game-intro">'
    + '<div class="intro-kicker">UCC 2-207 &bull; Module 2: Acceptance</div>'
    + '<h2 class="intro-title">Merchant Road</h2>'
    + '<p class="intro-doctrine">Battle of the Forms</p>'
    + '<p class="intro-subtitle">Trade Disputes on the Merchant Road</p>'
    + '<p class="intro-desc">The common law mirror-image rule says that any change in an acceptance is a rejection and counteroffer. '
    + 'UCC 2-207 replaces that rule for contracts involving the sale of goods. In five scenarios set along the trade routes of Middle-earth, '
    + 'you will analyze whether a contract forms under the writings, determine which terms survive, and route each dispute through the statute\'s three subsections.</p>'
    + '<div class="intro-ref">'
    + '<h4>The statute in brief</h4>'
    + '<p><strong>\u00A7 2-207(1).</strong> A definite expression of acceptance operates as acceptance even with additional or different terms &mdash; '
    + 'unless acceptance is expressly conditional on the offeror\'s assent to those terms.</p>'
    + '<p><strong>\u00A7 2-207(2).</strong> Between merchants, additional terms become part of the contract unless they materially alter it, '
    + 'the offer limits acceptance to its terms, or objection is given. If one party is not a merchant, additional terms are proposals only.</p>'
    + '<p><strong>\u00A7 2-207(3).</strong> When the writings fail but conduct recognizes a contract, the terms are those on which the writings agree, '
    + 'supplemented by UCC gap-fillers.</p>'
    + '</div>'
    + '<div class="intro-stats">'
    + '<div class="intro-stat"><strong>5</strong><span>Scenarios</span></div>'
    + '<div class="intro-stat"><strong>15</strong><span>Questions</span></div>'
    + '<div class="intro-stat"><strong>3</strong><span>Subsections</span></div>'
    + '</div>'
    + '<button class="btn-primary" onclick="BOF.start()">Begin the journey</button>'
    + '</div>';
}

function renderScenario() {
  var s = SCENARIOS[state.scenario];
  var g = el('game');
  g.innerHTML = renderProgress()
    + '<div class="scenario-layout">'
    + '<div class="scenario-facts">'
    + renderTags(s.tags)
    + '<div class="scenario-region">' + s.region + '</div>'
    + '<h3>' + s.title + '</h3>'
    + '<p class="scenario-narrative">' + s.narrative + '</p>'
    + '<div class="doc-compare">'
    + '<div class="doc-pane">' + renderDoc(s.offer, false) + '</div>'
    + '<div class="doc-pane doc-pane-response">' + renderDoc(s.response, true) + '</div>'
    + '</div>'
    + '</div>'
    + '<div class="scenario-action">'
    + '<p class="action-prompt">Compare the two forms. Identify what matches, what differs, and what was added. Then analyze under 2-207.</p>'
    + '<button class="btn-primary" onclick="BOF.showQuestion()">Analyze under 2-207</button>'
    + '</div>'
    + '</div>';
}

function renderQuestion() {
  var s = SCENARIOS[state.scenario];
  var q = s.questions[state.question];
  var g = el('game');
  g.innerHTML = renderProgress()
    + '<div class="scenario-layout">'
    + '<div class="scenario-facts">'
    + renderTags(s.tags)
    + '<div class="scenario-region">' + s.region + '</div>'
    + '<h3>' + s.title + '</h3>'
    + '<div class="doc-compare">'
    + '<div class="doc-pane">' + renderDoc(s.offer, false) + '</div>'
    + '<div class="doc-pane doc-pane-response">' + renderDoc(s.response, true) + '</div>'
    + '</div>'
    + '</div>'
    + '<div class="question-panel">'
    + '<div class="question-header">'
    + '<span class="question-sub">' + q.subsection + '</span>'
    + '<span class="question-num">Question ' + (state.question + 1) + ' of 3</span>'
    + '</div>'
    + '<p class="question-text">' + q.text + '</p>'
    + '<div class="choices">'
    + q.choices.map(function (c, i) {
        return '<button class="choice-btn" onclick="BOF.answer(' + i + ')">' + c.text + '</button>';
      }).join('')
    + '</div>'
    + '</div>'
    + '</div>';
}

function renderFeedback() {
  var s = SCENARIOS[state.scenario];
  var q = s.questions[state.question];
  var chosen = state.selected;
  var correct = q.choices[chosen].correct;
  var g = el('game');

  g.innerHTML = renderProgress()
    + '<div class="scenario-layout">'
    + '<div class="scenario-facts">'
    + renderTags(s.tags)
    + '<div class="scenario-region">' + s.region + '</div>'
    + '<h3>' + s.title + '</h3>'
    + '<div class="doc-compare">'
    + '<div class="doc-pane">' + renderDoc(s.offer, false) + '</div>'
    + '<div class="doc-pane doc-pane-response">' + renderDoc(s.response, true) + '</div>'
    + '</div>'
    + '</div>'
    + '<div class="question-panel">'
    + '<div class="question-header">'
    + '<span class="question-sub">' + q.subsection + '</span>'
    + '<span class="question-num">Question ' + (state.question + 1) + ' of 3</span>'
    + '</div>'
    + '<p class="question-text">' + q.text + '</p>'
    + '<div class="choices">'
    + q.choices.map(function (c, i) {
        var cls = 'choice-btn choice-disabled';
        if (i === chosen && correct) cls += ' choice-correct';
        else if (i === chosen && !correct) cls += ' choice-wrong';
        else if (c.correct) cls += ' choice-correct';
        else cls += ' choice-dim';
        return '<button class="' + cls + '" disabled>' + c.text + '</button>';
      }).join('')
    + '</div>'
    + '<div class="feedback-panel ' + (correct ? 'feedback-correct' : 'feedback-wrong') + '">'
    + '<div class="feedback-verdict">' + (correct ? 'Correct.' : 'Not quite.') + '</div>'
    + '<p>' + q.choices[chosen].feedback + '</p>'
    + '</div>'
    + nextButton()
    + '</div>'
    + '</div>';
}

function nextButton() {
  var isLastQ = state.question >= SCENARIOS[state.scenario].questions.length - 1;
  var isLastS = state.scenario >= SCENARIOS.length - 1;
  if (isLastQ && isLastS) return '<button class="btn-primary" onclick="BOF.showSummary()">View results</button>';
  if (isLastQ) return '<button class="btn-primary" onclick="BOF.nextScenario()">Next scenario: ' + SCENARIOS[state.scenario + 1].title + '</button>';
  return '<button class="btn-primary" onclick="BOF.nextQuestion()">Next question</button>';
}

function renderSummary() {
  var g = el('game');
  var pct = Math.round((state.score / state.total) * 100);
  var grade = pct >= 93 ? 'Master Merchant' : pct >= 80 ? 'Journeyman Trader' : pct >= 60 ? 'Apprentice Merchant' : 'Needs further study';

  var html = '<div class="summary-screen">'
    + '<div class="summary-header">'
    + '<div class="intro-kicker">Results</div>'
    + '<h2 class="intro-title">' + grade + '</h2>'
    + '<div class="summary-score">' + state.score + ' / ' + state.total + ' correct (' + pct + '%)</div>'
    + '</div>';

  // Mastery badges
  html += '<div class="mastery-grid">';
  SCENARIOS.forEach(function (s) {
    var unlocked = state.mastery[s.masteryKey];
    html += '<div class="mastery-badge ' + (unlocked ? 'mastery-unlocked' : 'mastery-locked') + '">'
      + '<div class="mastery-icon">' + (unlocked ? '\u2713' : '\u2717') + '</div>'
      + '<span>' + s.masteryKey + '</span>'
      + '</div>';
  });
  html += '</div>';

  // Per-scenario breakdown
  html += '<div class="summary-breakdown">';
  SCENARIOS.forEach(function (s, i) {
    var sAnswers = state.history.filter(function (a) { return a.scenario === i; });
    var sCorrect = sAnswers.filter(function (a) { return a.correct; }).length;
    html += '<div class="summary-row">'
      + '<span class="summary-label">' + s.title + '</span>'
      + '<span class="summary-dots">';
    s.questions.forEach(function (_, qi) {
      var a = sAnswers.find(function (a) { return a.question === qi; });
      html += '<span class="dot ' + (a && a.correct ? 'dot-ok' : 'dot-miss') + '"></span>';
    });
    html += '</span>'
      + '<span class="summary-count">' + sCorrect + '/3</span>'
      + '</div>';
  });
  html += '</div>';

  // Takeaways
  html += '<div class="summary-takeaways">'
    + '<h4>Key takeaways</h4>'
    + '<p><strong>\u00A7 2-207(1):</strong> A definite acceptance with additional terms still forms a contract &mdash; unless expressly conditional.</p>'
    + '<p><strong>\u00A7 2-207(2):</strong> Between merchants, additional terms enter automatically unless they materially alter, the offer limits acceptance, or objection is given. If one party is not a merchant, additional terms are proposals only.</p>'
    + '<p><strong>\u00A7 2-207(3):</strong> When writings fail, conduct can form a contract. Terms = those agreed in the writings + UCC gap-fillers. Conflicting terms knock each other out.</p>'
    + '</div>';

  html += '<div class="summary-actions">'
    + '<button class="btn-primary" onclick="BOF.restart()">Play again</button>'
    + '<button class="btn-secondary" onclick="BOF.backToIntro()">Back to overview</button>'
    + '</div>'
    + '</div>';

  g.innerHTML = html;
}

// ---------- Actions ----------

function start() {
  state = { screen: 'scenario', scenario: 0, question: 0, score: 0, total: 0, selected: -1, mastery: {}, history: [] };
  renderScenario();
  el('game').scrollIntoView({ behavior: 'smooth' });
}

function showQuestion() {
  state.screen = 'question';
  renderQuestion();
}

function answer(idx) {
  var q = SCENARIOS[state.scenario].questions[state.question];
  state.selected = idx;
  state.total++;
  if (q.choices[idx].correct) state.score++;
  state.history.push({ scenario: state.scenario, question: state.question, correct: q.choices[idx].correct });
  state.screen = 'feedback';
  renderFeedback();
}

function nextQuestion() {
  state.question++;
  state.screen = 'question';
  renderQuestion();
  el('game').scrollIntoView({ behavior: 'smooth' });
}

function nextScenario() {
  // Mark mastery for completed scenario
  state.mastery[SCENARIOS[state.scenario].masteryKey] = true;
  state.scenario++;
  state.question = 0;
  state.screen = 'scenario';
  renderScenario();
  el('game').scrollIntoView({ behavior: 'smooth' });
}

function showSummary() {
  state.mastery[SCENARIOS[state.scenario].masteryKey] = true;
  state.screen = 'summary';
  renderSummary();
  el('game').scrollIntoView({ behavior: 'smooth' });
}

function restart() { start(); }
function backToIntro() { state.screen = 'intro'; renderIntro(); }

// ---------- Public API ----------

window.BOF = {
  start: start, showQuestion: showQuestion, answer: answer,
  nextQuestion: nextQuestion, nextScenario: nextScenario,
  showSummary: showSummary, restart: restart, backToIntro: backToIntro
};

// ---------- Init ----------

document.addEventListener('DOMContentLoaded', renderIntro);
