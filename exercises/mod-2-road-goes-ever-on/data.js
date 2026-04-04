/**
 * Module 2: The Road Goes Ever On — Mutual Assent (Ch 3–6)
 *
 * Hero's Journey: Call to Adventure
 * Story: From the Unexpected Party through trolls, riddles, and Mirkwood trade.
 * Doctrine: Bargains, offers, termination, acceptance.
 *
 * Four scenes, each covering one chapter:
 *  - Ch 3: The Unexpected Party — mutual assent, objective theory (Lucy v. Zehmer)
 *  - Ch 4: Troll Campfire — offers vs. preliminary negotiations (Lefkowitz)
 *  - Ch 5: Riddles in the Dark — termination of offers (lapse, revocation, rejection)
 *  - Ch 6: Mirkwood Merchants — acceptance, mirror image, battle of forms (UCC 2-207)
 */
var EXERCISE = {
  slug: "mod-2-road-goes-ever-on",
  title: "The Road Goes Ever On",
  kicker: "Module 2 • Mutual Assent",
  subtitle: "Bag End to Lake-town",
  chapterNum: 3,
  law: "R2d §§ 17–63; UCC § 2-207",
  narrative: "The journey has begun. From the moment Thorin extended his hand at the dinner table, every step of the quest requires agreement — bargains struck, offers made, deals that expire, and terms that clash. Four stops on the road will test whether Bilbo and company can form the contracts they need to survive.",
  image: "../../assets/images/K-unexpected-party.png",
  prevChapter: { title: "There and Back Again", url: "../mod-1-there-and-back-again/" },
  nextChapter: { title: "The Dragon's Price", url: "../mod-3-dragons-price/" },
  tome: [
    "R2d § 17(1): \"The formation of a contract requires a bargain in which there is a manifestation of mutual assent to the exchange and a consideration.\"",
    "R2d § 24: \"An offer is the manifestation of willingness to enter into a bargain, so made as to justify another person in understanding that his assent to that bargain is invited and will conclude it.\"",
    "R2d § 36(1): An offeree's power of acceptance is terminated by (a) rejection or counter-offer, (b) lapse of time, (c) revocation by the offeror, or (d) death or incapacity.",
    "R2d § 50(1): \"Acceptance of an offer is a manifestation of assent to the terms thereof made by the offeree in a manner invited or required by the offer.\"",
    "UCC § 2-207(1): A definite and seasonable expression of acceptance operates as acceptance even if it states terms additional to or different from those offered, unless acceptance is expressly made conditional on assent to the additional or different terms.",
    "Lucy v. Zehmer: \"The mental assent of the parties is not requisite for the formation of a contract. If the words or other acts of one of the parties have but one reasonable meaning, his undisclosed intention is immaterial.\""
  ],
  artifacts: [
    {
      id: "thorin-handshake",
      name: "Thorin's Handshake",
      text: "At the head of the table, amid the remains of supper, Thorin Oakenshield extended his hand to Bilbo. 'Will you join our Company as burglar?' The twelve dwarves fell silent. Bilbo looked at the hand, looked at the contract on the table, and — without a word — reached out and shook it. Later he claimed he was merely being polite. The dwarves took it as acceptance."
    },
    {
      id: "troll-argument",
      name: "Troll Negotiation Transcript",
      text: "TOM: 'Let's roast 'em slowly.' BERT: 'No, let's sit on 'em and squash 'em into jelly!' WILLIAM: 'I says, let's boil 'em.' TOM: 'We ain't got no water, fool.' BERT: 'Make 'em into mutton pies then — who's got a recipe?' WILLIAM: 'You never agree to nothin'! There ain't no deal here and there ain't gonna be.' [Trolls continue arguing until dawn turns them to stone.]"
    },
    {
      id: "riddle-wager",
      name: "The Riddle Game Terms",
      text: "GOLLUM: 'If precious asks, and it doesn't answer, we eats it, my preciousss. If it asks us, and we doesn't answer, then we does what it wants, eh? We shows it the way out, yes!' BILBO: 'All right!' [Both parties agreed. The terms were specific: ask riddles; fail to answer and lose. The offer had no stated time limit — but both understood the game would end when one party could not answer.]"
    },
    {
      id: "mirkwood-forms",
      name: "Competing Trade Forms",
      text: "SILVAN ELVEN COVENANT: 'One Moon Delivery. Non-Refundable. Elven Silks — No Warranty. Fine Wine — Returnable. Disputes resolved by the Elvenking.' ESGAROTH TRADERS UNION: 'Delivery Upon Request. Returns Within 30 Days. Human Furs in Exchange. Crafted Ironware. Disputes resolved by the Master of Lake-town.' [Both sides proceeded to trade despite the conflicting terms.]"
    }
  ],
  steps: [
    {
      type: "info",
      irac: "The Journey Begins",
      prompt: "Four stops on the road from Bag End to Lake-town. At each stop, a contract problem arises. The formula you need: Offer + Acceptance = Mutual Assent. But offers can fail, expire, and clash. Open the Investigation Desk to see the evidence, then work through each scene."
    },
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open all four artifacts to examine the evidence from each stop on the journey."
    },
    {
      type: "mcq",
      irac: "Ch 3: Mutual Assent — The Handshake",
      prompt: "Bilbo shook Thorin's hand at the dinner table but later claimed he was 'merely being polite.' Under Lucy v. Zehmer and the objective theory, is there mutual assent?",
      options: [
        {
          text: "Yes — a reasonable person would understand Bilbo's handshake as acceptance. His secret reluctance is irrelevant.",
          correct: true,
          feedback: "Correct. As Lucy v. Zehmer established: 'If the words or other acts of one of the parties have but one reasonable meaning, his undisclosed intention is immaterial.' Bilbo shook hands on a specific proposal after reviewing the contract. A reasonable dwarf would take that as assent. His private politeness is legally irrelevant."
        },
        {
          text: "No — Bilbo's subjective intent was social, not contractual. No meeting of the minds.",
          correct: false,
          feedback: "This is the subjective approach that modern contract law rejects. Courts do not require a 'meeting of the minds' — that phrase is, as the casebook says, 'an outdated cliché.' The objective standard asks what a reasonable person would understand from the outward conduct."
        },
        {
          text: "It depends on whether the dwarves were deceived by Bilbo's handshake.",
          correct: false,
          feedback: "The objective test doesn't turn on whether the specific offeror was deceived. It asks whether a reasonable person in the dwarves' position would understand the handshake as acceptance. They would — Bilbo's conduct objectively manifested assent."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 4: Offers — The Troll Campfire",
      prompt: "Tom proposes roasting, Bert proposes squashing, William proposes boiling. None agrees. William finally says: 'There ain't no deal here.' Under R2d § 24, why did no contract form among the trolls?",
      options: [
        {
          text: "None of the proposals were offers — they were preliminary negotiations. No proposal was definite enough to invite acceptance that would conclude a bargain.",
          correct: true,
          feedback: "Correct. Under R2d § 24, an offer must be a 'manifestation of willingness to enter into a bargain, so made as to justify another person in understanding that his assent to that bargain is invited and will conclude it.' The trolls were brainstorming, not making definite proposals. None specified terms clearly enough to invite binding acceptance."
        },
        {
          text: "The trolls made valid offers but each was rejected by counteroffer, terminating the prior offer.",
          correct: false,
          feedback: "This assumes each proposal was definite enough to be an offer. But 'Let's roast 'em slowly' lacks the definiteness R2d § 33 requires — it doesn't specify method, timing, or division of the meal. These are preliminary negotiations, not offers."
        },
        {
          text: "The trolls lacked capacity to form contracts because they are not legal persons.",
          correct: false,
          feedback: "While creative, this misses the doctrinal point. The issue is whether definite offers were made, not whether trolls have legal personhood. The proposals failed because they were vague negotiations, not because of the parties' nature."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Ch 4: Advertisements as Offers",
      prompt: "Suppose the trolls posted a sign: 'MUTTON TONIGHT — BEST OFFER.' Under the general rule from R2d § 26 cmt. b, is this sign an offer?",
      options: [
        {
          text: "No — advertisements are generally not offers. This sign lacks specific quantity, price, and manner of acceptance.",
          correct: true,
          feedback: "Correct. Under R2d § 26 cmt. b: 'Advertisements of goods by display, sign, handbill, newspaper, radio or television are not ordinarily intended or understood as offers to sell.' The trolls' sign is vague — no price, no quantity, no 'first come, first served.' Compare Lefkowitz, where the ad specified item, price ($1), quantity (1 stole), and acceptance method (first come, first served)."
        },
        {
          text: "Yes — it clearly communicates willingness to sell mutton, which is enough for an offer.",
          correct: false,
          feedback: "Willingness alone is not enough. An offer must contain reasonably certain terms (R2d § 33) and must justify the offeree in understanding that acceptance will conclude the bargain. 'BEST OFFER' is an invitation to negotiate, not a binding proposal."
        },
        {
          text: "Yes — under Lefkowitz, any specific advertisement is an offer.",
          correct: false,
          feedback: "Lefkowitz is the exception, not the rule. That ad was an offer because it specified the exact item, exact price ($1), limited quantity (1 stole), and manner of acceptance ('first come, first served'). The trolls' sign has none of these features."
        }
      ]
    },
    {
      type: "redline",
      irac: "Ch 5: Termination — The Riddle Game",
      prompt: "Gollum's riddle game has built-in termination rules. Read his proposal below and click the phrase that creates an automatic termination condition — the event that ends the offer:",
      docText: "If precious asks, and it doesn't answer, we eats it. If it asks us, and we doesn't answer, then we shows it the way out.",
      target: "doesn't answer",
      success: "Correct. The phrase 'doesn't answer' is the termination condition. Under R2d § 36, the power of acceptance can be terminated by lapse — here, the 'lapse' is defined as failure to answer a riddle. The offer to continue the game terminates the moment one party cannot answer. This is analogous to a time-limited offer: the clock runs out when a riddle goes unanswered."
    },
    {
      type: "mcq",
      irac: "Ch 5: Irrevocability",
      prompt: "Midway through the riddle game, Gollum realizes he might lose and wants to quit. Can he revoke his offer to show Bilbo the way out?",
      options: [
        {
          text: "No — Bilbo has already begun performing (answering riddles). Under R2d § 45, part performance makes the offer irrevocable.",
          correct: true,
          feedback: "Correct. R2d § 45: 'Where an offer invites an offeree to accept by rendering a performance... an option contract is created when the offeree tenders or begins the invited performance.' The riddle game is a unilateral contract — Bilbo accepts by performing (answering). Once he starts answering, Gollum cannot revoke. Bilbo gets a reasonable time to complete."
        },
        {
          text: "Yes — the offeror is always the 'master of the bargain' and can revoke at any time before acceptance.",
          correct: false,
          feedback: "While the offeror is generally the master of the bargain, there are four exceptions to revocability (OFUR): Option contracts, Firm offers, Unilateral (part-performance), and Reliance. Here, Bilbo's part performance under R2d § 45 makes the offer irrevocable."
        },
        {
          text: "Yes — oral agreements can always be revoked because there is no writing.",
          correct: false,
          feedback: "The absence of a writing does not make an agreement revocable. Oral contracts are generally valid. The question is whether the offer became irrevocable through part performance, which it did under R2d § 45."
        }
      ]
    },
    {
      type: "dragdrop",
      irac: "Ch 6: Acceptance — Mirkwood Battle of Forms",
      prompt: "The Elven merchants and Lake-town traders exchanged conflicting written terms but proceeded to trade. Under UCC § 2-207, drag each disputed term to what happens to it:",
      tokens: [
        { id: "t1", label: "Disputes resolved by the Elvenking" },
        { id: "t2", label: "Disputes resolved by Master of Lake-town" },
        { id: "t3", label: "Elven Silks — No Warranty" },
        { id: "t4", label: "Returns Within 30 Days" },
        { id: "t5", label: "The agreed exchange: silks for ironware" }
      ],
      buckets: [
        { id: "knockout", label: "Knocked Out (conflicting terms cancel)" },
        { id: "additional", label: "Additional Term (proposal only)" },
        { id: "survives", label: "Part of the Contract" }
      ],
      requiredAssignments: {
        "t1": "knockout",
        "t2": "knockout",
        "t3": "additional",
        "t4": "additional",
        "t5": "survives"
      },
      success: "Correct. Under the knock-out rule (majority approach for UCC § 2-207), the conflicting forum clauses cancel each other out — neither party's dispute resolution term survives. The 'No Warranty' and 'Returns' clauses are additional terms that become mere proposals (unless both parties are merchants and the terms don't materially alter the deal). The core exchange — silks for ironware — survives because both parties agreed to it.",
      failure: "Review UCC § 2-207. Conflicting terms (like two different forum clauses) 'knock each other out' under the majority rule. Additional terms that appear in only one form are proposals. The terms both parties agreed to survive."
    },
    {
      type: "mcq",
      irac: "Ch 6: Mirror Image vs. UCC",
      prompt: "If this were a common law transaction (say, land instead of goods), and the Elves' acceptance contained different terms from the Lake-town offer, what would happen under the mirror-image rule?",
      options: [
        {
          text: "The Elves' response would be a counteroffer, not an acceptance. No contract forms unless Lake-town accepts the new terms.",
          correct: true,
          feedback: "Correct. Under the common law mirror-image rule (R2d § 59), 'a reply to an offer which purports to accept it but is conditional on the offeror's assent to terms additional to or different from those offered is not an acceptance but is a counter-offer.' The UCC § 2-207 specifically rejects this harsh result for goods transactions, allowing contracts to form even with non-matching terms."
        },
        {
          text: "A contract forms on the Elves' terms since they sent the last document.",
          correct: false,
          feedback: "This is the 'last-shot rule,' which is a minority approach under UCC § 2-207 and not the common law rule. Under common law, the Elves' different terms would make their response a counteroffer, killing the original offer entirely."
        },
        {
          text: "The conflicting terms knock each other out, just like under the UCC.",
          correct: false,
          feedback: "The knock-out rule is a UCC § 2-207 concept. Common law uses the stricter mirror-image rule: any deviation from the offer's terms turns the 'acceptance' into a counteroffer. That's exactly why the UCC was created — to soften the harsh result in commercial transactions."
        }
      ]
    },
    {
      type: "madlibs",
      irac: "Synthesis: The Formation Formula",
      prompt: "Complete the contract formation formula as demonstrated across all four stops on the journey:",
      template: "Contract formation requires an [A] (a definite proposal inviting acceptance), which must not be [B] before the offeree responds. The offeree must then manifest [C] to the offer's terms. Under common law, the response must [D] the offer exactly. Under UCC § 2-207, a contract forms even with non-matching terms, and conflicting terms are resolved by the [E] rule.",
      blanks: [
        {
          key: "A",
          options: ["offer", "promise", "negotiation"],
          answer: "offer"
        },
        {
          key: "B",
          options: ["terminated", "modified", "forgotten"],
          answer: "terminated"
        },
        {
          key: "C",
          options: ["assent", "consideration", "reliance"],
          answer: "assent"
        },
        {
          key: "D",
          options: ["mirror", "exceed", "approximate"],
          answer: "mirror"
        },
        {
          key: "E",
          options: ["knock-out", "last-shot", "first-filed"],
          answer: "knock-out"
        }
      ],
      success: "The road is clear. Contract formation = Offer (Ch 4) - Termination (Ch 5) + Acceptance (Ch 6), all within a framework of mutual assent (Ch 3). The common law mirror-image rule demands exact agreement; the UCC knock-out rule reflects commercial reality. From Thorin's handshake to the Mirkwood trading post, every bargain on this journey tested these principles.",
      failure: "Review the formula: an offer must be made and survive termination. The offeree must then accept — mirroring the offer at common law, or forming despite differences under UCC § 2-207 with the knock-out rule resolving conflicts."
    }
  ]
};
