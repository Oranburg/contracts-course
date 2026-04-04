/**
 * Chapter 1: The Shire Archives — What Is Contract Law?
 *
 * Chapter-level deep-dive (shorter than module activity).
 * Focuses specifically on Ch 1 doctrine:
 *   - Origins of contract law (historical)
 *   - Private vs. public law
 *   - Law vs. equity (remedies distinction)
 *   - Four justifications (efficiency, reliance, fairness, autonomy)
 *   - Objective vs. subjective standard
 *   - R2d vs. UCC (which applies when?)
 */
var EXERCISE = {
  slug: "shire-archives",
  title: "The Shire Archives",
  kicker: "Chapter 1 • What Is Contract Law?",
  subtitle: "Bag End, The Shire",
  chapterNum: 1,
  law: "R2d § 2 cmt. b; UCC § 2-102",
  narrative: "Deep in Bag End's study, Bilbo keeps the Shire Archives — records of every deal, promise, and handshake in Hobbiton. Before the adventure begins, you must understand the foundations: What IS contract law? Where did it come from? Why does it exist? And how does it decide what counts?",
  image: "../../assets/images/K-bag-end-hearth.png",
  prevChapter: null,
  nextChapter: { title: "The Burglar Agreement", url: "../burglary-agreement/" },
  tome: [
    "Casebook: \"Contract law is the law of promises. Without a promise, there is no contract.\"",
    "Casebook: \"Contract law is private law. It enforces only obligations people freely choose to create.\"",
    "R2d § 2 cmt. b: \"Manifestation of intention adopts an external or objective standard — the external expression of intention as distinguished from undisclosed intention.\"",
    "Casebook: Four justifications — efficiency, reliance, fairness, autonomy.",
    "UCC § 2-102: Article 2 applies to transactions in goods. Common law applies to services, land, and other non-goods contracts."
  ],
  artifacts: [
    {
      id: "shire-ledger",
      name: "The Hobbiton Trade Ledger",
      text: "A sample of entries from the Shire's informal trade records: 'Gaffer Gamgee: 12 bushels potatoes delivered to Baggins, Bag End. No payment required — neighborly custom.' 'Sandyman the Miller: ground 40 pounds of grain for Widow Rumble. Payment: 2 loaves bread per week for one month.' 'Ted Sandyman: promised to fix Farmer Cotton's fence. Never did. Cotton says he'll fix it himself.' Three entries, three different situations. Which ones involve enforceable promises?"
    },
    {
      id: "equity-scroll",
      name: "Gandalf's Note on Remedies",
      text: "\"When someone breaks a promise, the question is: what remedy? Courts of LAW — descended from England's Court of Common Pleas — give money. 'You were promised 14 gold pieces; here are 14 gold pieces.' But sometimes money is not enough. Courts of EQUITY — descended from the Lord Chancellor's Court of Chancery — can do more: force someone to actually perform (specific performance), stop someone from acting (injunction), or undo a deal entirely (rescission). But equity is exceptional — courts prefer the legal remedy of damages and resort to equity only when justice demands it.\""
    }
  ],
  steps: [
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open the Hobbiton Trade Ledger and Gandalf's Note on Remedies. These contain the facts you will need."
    },
    {
      type: "mcq",
      irac: "Private vs. Public Law",
      prompt: "The Shire has no police force, no tax collectors, and no criminal courts. Yet hobbits make and break deals constantly. Contract law belongs to which category?",
      options: [
        {
          text: "Private law — voluntary obligations between individuals, not imposed by the state.",
          correct: true,
          feedback: "Correct. Contract law is private law — it governs relationships between people, not between people and the government. Unlike criminal or tax law, you can opt out simply by not making promises. This voluntary nature is the foundation of contract law's legitimacy."
        },
        {
          text: "Public law — all law is ultimately enforced by the state.",
          correct: false,
          feedback: "While courts (a state institution) enforce contracts, the obligations themselves are privately created. Public law imposes obligations whether you agree or not (taxes, criminal prohibitions). Contract law enforces only what you voluntarily undertake."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Four Justifications",
      prompt: "Sandyman promised to fix Cotton's fence but never did. Cotton wasted time waiting instead of fixing it himself. Which TWO justifications for contract law apply here?",
      options: [
        {
          text: "Reliance (Cotton changed behavior based on Sandyman's promise) AND efficiency (enforcing promises enables people to plan and coordinate).",
          correct: true,
          feedback: "Correct. Reliance: Cotton waited instead of acting, suffering wasted time. Efficiency: if promises are not enforceable, people cannot coordinate activities — Cotton cannot plan around Sandyman's commitment. The other two justifications (fairness and autonomy) also support contract law but are less directly implicated in this fact pattern."
        },
        {
          text: "Fairness (it's unfair to break promises) AND autonomy (Sandyman chose to promise).",
          correct: false,
          feedback: "These are valid justifications generally, but less precise for this scenario. The facts emphasize Cotton's RELIANCE (he waited) and the EFFICIENCY loss (time wasted, fence still broken). Fairness and autonomy are broader principles — reliance and efficiency target the specific harm here."
        },
        {
          text: "Only autonomy — Sandyman freely chose to promise, so the law should hold him to it.",
          correct: false,
          feedback: "Autonomy is one justification, but standing alone it doesn't explain why the LAW should intervene (as opposed to just social disapproval). Reliance explains the specific harm Cotton suffered. Efficiency explains the systemic cost. Together they make the case for legal enforcement."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Common Law vs. UCC",
      prompt: "Sandyman ground grain for Widow Rumble in exchange for bread. Is this transaction governed by the UCC or common law?",
      options: [
        {
          text: "Common law — grinding grain is a service, not a sale of goods. UCC Article 2 only applies to transactions in goods.",
          correct: true,
          feedback: "Correct. UCC § 2-102: Article 2 applies to 'transactions in goods.' Goods are movable, identifiable items (UCC § 2-105). Grinding grain is a service. The bread payment is a barter for services, not a sale of goods. If Sandyman were SELLING ground flour, the UCC might apply under the predominant purpose test — but here, the predominant purpose is the milling service."
        },
        {
          text: "UCC — grain and bread are both goods, so UCC Article 2 governs.",
          correct: false,
          feedback: "While grain and bread are goods, the transaction is for Sandyman's MILLING SERVICE — he grinds the grain. The predominant purpose test asks: is this primarily a sale of goods or a service contract? Grinding grain for someone is a service. The UCC would apply if Sandyman were selling pre-ground flour off a shelf."
        },
        {
          text: "Neither — informal Shire transactions are not governed by any legal framework.",
          correct: false,
          feedback: "Contract law applies to all voluntary agreements that meet formation requirements, regardless of formality. The Shire's informality doesn't exempt its transactions. The question is which body of law (common law vs. UCC) governs, not whether any law applies."
        }
      ]
    },
    {
      type: "madlibs",
      irac: "Synthesis",
      prompt: "Complete the chapter holding:",
      template: "Contract law is [A] law — it enforces voluntary obligations between individuals. It exists for four reasons: [B], reliance, fairness, and autonomy. When promises are broken, courts of law provide [C], while courts of equity may order specific performance when money is inadequate. Courts evaluate agreements using the [D] standard — looking at external conduct, not private thoughts. For sales of goods, the [E] applies; for services and land, the common law governs.",
      blanks: [
        { key: "A", options: ["private", "public", "criminal"], answer: "private" },
        { key: "B", options: ["efficiency", "punishment", "tradition"], answer: "efficiency" },
        { key: "C", options: ["monetary damages", "specific performance", "criminal penalties"], answer: "monetary damages" },
        { key: "D", options: ["objective", "subjective", "equitable"], answer: "objective" },
        { key: "E", options: ["UCC", "R2d", "Magna Carta"], answer: "UCC" }
      ],
      success: "Chapter 1 complete. You now understand the foundations: contract law is private, voluntary, and objective. It serves efficiency, reliance, fairness, and autonomy. Courts prefer legal remedies but equity is available when justice requires. And the source of law depends on the subject matter — UCC for goods, common law for everything else. Next: Chapter 2, where you will examine the Burglar Agreement itself and learn what makes a promise legally binding.",
      failure: "Review: Contract law is private (voluntary). Its four justifications include efficiency. Courts of law give money damages. The objective standard judges conduct, not thoughts. The UCC governs goods transactions."
    }
  ]
};
