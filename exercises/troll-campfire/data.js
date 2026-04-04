/**
 * Chapter 4: Troll Campfire — Offers
 * Focus: R2d §§ 24, 26, 33, Lefkowitz, Leonard v. Pepsico
 */
var EXERCISE = {
  slug: "troll-campfire",
  title: "Troll Campfire",
  kicker: "Chapter 4 • Offers",
  subtitle: "Trollshaws Forest",
  chapterNum: 4,
  law: "R2d §§ 24, 26, 33",
  narrative: "Three trolls argue around a campfire while dwarves hang in sacks nearby. Each troll proposes a cooking method. None agrees. Meanwhile, their 'MUTTON TONIGHT' sign draws curious travelers. Are these proposals offers? Is that sign an offer? The answer depends on definiteness, certainty, and whether a reasonable person would understand that acceptance would conclude the deal.",
  image: "../../assets/images/K-troll-campfire.png",
  prevChapter: { title: "The Unexpected Party", url: "../unexpected-party/" },
  nextChapter: { title: "Riddles in the Dark", url: "../riddles-in-the-dark/" },
  tome: [
    "R2d § 24: \"An offer is the manifestation of willingness to enter into a bargain, so made as to justify another person in understanding that his assent to that bargain is invited and will conclude it.\"",
    "R2d § 26: Preliminary negotiations — not an offer if offeree knows or has reason to know person doesn't intend to conclude a bargain without further manifestation.",
    "R2d § 26 cmt. b: \"Advertisements of goods by display, sign, handbill, newspaper, radio or television are not ordinarily intended or understood as offers to sell.\"",
    "R2d § 33: Terms must be \"reasonably certain\" — providing a basis for determining breach and giving an appropriate remedy.",
    "Lefkowitz: Ad specifying item ($1 stole), quantity (1), and acceptance ('first come first served') WAS an offer."
  ],
  artifacts: [
    {
      id: "troll-proposals",
      name: "Troll Proposals (Analyzed)",
      text: "TOM: 'Let's roast 'em slowly.' — No method specified, no timing, no allocation of portions. Lacks the essential terms required by R2d § 33.\nBERT: 'Sit on 'em and squash 'em into jelly!' — Creative but lacks any definite term (how? who? when?).\nWILLIAM: 'Boil 'em.' — Slightly more definite but still missing essential terms. No water source identified.\nAll three are brainstorming — R2d § 26 preliminary negotiations, not R2d § 24 offers."
    },
    {
      id: "mutton-sign",
      name: "The Sign and the Lefkowitz Test",
      text: "TROLL SIGN: 'MUTTON TONIGHT — BEST OFFER'\nLEFKOWITZ AD: '1 Black Lapin Stole, Worth $139.50 — $1.00 — First Come First Served'\n\nLefkowitz specified: (1) exact item, (2) exact price, (3) quantity of 1, (4) acceptance method. The trolls' sign specifies: (1) general category only ('mutton'), (2) no price (invites negotiation), (3) no quantity, (4) no acceptance method. Under R2d § 26 cmt. b, the trolls' sign is an invitation to deal. Lefkowitz was an offer because it left nothing to negotiate."
    }
  ],
  steps: [
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open both artifacts: the analyzed troll proposals and the sign comparison with Lefkowitz."
    },
    {
      type: "mcq",
      irac: "Offer vs. Negotiation",
      prompt: "Tom says 'Let's roast 'em slowly.' Under R2d § 24, is this an offer?",
      options: [
        {
          text: "No — it is a preliminary negotiation lacking the definiteness R2d § 33 requires. A reasonable troll would not understand acceptance of this proposal would conclude a bargain.",
          correct: true,
          feedback: "Correct. R2d § 24 requires the proposal to justify the other party 'in understanding that his assent to that bargain is invited and will conclude it.' Tom's vague suggestion specifies no method, timing, or allocation. R2d § 33 adds that terms must be 'reasonably certain' — providing a basis for determining breach. If Tom fails to roast 'slowly enough,' what remedy would Bert seek? The terms are too indefinite to enforce."
        },
        {
          text: "Yes — Tom clearly expressed willingness to cook, which is sufficient for an offer.",
          correct: false,
          feedback: "Willingness is necessary but not sufficient. An offer must contain reasonably certain terms (R2d § 33) — parties, subject matter, and enough specificity that a court could determine breach and provide a remedy. 'Slowly' is not a certain term."
        },
        {
          text: "Yes — between the three trolls, they have a course of dealing that supplements the missing terms.",
          correct: false,
          feedback: "Course of dealing (UCC § 1-303) can supplement existing contracts, but it cannot create an offer where none exists. The trolls have never successfully agreed on a cooking method — that IS their course of dealing, and it demonstrates they are still in the negotiation phase."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Advertisements as Offers",
      prompt: "The trolls' sign reads 'MUTTON TONIGHT — BEST OFFER.' In Lefkowitz, a newspaper ad reading '1 Black Lapin Stole — $1 — First Come First Served' was held to be an offer. What distinguishes them?",
      options: [
        {
          text: "Lefkowitz specified item, price, quantity, and acceptance method — the four elements that transform an ad from invitation to offer. The trolls' sign has none.",
          correct: true,
          feedback: "Correct. The Lefkowitz court identified what makes an ad an offer: (1) specific item (Black Lapin Stole), (2) definite price ($1), (3) limited quantity (1), and (4) manner of acceptance ('First Come First Served,' which solved the oversubscription problem). The trolls' sign — 'MUTTON TONIGHT — BEST OFFER' — explicitly invites further negotiation ('BEST OFFER'), has no price, no quantity, and no acceptance method. Under R2d § 26 cmt. b, it is merely an invitation to deal."
        },
        {
          text: "The trolls' sign is an offer because it specifies a product (mutton) and a timeframe (tonight).",
          correct: false,
          feedback: "Product category and timeframe are not enough. An offer must contain 'reasonably certain terms' (R2d § 33). Without a price, quantity, and acceptance method, a 'reasonable person' could not understand that showing up with money would conclude a deal. 'BEST OFFER' invites negotiation — the opposite of a definite offer."
        },
        {
          text: "Neither is an offer — all advertisements are invitations to deal, without exception.",
          correct: false,
          feedback: "Lefkowitz IS the exception. The general rule (R2d § 26 cmt. b) is correct — ads are ordinarily not offers. But when an ad is specific enough (item + price + quantity + acceptance method), it can be. That's why Lefkowitz is a landmark case."
        }
      ]
    },
    {
      type: "madlibs",
      irac: "Synthesis",
      prompt: "Draft the holding on offers:",
      template: "An offer under R2d § 24 is a [A] of willingness to enter into a bargain, justifying the other party in understanding that [B] will conclude the deal. The terms must be [C] (R2d § 33). Advertisements are generally [D] to deal, not offers — unless they specify item, price, quantity, and manner of acceptance, as in [E].",
      blanks: [
        { key: "A", options: ["manifestation", "hope", "intention"], answer: "manifestation" },
        { key: "B", options: ["acceptance", "negotiation", "consideration"], answer: "acceptance" },
        { key: "C", options: ["reasonably certain", "perfectly precise", "written"], answer: "reasonably certain" },
        { key: "D", options: ["invitations", "offers", "conditions"], answer: "invitations" },
        { key: "E", options: ["Lefkowitz", "Lucy v. Zehmer", "Raffles"], answer: "Lefkowitz" }
      ],
      success: "Chapter 4 complete. An offer must be definite enough that acceptance concludes the deal. Vague proposals are negotiations. Ads are generally invitations — unless they are as specific as Lefkowitz's fur stole ad. The trolls never made an offer because they never proposed anything certain enough to accept. Dawn turned them to stone before they could agree — which is, perhaps, contract law's most dramatic illustration of lapse. Next: Chapter 5, where offers die.",
      failure: "Review: Offers require manifestation of willingness + reasonably certain terms + understanding that acceptance concludes. Ads are invitations unless they specify item + price + quantity + acceptance method (Lefkowitz)."
    }
  ]
};
