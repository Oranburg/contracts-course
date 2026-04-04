/**
 * Chapter 6: Mirkwood Merchants — Acceptance
 * Focus: R2d §§ 50, 58-63, UCC § 2-207, mirror image, mailbox rule
 */
var EXERCISE = {
  slug: "mirkwood-merchants",
  title: "Mirkwood Merchants",
  kicker: "Chapter 6 • Acceptance",
  subtitle: "Mirkwood Trading Post",
  chapterNum: 6,
  law: "R2d §§ 50–63; UCC § 2-207",
  narrative: "At a trading post where Mirkwood meets the river, Elven merchants and Lake-town traders exchange goods. Each side uses its own written form — and the terms conflict. At common law, any deviation from the offer kills the deal. But the UCC created a different rule for goods: contracts form despite non-matching terms. Which approach applies depends on what is being traded. This chapter completes the formation formula: Offer - Termination + ACCEPTANCE = Contract.",
  image: "../../assets/images/K-mirkwood-merchants.png",
  prevChapter: { title: "Riddles in the Dark", url: "../riddles-in-the-dark/" },
  nextChapter: { title: "The Dragon's Hoard", url: "../dragons-hoard/" },
  tome: [
    "R2d § 50(1): \"Acceptance of an offer is a manifestation of assent to the terms thereof made by the offeree in a manner invited or required by the offer.\"",
    "R2d § 59: \"A reply which purports to accept but is conditional on the offeror's assent to additional or different terms is not an acceptance but is a counter-offer.\"",
    "R2d § 61: \"An acceptance which requests a change is not thereby invalidated unless the acceptance is made to DEPEND on an assent to the changed terms.\"",
    "UCC § 2-207(1): Definite seasonable acceptance operates as acceptance even with additional/different terms, unless expressly conditional.",
    "UCC § 2-207(2): Additional terms between merchants become part of contract unless offer limits, terms materially alter, or offeror objects.",
    "R2d § 63(a): Acceptance effective upon dispatch (mailbox rule)."
  ],
  artifacts: [
    {
      id: "competing-forms",
      name: "The Competing Trade Forms",
      text: "ELVEN FORM:\n• Elven Silks, 10 bolts — No Warranty\n• Fine Wine, 20 casks — Returnable\n• Delivery: One Moon\n• Disputes: Elvenking's Court\n\nLAKE-TOWN FORM:\n• Human Furs, 15 pelts\n• Crafted Ironware, 30 pieces\n• Delivery: Upon Request\n• Returns: Within 30 Days\n• Disputes: Master of Lake-town\n\nAGREED: Both sides proceed to exchange goods. The core deal (silks/wine for furs/ironware) is uncontested. The boilerplate differs on delivery, returns, warranties, and dispute resolution."
    },
    {
      id: "mailbox-scenario",
      name: "The Messenger Race",
      text: "On Monday, the Elvenking sends a messenger with an offer to sell 100 bolts of silk at 5 gold pieces each. On Wednesday, Lake-town dispatches a messenger accepting the offer. On Thursday, the Elvenking sends a second messenger revoking the offer (he got a better deal from Dale). The revocation messenger arrives Friday. The acceptance messenger arrives Saturday. Under the mailbox rule (R2d § 63), acceptance is effective upon DISPATCH (Wednesday). The revocation is effective upon RECEIPT (Friday). The contract formed Wednesday — before the revocation was even sent."
    }
  ],
  steps: [
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open both artifacts: the competing trade forms and the messenger race scenario."
    },
    {
      type: "mcq",
      irac: "Mirror Image Rule (Common Law)",
      prompt: "If the Elves were selling LAND (not goods), and Lake-town's acceptance included different dispute resolution terms, what would happen under the common law mirror-image rule?",
      options: [
        {
          text: "Lake-town's response would be a counteroffer, not acceptance — the mirror-image rule requires acceptance to match the offer exactly.",
          correct: true,
          feedback: "Correct. R2d § 59: a conditional acceptance with different terms is a counteroffer, not acceptance. At common law, acceptance must MIRROR the offer exactly. Any deviation — even in boilerplate like dispute resolution — transforms the 'acceptance' into a counteroffer that terminates the original offer. This strict approach was the dominant rule for centuries."
        },
        {
          text: "A contract forms on Lake-town's terms since they sent the last document.",
          correct: false,
          feedback: "The 'last-shot rule' is a UCC concept (minority approach under § 2-207(3)), not common law. Under common law mirror-image, there is simply NO contract when terms don't match — the 'acceptance' is really a counteroffer."
        },
        {
          text: "The dispute resolution term is immaterial, so the acceptance is valid despite the deviation.",
          correct: false,
          feedback: "Some modern courts have relaxed the mirror-image rule for truly immaterial differences (see State DOT v. P&W Railroad). But the traditional rule is strict: any additional or different term makes the response a counteroffer. The UCC was created precisely because the common law was too harsh for commercial reality."
        }
      ]
    },
    {
      type: "dragdrop",
      irac: "UCC § 2-207 (Battle of Forms)",
      prompt: "The goods transaction. Under UCC § 2-207, what happens to each disputed term? Drag to the correct outcome:",
      tokens: [
        { id: "t1", label: "Disputes: Elvenking's Court" },
        { id: "t2", label: "Disputes: Master of Lake-town" },
        { id: "t3", label: "Elven Silks — No Warranty" },
        { id: "t4", label: "Returns Within 30 Days" },
        { id: "t5", label: "Core exchange: silks/wine for furs/ironware" }
      ],
      buckets: [
        { id: "knockout", label: "Knocked Out (conflicting → UCC defaults)" },
        { id: "additional", label: "Additional Term (proposal between merchants)" },
        { id: "survives", label: "Part of the Contract" }
      ],
      requiredAssignments: {
        "t1": "knockout",
        "t2": "knockout",
        "t3": "additional",
        "t4": "additional",
        "t5": "survives"
      },
      success: "Correct. Under the knock-out rule (majority approach for 'different terms' under § 2-207): the two conflicting forum clauses cancel each other — neither prevails, and UCC gap-filler provisions govern disputes instead. The 'No Warranty' and 'Returns' clauses appear in only ONE form — they are 'additional terms' under § 2-207(2). Between merchants, they become part of the contract UNLESS they materially alter the deal, the offer limits acceptance to its terms, or the offeror objects. The core exchange survives because both sides agreed to it.",
      failure: "Review § 2-207: (1) Conflicting terms on the SAME subject = knocked out. (2) Terms in only ONE form = additional terms (proposals between merchants). (3) Agreed terms always survive."
    },
    {
      type: "mcq",
      irac: "The Mailbox Rule",
      prompt: "The Elvenking offers silk on Monday. Lake-town dispatches acceptance Wednesday. The Elvenking sends a revocation Thursday. Revocation arrives Friday. Acceptance arrives Saturday. When did the contract form?",
      options: [
        {
          text: "Wednesday — acceptance is effective upon dispatch (R2d § 63). The contract formed before the revocation was even sent.",
          correct: true,
          feedback: "Correct. R2d § 63(a): 'Unless the offer provides otherwise, an acceptance... is operative and completes the manifestation of mutual assent as soon as put out of the offeree's possession.' The acceptance was dispatched Wednesday. The revocation (effective on receipt per R2d § 42) wasn't sent until Thursday and arrived Friday — but by then, the contract already existed. This asymmetry — dispatch for acceptance, receipt for everything else — heavily favors offerees."
        },
        {
          text: "Friday — the revocation arrived first, so it terminated the offer before the acceptance arrived.",
          correct: false,
          feedback: "This applies the RECEIPT rule to acceptance — but acceptances use the DISPATCH rule (R2d § 63). Arrival order doesn't matter. What matters: acceptance dispatched Wednesday (contract forms), revocation received Friday (too late). The contract existed before the revocation was even sent."
        },
        {
          text: "Saturday — when the acceptance arrives and the offeror reads it.",
          correct: false,
          feedback: "This is the receipt rule, which applies to offers, revocations, rejections, and counteroffers — but NOT to acceptances. The mailbox rule (R2d § 63) makes acceptance effective on dispatch. The offeror bears the risk of delay in transmission."
        }
      ]
    },
    {
      type: "madlibs",
      irac: "Synthesis",
      prompt: "Complete the acceptance holding:",
      template: "Acceptance completes the formation formula. Under common law, acceptance must [A] the offer exactly (R2d § 59). Under UCC § 2-207, a contract forms even with [B] terms — conflicting terms are resolved by the [C] rule. And under the [D] rule (R2d § 63), acceptance is effective upon [E], not receipt — making timing critical in the race between acceptance and revocation.",
      blanks: [
        { key: "A", options: ["mirror", "exceed", "approximate"], answer: "mirror" },
        { key: "B", options: ["non-matching", "identical", "written"], answer: "non-matching" },
        { key: "C", options: ["knock-out", "last-shot", "first-filed"], answer: "knock-out" },
        { key: "D", options: ["mailbox", "receipt", "dispatch"], answer: "mailbox" },
        { key: "E", options: ["dispatch", "receipt", "reading"], answer: "dispatch" }
      ],
      success: "Chapter 6 complete — and with it, the formation formula: Offer (Ch 4) - Termination (Ch 5) + Acceptance (Ch 6) = Contract, all within the framework of mutual assent (Ch 3). The mirror-image rule demands perfection at common law. The UCC allows flexibility for goods. And the mailbox rule makes the moment of dispatch the moment of commitment. Module 2 is complete. Ahead: Module 3, where you learn what makes a deal STICK — consideration and its alternatives.",
      failure: "Review: Mirror-image rule = exact match (common law). UCC § 2-207 = flexibility for goods, knock-out rule for conflicts. Mailbox rule = acceptance effective on dispatch, not receipt."
    }
  ]
};
