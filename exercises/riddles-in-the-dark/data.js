/**
 * Chapter 5: Riddles in the Dark — Termination of the Offer
 * Focus: R2d §§ 36-48, OFUR irrevocability, counteroffers
 */
var EXERCISE = {
  slug: "riddles-in-the-dark",
  title: "Riddles in the Dark",
  kicker: "Chapter 5 • Termination of the Offer",
  subtitle: "Underground Lake, Misty Mountains",
  chapterNum: 5,
  law: "R2d §§ 36–48 (Termination); R2d § 45 (Irrevocability)",
  narrative: "Deep under the Misty Mountains, Bilbo faces Gollum across a dark lake. A riddle game is proposed — a unilateral contract with built-in termination conditions. Offers are ephemeral: they can be rejected, countered, revoked, lapsed, or extinguished by death. But some offers become irrevocable. This chapter teaches you when offers die — and when they cannot.",
  image: "../../assets/images/K-riddles-in-the-dark.png",
  prevChapter: { title: "Troll Campfire", url: "../troll-campfire/" },
  nextChapter: { title: "Mirkwood Merchants", url: "../mirkwood-merchants/" },
  tome: [
    "R2d § 36(1): Power of acceptance terminated by: (a) rejection/counteroffer, (b) lapse, (c) revocation, (d) death/incapacity.",
    "R2d § 39(1): A counteroffer proposes a substituted bargain — it terminates the original offer.",
    "R2d § 42: Revocation effective when offeree receives manifestation of unwillingness to contract.",
    "R2d § 45: Part performance on unilateral contract creates option — offeror cannot revoke.",
    "OFUR: Four methods of irrevocability — Option contracts (R2d § 25), Firm offers (UCC § 2-205), Unilateral part-performance (R2d § 45), Reliance (R2d § 87(2))."
  ],
  artifacts: [
    {
      id: "riddle-terms",
      name: "The Riddle Game Contract",
      text: "Gollum's proposal: 'If precious asks, and it doesn't answer, we eats it. If it asks us, and we doesn't answer, then we shows it the way out.' Bilbo's acceptance: 'All right!' Analysis: This is a UNILATERAL contract — Bilbo accepts by performing (answering riddles), not by promising. The offer contains an express termination condition: failure to answer = game over (lapse). Once Bilbo begins answering, R2d § 45 makes the offer irrevocable."
    },
    {
      id: "ofur-chart",
      name: "OFUR: When Offers Become Irrevocable",
      text: "O — Option contracts (R2d § 25): Paid-for promise to keep offer open. Requires consideration.\nF — Firm offers (UCC § 2-205): Merchant's signed writing. No consideration needed. Max 3 months.\nU — Unilateral part-performance (R2d § 45): Once offeree begins performing, offeror locked in.\nR — Reliance (R2d § 87(2)): Offeree takes substantial action in reasonable reliance on offer.\n\nThe riddle game triggers 'U' — Bilbo began performing when he answered the first riddle."
    }
  ],
  steps: [
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open both artifacts: the riddle game contract analysis and the OFUR chart on irrevocability."
    },
    {
      type: "mcq",
      irac: "Four Methods of Termination",
      prompt: "Gollum proposes the riddle game. Before Bilbo answers, which of R2d § 36(1)'s four termination methods could destroy Bilbo's power of acceptance?",
      options: [
        {
          text: "All four: Bilbo could reject, make a counteroffer, the offer could lapse if Bilbo waits too long, Gollum could revoke, or either party could die.",
          correct: true,
          feedback: "Correct. Before acceptance, the offeree's power is fragile. R2d § 36(1) lists four destroyers: (a) rejection or counteroffer by the offeree, (b) lapse of time, (c) revocation by the offeror, and (d) death or incapacity. All apply before Bilbo begins performing. After he starts answering, R2d § 45 locks Gollum in."
        },
        {
          text: "Only lapse — the offer has a built-in timer (the riddle must be answered).",
          correct: false,
          feedback: "Lapse is one method, but all four apply before performance begins. Bilbo could reject ('No, I won't play'). He could counteroffer ('I'll play, but add your ring as a prize'). Gollum could revoke ('Changed my mind, precious'). Or the cave could collapse (death/impossibility). The power of acceptance is vulnerable from every direction."
        },
        {
          text: "None — once Gollum made the offer, he is bound until Bilbo responds.",
          correct: false,
          feedback: "Offers are generally revocable before acceptance. The offeror is 'master of the bargain' and can revoke at any time (R2d § 42). The only exception is irrevocability under OFUR — which hasn't kicked in yet because Bilbo hasn't started performing."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Part Performance (R2d § 45)",
      prompt: "Bilbo answers three riddles successfully. Now Gollum wants to quit — he is losing. Can he revoke?",
      options: [
        {
          text: "No — R2d § 45 creates an option contract once Bilbo begins the invited performance. Gollum cannot revoke; Bilbo gets a reasonable time to complete.",
          correct: true,
          feedback: "Correct. This is the 'U' in OFUR. R2d § 45: 'Where an offer invites an offeree to accept by rendering a performance, an option contract is created when the offeree tenders or begins the invited performance.' Bilbo has answered three riddles — he has clearly begun performing. Gollum is locked in. The policy is fairness: it would be unjust to let the offeror revoke after the offeree has invested effort in partial performance."
        },
        {
          text: "Yes — oral offers are always freely revocable because there is no writing.",
          correct: false,
          feedback: "The form (oral vs. written) is irrelevant to R2d § 45. Part performance creates irrevocability regardless of whether the offer was written. Many unilateral offers — reward offers, competition entries, riddle games — are oral and become irrevocable through performance."
        },
        {
          text: "It depends — if Bilbo's answers were too easy, they might not count as 'performance.'",
          correct: false,
          feedback: "The difficulty of performance is irrelevant. R2d § 45 asks only whether the offeree has 'tendered or begun the invited performance.' Answering a riddle IS the invited performance, regardless of difficulty. Even a partial tender triggers the option."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Counteroffers vs. Inquiries",
      prompt: "Suppose Bilbo says: 'I'll play, but if I win, you also give me your ring.' Under R2d § 39, what has he done?",
      options: [
        {
          text: "Made a counteroffer — a substitute bargain that terminates Gollum's original offer. The original terms are dead.",
          correct: true,
          feedback: "Correct. R2d § 39(1): a counteroffer proposes 'a substituted bargain differing from that proposed by the original offer.' Adding 'also give me your ring' changes the deal materially. Under R2d § 39(2), the counteroffer terminates the original power of acceptance. If Gollum rejects, Bilbo cannot fall back on the original game terms. Contrast with an INQUIRY: 'Would you consider adding the ring?' — which does NOT terminate the original offer because it merely asks without conditioning."
        },
        {
          text: "Made a valid acceptance with an additional request — the game proceeds with the ring as an added bonus.",
          correct: false,
          feedback: "Under R2d § 61, a REQUEST for additional terms doesn't invalidate acceptance. But 'I'll play BUT...' is a condition, not a request. The word 'but' signals that participation is conditional on the new term. R2d § 59: conditional acceptance = counteroffer."
        },
        {
          text: "Made a mere inquiry that keeps the original offer alive.",
          correct: false,
          feedback: "An inquiry ('Would you consider...?') preserves the original offer. But 'I'll play, but if I win, you also give me your ring' is not an inquiry — it proposes different terms. The distinction matters: inquiries explore; counteroffers replace."
        }
      ]
    },
    {
      type: "madlibs",
      irac: "Synthesis",
      prompt: "Complete the termination holding:",
      template: "Offers die four ways: [A], counteroffer, lapse, and death (R2d § 36). A counteroffer proposes a [B] bargain that kills the original offer (R2d § 39). But offers can become [C] through OFUR: Option contracts, [D] offers, Unilateral part-performance, and Reliance. In the riddle game, Bilbo's part performance triggered R2d § [E], creating an option contract that prevents Gollum from revoking.",
      blanks: [
        { key: "A", options: ["rejection", "acceptance", "modification"], answer: "rejection" },
        { key: "B", options: ["substituted", "identical", "conditional"], answer: "substituted" },
        { key: "C", options: ["irrevocable", "bilateral", "void"], answer: "irrevocable" },
        { key: "D", options: ["Firm", "Fair", "Final"], answer: "Firm" },
        { key: "E", options: ["45", "36", "24"], answer: "45" }
      ],
      success: "Chapter 5 complete. Offers are ephemeral — they die by rejection, counteroffer, lapse, revocation, or death. But OFUR saves them: Option contracts, Firm offers, Unilateral part-performance, and Reliance can make an offer irrevocable. In the riddle game, Bilbo's performance locked Gollum in. The lesson: once you start playing, the other side cannot unilaterally end the game. Next: Chapter 6, where acceptance completes the deal — or clashes with competing terms.",
      failure: "Review: Four termination methods (R2d § 36). Counteroffers substitute new terms and kill originals (R2d § 39). OFUR creates irrevocability: Option, Firm, Unilateral (R2d § 45), Reliance."
    }
  ]
};
