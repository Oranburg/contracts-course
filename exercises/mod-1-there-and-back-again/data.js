/**
 * Module 1: There and Back Again — Foundations (Ch 1–2)
 *
 * Hero's Journey: Ordinary World
 * Story: Bilbo's life before and during the Burglar Agreement.
 * Doctrine: What is contract law? What is a contract?
 *
 * Integrated activity covering both chapters:
 *  - Ch 1: Nature of promises, public vs. private law, law vs. equity,
 *          four justifications, objective vs. subjective
 *  - Ch 2: Contract definition (R2d § 1), promise (R2d § 2),
 *          agreement vs. bargain (R2d § 3), bilateral vs. unilateral,
 *          statement of intention vs. promise
 */
var EXERCISE = {
  slug: "mod-1-there-and-back-again",
  title: "There and Back Again",
  kicker: "Module 1 • Foundations",
  subtitle: "Bag End to the Burglar Agreement",
  chapterNum: 1,
  law: "R2d §§ 1–3 (Contracts, Promises, Agreements)",
  narrative: "Before the dwarves arrived, the Shire ran on promises nobody thought to call contracts. Farmers traded vegetables over fences. Bakers passed bread through windows. Then Gandalf scratched his mark on the door, and everything changed. A formal document appeared on Bilbo's table — the Burglar Agreement — and for the first time, a hobbit had to ask: is this a contract?",
  image: "../../assets/images/k-shire-morning.png",
  prevChapter: null,
  nextChapter: { title: "The Road Goes Ever On", url: "../mod-2-road-goes-ever-on/" },
  tome: [
    "R2d § 1: \"A contract is a promise or a set of promises for the breach of which the law gives a remedy, or the performance of which the law in some way recognizes as a duty.\"",
    "R2d § 2(1): \"A promise is a manifestation of intention to act or refrain from acting in a specified way, so made as to justify a promisee in understanding that a commitment has been made.\"",
    "R2d § 3: \"An agreement is a manifestation of mutual assent on the part of two or more persons. A bargain is an agreement to exchange promises or to exchange a promise for a performance or to exchange performances.\"",
    "Casebook: \"Contract law is the law of promises. A promise is an expression of commitment to do (or not to do) something. Without a promise, there is no contract.\"",
    "Casebook: \"Contrary to popular belief, contract law does not require a 'meeting of the minds.' Courts assess contracts objectively, based on what the parties say and do.\""
  ],
  artifacts: [
    {
      id: "shire-trade",
      name: "Shire Market Customs",
      text: "Farmer Cotton delivers potatoes to the Gamgees every Tuesday. No writing, no handshake — just decades of practice. Last week, Cotton delivered late. The Gaffer grumbled but said nothing. Is there a contract? There is certainly a promise — Cotton's consistent conduct manifests an intention to deliver. But without a bargained-for exchange, it may be a gratuitous arrangement."
    },
    {
      id: "burglar-agreement",
      name: "The Burglar Agreement",
      text: "Terms: Burglar (Bilbo Baggins) shall proceed to the Lonely Mountain to recover treasure from Smaug. Compensation: Cash on delivery, up to and not exceeding one fourteenth of total profit (if any). Risk: Travelling expenses guaranteed in any event, but funeral expenses to be defrayed by Thorin Oakenshield and Company or their representatives, if occasion arises and the matter is not otherwise arranged for. Signed: Thorin Oakenshield, for and on behalf of the Company."
    },
    {
      id: "gandalf-letter",
      name: "Gandalf's Letter to Bilbo",
      text: "\"Dear Bilbo — You asked me once if your adventures would make a good tale. Every good tale begins with a contract and ends with a remedy. The question is never whether promises exist — they are as common as clover in the Shire. The question is which promises the law will enforce, and why. Your burglar's contract is unusual: it is a written document in a world that runs on handshakes. But the writing is not what makes it binding. What makes it binding is the exchange. — Gandalf\""
    },
    {
      id: "bilbo-journal",
      name: "Bilbo's Private Journal",
      text: "\"I never intended to go on any adventure. When I said 'Good morning' to Gandalf, I meant it as a greeting, nothing more. He seems to have taken it as some sort of invitation. I wonder — does what I meant matter, or only what I said? The dwarves seem to think I have agreed to something. I suppose I did sign the contract, but only because they were all staring at me. My hand was shaking.\""
    }
  ],
  steps: [
    {
      type: "info",
      irac: "Setting the Scene",
      prompt: "Welcome to the Shire — a place where promises are kept without lawyers, courts, or written documents. In this exercise, you will discover why contract law exists and what makes a promise legally binding. We begin in the ordinary world, where promises flow freely, and end with the first real contract: Bilbo's Burglar Agreement."
    },
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open the Investigation Desk to examine the evidence. Read about how the Shire works, what the Burglar Agreement says, what Gandalf thinks about contracts, and what Bilbo privately wrote in his journal."
    },
    {
      type: "mcq",
      irac: "Chapter 1: Why Contract Law?",
      prompt: "Farmer Cotton has delivered potatoes to the Gamgees every Tuesday for years. One week he doesn't show up. The Gaffer is upset. Why might contract law exist to address this situation?",
      options: [
        {
          text: "To protect people who rely on promises — the Gaffer planned his meals around the delivery.",
          correct: true,
          feedback: "Correct. Reliance is one of the four core justifications for contract law. The Gaffer acted based on Cotton's consistent conduct. Contract law protects those who reasonably rely on promises."
        },
        {
          text: "To punish Cotton for being unreliable — he broke a social norm.",
          correct: false,
          feedback: "Contract law is not criminal law. It does not punish — it provides remedies. The purpose is to protect the relying party, not to penalize the breaching party."
        },
        {
          text: "To force Cotton to deliver potatoes forever — once you start, you cannot stop.",
          correct: false,
          feedback: "Contract law is voluntary. It enforces only obligations people freely choose to create. Cotton is not enslaved by his past conduct unless there was a bargained-for exchange."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Chapter 1: Public vs. Private Law",
      prompt: "Bilbo pays no taxes to the Shire government — hobbits have no central tax authority. But he does make deals with his neighbors. What kind of law governs Bilbo's dealings?",
      options: [
        {
          text: "Private law — it governs voluntary relationships between individuals.",
          correct: true,
          feedback: "Correct. Contract law is private law. Unlike public law (criminal, tax), it only creates obligations people choose. As the casebook states: 'If you do not want to be liable, you can choose not to form a contract.'"
        },
        {
          text: "Public law — all law comes from the government.",
          correct: false,
          feedback: "Public law governs the relationship between people and the state. Contract law is private law — it governs relationships between people and is voluntary."
        },
        {
          text: "Natural law — customs and traditions govern, not formal rules.",
          correct: false,
          feedback: "While the Shire runs on custom, contract law as a legal discipline is part of the private law system — distinct from natural law theories."
        }
      ]
    },
    {
      type: "redline",
      irac: "Chapter 2: Promise vs. Intention",
      prompt: "Read Bilbo's journal entry below. Click the word that tells us Bilbo's statement to Gandalf was NOT a promise — just a social greeting with no legal commitment.",
      docText: "I never intended to go on any adventure. When I said Good morning to Gandalf, I meant it as a greeting, nothing more.",
      target: "greeting",
      success: "Correct. A greeting is not a promise. Under R2d § 2, a promise must be 'a manifestation of intention to act or refrain from acting in a specified way, so made as to justify a promisee in understanding that a commitment has been made.' A casual 'Good morning' manifests no commitment — it is a social pleasantry, not a legal act."
    },
    {
      type: "mcq",
      irac: "Chapter 2: Objective vs. Subjective",
      prompt: "Bilbo writes in his journal: 'I only signed because they were all staring at me.' He claims he never truly agreed. Under the objective theory of contracts, does Bilbo's private reluctance matter?",
      options: [
        {
          text: "No — courts look at what Bilbo did (signed the contract), not what he privately thought.",
          correct: true,
          feedback: "Correct. The objective theory focuses on external manifestations — words, conduct, signed documents. As the casebook states: 'Contract law does not require a meeting of the minds. Courts assess contracts objectively, based on what the parties say and do rather than their subjective intentions.' Bilbo signed. That is what matters."
        },
        {
          text: "Yes — if Bilbo did not truly consent, the contract is void.",
          correct: false,
          feedback: "This is the subjective view, which modern contract law largely rejects. Secret intent is immaterial. As Steinberg v. Chicago Medical School held: 'In the formation of contracts, it was long ago settled that secret intent was immaterial, only overt acts being considered.'"
        },
        {
          text: "It depends on whether the dwarves knew Bilbo was reluctant.",
          correct: false,
          feedback: "The objective test asks what a reasonable person would understand from Bilbo's outward conduct — not what the dwarves actually knew about his inner state. He signed; that is an objective manifestation of assent."
        }
      ]
    },
    {
      type: "dragdrop",
      irac: "Chapter 2: Contract Building Blocks",
      prompt: "The Burglar Agreement is on the table. Drag each element to the correct category — is it a Promise, an Agreement, a Bargain, or something else entirely?",
      tokens: [
        { id: "t1", label: "Bilbo will proceed to the Lonely Mountain" },
        { id: "t2", label: "Thorin will pay one-fourteenth of profits" },
        { id: "t3", label: "Both parties signed the document" },
        { id: "t4", label: "Bilbo privately wishes he hadn't signed" },
        { id: "t5", label: "Bilbo's service exchanged for Thorin's payment" }
      ],
      buckets: [
        { id: "promise", label: "Promise (R2d § 2)" },
        { id: "agreement", label: "Agreement (R2d § 3)" },
        { id: "bargain", label: "Bargain (R2d § 3)" },
        { id: "irrelevant", label: "Legally Irrelevant" }
      ],
      requiredAssignments: {
        "t1": "promise",
        "t2": "promise",
        "t3": "agreement",
        "t4": "irrelevant",
        "t5": "bargain"
      },
      success: "Excellent. Bilbo's commitment to go and Thorin's commitment to pay are each promises (R2d § 2). The signed document is a manifestation of mutual assent — an agreement (R2d § 3). The exchange of service for payment is a bargain. Bilbo's private wishes are irrelevant under the objective standard.",
      failure: "Review the definitions. A promise is a manifestation of intention to act (R2d § 2). An agreement is mutual assent (R2d § 3). A bargain is an exchange of promises or performances. Private thoughts are irrelevant under the objective theory."
    },
    {
      type: "mcq",
      irac: "Chapter 2: Bilateral or Unilateral?",
      prompt: "The Burglar Agreement works like this: Bilbo promises to serve as burglar. Thorin promises to pay one-fourteenth of the profits. What type of contract is this?",
      options: [
        {
          text: "Bilateral — both parties have made promises to each other.",
          correct: true,
          feedback: "Correct. A bilateral contract is an exchange of promise for promise. Both Bilbo and Thorin are bound by their respective promises from the moment of agreement. Neither has to perform first — both are committed."
        },
        {
          text: "Unilateral — Bilbo can only accept by actually going to the mountain.",
          correct: false,
          feedback: "In a unilateral contract, only one party makes a promise, and the other can only accept by performing. Here, both parties have made promises — Bilbo to serve, Thorin to pay. That makes it bilateral."
        },
        {
          text: "Neither — it is a non-bargain contract enforced by equity.",
          correct: false,
          feedback: "The Burglar Agreement is clearly a bargain: Bilbo's service is exchanged for Thorin's payment. Both sides give something of value. This is a classic bargain contract, not a non-bargain equitable enforcement."
        }
      ]
    },
    {
      type: "mcq",
      irac: "Chapter 1: Law vs. Equity",
      prompt: "Suppose Bilbo performs his burglar duties perfectly, but Thorin refuses to pay. What remedy would a court of LAW provide, and what additional remedy might a court of EQUITY offer?",
      options: [
        {
          text: "Law: monetary damages (the value of one-fourteenth share). Equity: specific performance (force Thorin to hand over the gold).",
          correct: true,
          feedback: "Correct. Courts of law provide monetary damages — the standard remedy for breach. Courts of equity provide specific performance when money damages are inadequate (e.g., unique goods like a dragon's hoard). Equitable remedies are exceptional — courts prefer legal remedies first."
        },
        {
          text: "Law: specific performance. Equity: monetary damages.",
          correct: false,
          feedback: "Reversed. Courts of law provide monetary damages. Courts of equity provide specific performance, injunctions, and rescission. The law/equity distinction goes back to the English Court of Common Pleas (law) and Court of Chancery (equity)."
        },
        {
          text: "Both courts would provide the same remedy — the distinction no longer matters.",
          correct: false,
          feedback: "While most American courts have merged law and equity procedures, the distinction in remedies persists. Equitable remedies remain exceptional — courts will only resort to them 'to the extent that justice requires.'"
        }
      ]
    },
    {
      type: "madlibs",
      irac: "Synthesis: The Verdict",
      prompt: "Complete the judicial holding on whether the Burglar Agreement is an enforceable contract:",
      template: "The Burglar Agreement between Bilbo Baggins and Thorin Oakenshield constitutes an enforceable [A]. Bilbo's signature is an objective [B] of his intention to be bound, regardless of his private reluctance. The exchange of burglar services for one-fourteenth of the profits is a [C], supported by adequate [D]. Under the [E] standard, Bilbo's secret wish that he hadn't signed is legally irrelevant.",
      blanks: [
        {
          key: "A",
          options: ["contract", "agreement", "promise"],
          answer: "contract"
        },
        {
          key: "B",
          options: ["manifestation", "feeling", "intention"],
          answer: "manifestation"
        },
        {
          key: "C",
          options: ["bargain", "gift", "promise"],
          answer: "bargain"
        },
        {
          key: "D",
          options: ["consideration", "reliance", "fairness"],
          answer: "consideration"
        },
        {
          key: "E",
          options: ["objective", "subjective", "equitable"],
          answer: "objective"
        }
      ],
      success: "Judgment filed. The Burglar Agreement is an enforceable contract: a promise (R2d § 2) manifested through objective conduct (signature), within an agreement of mutual assent (R2d § 3), structured as a bargain (exchange of service for payment), supported by consideration (each party gives value). Bilbo's private thoughts are irrelevant under the objective standard. The adventure begins.",
      failure: "Review the doctrine. A contract (R2d § 1) requires a promise, mutual assent, and consideration. The objective standard looks at external conduct, not private thoughts. A bargain is an exchange, and consideration is what each party gives up."
    }
  ]
};
