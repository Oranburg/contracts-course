/**
 * Chapter 3: The Unexpected Party — Bargains (Mutual Assent)
 * Focus: R2d §§ 17-20, objective theory, Lucy v. Zehmer, Raffles v. Wichelhaus
 */
var EXERCISE = {
  slug: "unexpected-party",
  title: "The Unexpected Party",
  kicker: "Chapter 3 • Bargains",
  subtitle: "Bag End Dining Room",
  chapterNum: 3,
  law: "R2d §§ 17–20 (Mutual Assent, Misunderstanding)",
  narrative: "Thirteen dwarves have invaded Bag End. Thorin extends his hand. The contract sits on the table. But has anyone actually AGREED to anything? Mutual assent requires both parties to manifest willingness to be bound — judged objectively, not by secret thoughts. And what happens when two parties say the same words but mean different things?",
  image: "../../assets/images/K-unexpected-party.png",
  prevChapter: { title: "The Burglar Agreement", url: "../burglary-agreement/" },
  nextChapter: { title: "Troll Campfire", url: "../troll-campfire/" },
  tome: [
    "R2d § 17(1): \"The formation of a contract requires a bargain in which there is a manifestation of mutual assent to the exchange and a consideration.\"",
    "R2d § 18: \"Manifestation of mutual assent requires that each party either make a promise or begin or render a performance.\"",
    "R2d § 20(1): No mutual assent if parties attach materially different meanings and neither knows or has reason to know the other's meaning.",
    "Lucy v. Zehmer: \"So, a person cannot set up that he was merely jesting when his conduct and words would warrant a reasonable person in believing that he intended a real agreement.\""
  ],
  artifacts: [
    {
      id: "handshake-scene",
      name: "The Handshake",
      text: "Thorin stood at the head of the table. 'Will you join our Company as burglar?' He extended his hand. Bilbo looked at the hand, at the contract, at thirteen expectant faces — and shook. He spent 40 minutes reviewing the terms. He asked questions about funeral expenses. He signed his name. Later, in his journal, he wrote: 'I was merely being polite.' Compare: in Lucy v. Zehmer, the defendant spent 30-40 minutes discussing the sale of his farm, wrote and signed an agreement on a guest check, then claimed he was joking. The Virginia Supreme Court enforced the contract."
    },
    {
      id: "peerless-problem",
      name: "The Peerless Problem in Middle-earth",
      text: "Thorin tells Bilbo: 'We depart on the ship Peerless from the Grey Havens.' Unknown to both, there are two Elven ships named Peerless — one sailing in October, one in December. Thorin means October; Bilbo means December. Each is sincere. Neither knows the other's meaning. Compare Raffles v. Wichelhaus (1864): two ships named Peerless from Bombay, buyer meant October ship, seller meant December ship. Court held: no mutual assent — the parties never agreed on the same thing."
    }
  ],
  steps: [
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open both artifacts: the handshake scene and the Peerless Problem."
    },
    {
      type: "mcq",
      irac: "Objective Theory Applied",
      prompt: "Bilbo spent 40 minutes reviewing terms, asked about funeral expenses, and signed. He later claimed he was 'merely being polite.' Under Lucy v. Zehmer, is there mutual assent?",
      options: [
        {
          text: "Yes — Bilbo's extended, deliberate conduct (reviewing, questioning, signing) manifests assent under the objective standard, regardless of private reluctance.",
          correct: true,
          feedback: "Correct. Lucy spent a comparable time (30-40 minutes) discussing terms, and the court held: 'The mental assent of the parties is not requisite.' Both Lucy and Bilbo engaged in conduct that would lead any reasonable person to conclude agreement was reached. The objective standard protects the reasonable expectations of the other party — here, the dwarves who relied on Bilbo's conduct."
        },
        {
          text: "No — politeness is not assent, and Bilbo's true intent should control.",
          correct: false,
          feedback: "Under the subjective view, perhaps. But American contract law uses the objective standard. Bilbo's conduct — reviewing, questioning, signing — is the legal equivalent of Lucy's written agreement: objectively manifesting assent regardless of inner state."
        },
        {
          text: "It depends on whether the dwarves knew Bilbo was uncomfortable.",
          correct: false,
          feedback: "The objective test does not ask what the specific parties knew about each other's inner state. It asks what a reasonable person observing the conduct would conclude. Forty minutes of engagement plus a signature = objective assent."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Misunderstanding (R2d § 20)",
      prompt: "Two ships named Peerless — Thorin means October, Bilbo means December, neither knows the other's meaning. Under R2d § 20, is there a contract?",
      options: [
        {
          text: "No — the parties attach materially different meanings to 'Peerless' and neither knows or has reason to know the other's meaning. There is no mutual assent.",
          correct: true,
          feedback: "Correct. R2d § 20(1)(a): 'There is no manifestation of mutual assent to an exchange if the parties attach materially different meanings to their manifestations and neither party knows or has reason to know the meaning attached by the other.' This is Raffles v. Wichelhaus precisely. The ambiguity is latent — 'Peerless' seems clear until two ships emerge. Without a shared referent, there is no agreement."
        },
        {
          text: "Yes — they agreed on the word 'Peerless,' and the objective meaning should be determined by the court.",
          correct: false,
          feedback: "When there is no single objective meaning (because two ships exist), the objective standard cannot resolve the ambiguity. R2d § 20 addresses this: if both meanings are equally valid and neither party knew of the other's meaning, there is simply no mutual assent. The objective standard requires a reasonable meaning — here, there are two."
        },
        {
          text: "Yes — Thorin is the offeror and 'master of the bargain,' so his meaning controls.",
          correct: false,
          feedback: "R2d § 20(2) does have a tie-breaking rule: if ONE party knows or has reason to know of the ambiguity and the other does not, the innocent party's meaning controls. But here, NEITHER knows. When both are equally innocent (or equally ignorant), no contract forms."
        }
      ]
    },
    {
      type: "madlibs",
      irac: "Synthesis",
      prompt: "Complete the holding on mutual assent:",
      template: "Contract formation requires a [A] in which there is a manifestation of [B] to the exchange (R2d § 17). Courts apply the [C] standard: external conduct controls, not private thoughts. But when parties attach [D] different meanings to a term and neither knows the other's meaning, there is no mutual assent under R2d § [E] — as demonstrated by the Peerless case.",
      blanks: [
        { key: "A", options: ["bargain", "promise", "condition"], answer: "bargain" },
        { key: "B", options: ["mutual assent", "consideration", "reliance"], answer: "mutual assent" },
        { key: "C", options: ["objective", "subjective", "equitable"], answer: "objective" },
        { key: "D", options: ["materially", "slightly", "secretly"], answer: "materially" },
        { key: "E", options: ["20", "17", "24"], answer: "20" }
      ],
      success: "Chapter 3 complete. Mutual assent is the foundation: both parties must manifest agreement, judged objectively. But the objective standard has limits — when a term is truly ambiguous (Peerless, R2d § 20), even perfect external signs cannot create agreement where understanding diverges. Next: Chapter 4, where you will learn what makes a proposal an OFFER versus mere negotiation.",
      failure: "Review: Formation requires a bargain with mutual assent (R2d § 17). The objective standard evaluates external conduct. R2d § 20 addresses misunderstanding — materially different meanings with no knowledge = no contract."
    }
  ]
};
