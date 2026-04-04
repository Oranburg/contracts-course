/**
 * Chapter 2: The Burglar Agreement — What Is a Contract?
 *
 * Chapter-level deep-dive focusing on:
 *   - R2d § 1 (contract defined)
 *   - R2d § 2 (promise — manifestation vs. intention)
 *   - R2d § 3 (agreement and bargain)
 *   - Bilateral vs. unilateral contracts
 *   - Steinberg v. Chicago Medical School (objective theory applied)
 *   - Pappas v. Bever (statement of intention ≠ promise)
 */
var EXERCISE = {
  slug: "burglary-agreement",
  title: "The Burglar Agreement",
  kicker: "Chapter 2 • What Is a Contract?",
  subtitle: "Bag End, The Shire",
  chapterNum: 2,
  law: "R2d §§ 1–3",
  narrative: "The document lies on the table: the Burglar Agreement between Bilbo Baggins and Thorin Oakenshield. It has clauses, signatures, and wax seals. But does it meet the legal definition of a contract? To answer, you must unpack the precise legal meanings of 'contract,' 'promise,' 'agreement,' and 'bargain' — terms that look simple but carry centuries of doctrine.",
  image: "../../assets/images/k-burglary-agreement.png",
  prevChapter: { title: "The Shire Archives", url: "../shire-archives/" },
  nextChapter: { title: "The Unexpected Party", url: "../unexpected-party/" },
  tome: [
    "R2d § 1: \"A contract is a promise or a set of promises for the breach of which the law gives a remedy, or the performance of which the law in some way recognizes as a duty.\"",
    "R2d § 2(1): \"A promise is a manifestation of intention to act or refrain from acting in a specified way, so made as to justify a promisee in understanding that a commitment has been made.\"",
    "R2d § 3: \"An agreement is a manifestation of mutual assent on the part of two or more persons. A bargain is an agreement to exchange promises or to exchange a promise for a performance or to exchange performances.\"",
    "Pappas v. Bever: \"A statement of intention is the mere expression of a state of mind, put in such a form as neither to invite nor to justify action in reliance. A promise is put in such a form as to invite reliance.\"",
    "Steinberg v. Chicago Medical School: \"In the formation of contracts, it was long ago settled that secret intent was immaterial, only overt acts being considered.\""
  ],
  artifacts: [
    {
      id: "agreement-text",
      name: "The Burglar Agreement (Full Text)",
      text: "THORIN AND COMPANY to BILBO BAGGINS, greeting: For your hospitality our sincerest thanks, and for your offer of professional assistance our grateful acceptance. Terms: Cash on delivery, up to and not exceeding one fourteenth of total profit (if any); all travelling expenses guaranteed in any event; funeral expenses to be defrayed by us or our representatives, if occasion arises and the matter is not otherwise arranged for. Signed: Thorin Oakenshield, for and on behalf of Thorin and Company."
    },
    {
      id: "bilbo-statements",
      name: "Bilbo's Statements Throughout the Evening",
      text: "Statement 1 (to Gandalf at the door): 'Good morning!' — a social greeting.\nStatement 2 (during the party): 'I am sure you are very well-meaning, but I do not think I am the right hobbit for this sort of adventure.' — an expression of doubt.\nStatement 3 (reading the contract): 'Funeral expenses? What kind of adventure is this?' — a question.\nStatement 4 (signing the contract): Bilbo signs his name at the bottom. — an act.\nStatement 5 (in his journal, later): 'I never intended to go. I only signed because they were staring.' — a private thought."
    },
    {
      id: "case-comparison",
      name: "Case Comparison: Steinberg & Pappas",
      text: "STEINBERG v. CHICAGO MEDICAL SCHOOL (1977): A student paid a $15 application fee. The school's bulletin promised evaluation on academic criteria. The school used non-academic criteria. HELD: Contract formed — the bulletin was an invitation, the application was an offer, cashing the check was acceptance. 'Secret intent was immaterial; only overt acts are considered.'\n\nPAPPAS v. BEVER (1974): A donor signed a pledge card reading 'I intend to subscribe $5,000.' He made two payments then died. HELD: No enforceable promise — 'I intend to' is a statement of intention, not a commitment. 'A statement of intention neither invites nor justifies action in reliance.'"
    }
  ],
  steps: [
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open all three artifacts: the full text of the Burglar Agreement, Bilbo's statements throughout the evening, and the case comparison between Steinberg and Pappas."
    },
    {
      type: "mcq",
      irac: "Promise vs. Statement of Intention",
      prompt: "Compare two statements: (A) Bilbo says 'I do not think I am the right hobbit for this.' (B) The pledge card in Pappas reads 'I intend to subscribe $5,000.' Under R2d § 2, are EITHER of these promises?",
      options: [
        {
          text: "Neither is a promise — both are statements of intention that neither invite nor justify reliance. A promise requires a manifestation of COMMITMENT, not mere intention.",
          correct: true,
          feedback: "Correct. R2d § 2(1) requires 'a manifestation of intention... so made as to justify a promisee in understanding that a commitment has been made.' Bilbo's doubt ('I don't think I'm right') and Pappas's pledge ('I intend to') both express states of mind without manifesting commitment. As the Pappas court held, citing Corbin: 'A statement of intention is put in such a form as neither to invite nor to justify action in reliance.' The critical word is 'commit' — without it, there is no promise."
        },
        {
          text: "The pledge card is a promise because Pappas made two payments, proving commitment.",
          correct: false,
          feedback: "The Pappas court rejected this 'bootstrap argument.' Partial payments do not convert a statement of intention into a promise. The language of the instrument controls: 'I intend to' does not manifest commitment. Actions consistent with a non-binding intention do not create one."
        },
        {
          text: "Bilbo's statement is a promise because he expressed a willingness to consider the adventure.",
          correct: false,
          feedback: "Expressing doubt ('I don't think I'm right') is the opposite of manifesting commitment. Under the objective standard, a reasonable person hearing this would NOT understand that Bilbo has agreed to anything. Compare Statement 4 (signing the contract) — THAT is a manifestation of assent."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Which Statement IS a Promise?",
      prompt: "Of Bilbo's five statements listed in the artifact, which ONE constitutes a legally binding manifestation of assent — not just a greeting, doubt, question, or private thought?",
      options: [
        {
          text: "Statement 4: Bilbo signs his name. An act — placing his signature on the agreement — is an objective manifestation of commitment.",
          correct: true,
          feedback: "Correct. Under the objective standard (Steinberg), 'only overt acts are considered.' Signing a contract is the clearest possible manifestation of assent. Statement 1 is a greeting (no commitment). Statement 2 is doubt (no commitment). Statement 3 is a question (no commitment). Statement 5 is a private thought (legally irrelevant under the objective standard). Only Statement 4 — the physical act of signing — manifests the intention to be bound."
        },
        {
          text: "Statement 1: 'Good morning' — Gandalf interpreted this as an invitation.",
          correct: false,
          feedback: "Gandalf may have interpreted it creatively, but under the objective standard, a reasonable person would understand 'Good morning' as a social greeting, not an invitation to enter a contract. The test is the reasonable person, not the idiosyncratic listener."
        },
        {
          text: "Statement 5: Bilbo's journal entry shows his true intent, which is what matters.",
          correct: false,
          feedback: "Private journal entries are the epitome of 'undisclosed intention.' R2d § 2 cmt. b: manifestation of intention 'means the external expression of intention as distinguished from undisclosed intention.' Bilbo's journal is evidence of what he THOUGHT, not what he MANIFESTED. Under the objective standard, it is irrelevant."
        }
      ]
    },
    {
      type: "dragdrop",
      irac: "Contract Building Blocks",
      prompt: "Apply the R2d definitions to the Burglar Agreement. Drag each element to the correct legal category:",
      tokens: [
        { id: "t1", label: "Bilbo shall proceed to recover treasure (his commitment)" },
        { id: "t2", label: "Thorin shall pay one-fourteenth (his commitment)" },
        { id: "t3", label: "Both signed the document (mutual external conduct)" },
        { id: "t4", label: "Bilbo's burglar work exchanged for Thorin's gold" },
        { id: "t5", label: "Bilbo privately regrets signing (journal entry)" }
      ],
      buckets: [
        { id: "promise", label: "Promise (R2d § 2)" },
        { id: "agreement", label: "Agreement (R2d § 3: mutual assent)" },
        { id: "bargain", label: "Bargain (R2d § 3: exchange)" },
        { id: "irrelevant", label: "Legally Irrelevant" }
      ],
      requiredAssignments: {
        "t1": "promise",
        "t2": "promise",
        "t3": "agreement",
        "t4": "bargain",
        "t5": "irrelevant"
      },
      success: "The hierarchy is clear: Each party's commitment is a PROMISE (R2d § 2). Both parties signing is an AGREEMENT — a manifestation of mutual assent (R2d § 3, first sentence). The exchange of service for payment is a BARGAIN — an agreement to exchange a promise for a performance (R2d § 3, second sentence). And Bilbo's private regret is legally irrelevant under the objective standard. Promise → Agreement → Bargain → Contract. Each term is more specific than the last.",
      failure: "Remember the hierarchy: Promise (R2d § 2) = individual commitment. Agreement (R2d § 3) = mutual assent (both sides). Bargain (R2d § 3) = the exchange itself. Private thoughts = irrelevant."
    },
    {
      type: "mcq",
      irac: "Bilateral vs. Unilateral",
      prompt: "The Burglar Agreement involves two promises: Bilbo promises service, Thorin promises payment. But suppose Thorin had instead posted a notice: '$5,000 reward for the return of the Arkenstone — payable upon delivery.' How would the structure differ?",
      options: [
        {
          text: "The Agreement is bilateral (promise for promise, binding at signing). The notice would be unilateral (promise for performance, binding only upon delivery of the Arkenstone).",
          correct: true,
          feedback: "Correct. Bilateral: both parties are bound from the moment of mutual promises. Neither must perform first — both owe duties immediately. Unilateral: only the offeror is bound (by his promise). The offeree has no duty — they accept ONLY by performing (delivering the stone). They cannot accept by merely promising to look. This distinction matters for timing: bilateral contracts bind at agreement; unilateral contracts bind at performance."
        },
        {
          text: "Both are bilateral because two parties are involved in each scenario.",
          correct: false,
          feedback: "The number of parties doesn't determine the type. Bilateral vs. unilateral describes the FORM of acceptance: promise for promise (bilateral) vs. promise for performance (unilateral). A reward offer is unilateral even though two parties are ultimately involved when someone claims the reward."
        },
        {
          text: "The notice is an advertisement, not an offer, so no contract can form.",
          correct: false,
          feedback: "Reward offers are a recognized exception to the general rule that ads aren't offers. Unlike vague ads ('MUTTON TONIGHT'), a reward notice specifies the act required, the reward amount, and the acceptance method (delivery). Compare Lefkowitz: specificity makes it an offer."
        }
      ]
    },
    {
      type: "madlibs",
      irac: "Verdict",
      prompt: "Draft the holding on the Burglar Agreement:",
      template: "Under R2d § 1, the Burglar Agreement is an enforceable [A] because it contains promises for the breach of which the law gives a remedy. Under R2d § 2, Bilbo's signature constitutes an objective [B] of commitment — his private reluctance is irrelevant under the [C] standard. Under R2d § 3, the mutual exchange of burglar services for one-fourteenth profit is a [D]. This is a [E] contract: both parties have made promises and are bound from the moment of signing.",
      blanks: [
        { key: "A", options: ["contract", "agreement", "negotiation"], answer: "contract" },
        { key: "B", options: ["manifestation", "intention", "feeling"], answer: "manifestation" },
        { key: "C", options: ["objective", "subjective", "equitable"], answer: "objective" },
        { key: "D", options: ["bargain", "gift", "condition"], answer: "bargain" },
        { key: "E", options: ["bilateral", "unilateral", "implied"], answer: "bilateral" }
      ],
      success: "Chapter 2 complete. The Burglar Agreement satisfies every element: it contains promises (R2d § 2), manifested through objective conduct (signature), within a mutual agreement (R2d § 3), structured as a bargain (exchange of value), creating a bilateral contract (both parties bound by promises). Bilbo's private thoughts are as irrelevant as Zehmer's claim that he was joking. What matters is what you DO, not what you THINK. The adventure — and the contract — begins.",
      failure: "Review: A contract (R2d § 1) = enforceable promise(s). Manifestation (R2d § 2) = external expression, not private thought. Objective standard = conduct controls. Bargain (R2d § 3) = exchange of value. Bilateral = promise for promise, both bound at signing."
    }
  ]
};
