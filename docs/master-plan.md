# K — Contract Law Companion Site: Master Plan

## Vision

A 28-chapter interactive course companion for *Contract Law: Rules, Cases, and Problems* (2d ed., Oranburg, CAP 2025). Each chapter is an interactive exercise set in Middle-earth, following the story arc of *The Hobbit* (Chapters 1–9) through *The Lord of the Rings* (Chapters 10–28), structured around the Hero's Journey.

Students experience contract law doctrine as a narrative: Bilbo's simple bargains in the Shire escalate through the Fellowship's complex agreements to the remedies that make Middle-earth whole again.

The site must be **beautiful** — cinematic, image-rich, immersive — AND **effective** — doctrinally rigorous, pedagogically sound, with real progress tracking and exportable student work.

---

## Current State (2026-04-04, Session 4)

### Completed
- ✅ Phase 1: Course shell (28-chapter roadmap, progress tracking, shared nav)
- ✅ Phase 2: Shared engine extracted (`engine.js`, `engine.css`), old exercises archived
- ✅ Phase 3: All 7 module activities built and polished (info steps, interaction variety)
- ✅ Phase 4: All 28 chapter exercises built (228 total steps, 186 graded)
- ✅ PDF certificate export system (jsPDF CDN, branded landscape certificates)
- ✅ Quaere LO tags (`data/learning-objectives.json` — L3 indicators for every graded step)
- ✅ Statutory supplement converted to JSON (`data/statutory-supplement.json` — 156 sections)
- ✅ All 60 images deployed, inbox cleared
- ✅ GitHub Pages deployment: deploy from branch (main, root)
- ✅ Chapter toggle display fixed on landing page

### Data Files
| File | Contents |
|------|----------|
| `data/contract-law.json` | 28 chapters indexed with doctrine, rules, cases |
| `data/middle-earth.json` | Narrative structure and story beats |
| `data/learning-objectives.json` | Quaere LO tags (L3 indicators, cognitive process, knowledge dimension) |
| `data/statutory-supplement.json` | 156 R2d/UCC sections from casebook supplement |

### Next Steps
1. LO-driven video/podcast integration (map 119 videos + 25 podcasts to chapters/LOs)
2. Wire statutory-supplement.json into Tome sidebar for live lookup
3. Re-enable Quaere links when Quaere goes live
4. Accessibility (keyboard drag-drop, ARIA)
5. Progress dashboard on landing page

### Assets Inventory

**47 images total:**
- 28 chapter images (one per chapter)
- 2 supplemental (hero-banner, there-and-back-again divider)
- 15 alternates (bag-end-hearth, gandalf-mark, contract-closeup, rivendell-library, eagle-rescue, smaug-conversation, barrel-escape, laketown-welcome, ring-closeup, frodo-leaving-shire, weathertop-fire, moria-bridge, lorien-gifts, helms-deep-breach, ents-isengard, mount-doom-edge)
- 2 legacy inbox items (mod4b-image, mod7-image)

---

## Story Arc

### The Hero's Journey × Contract Law

| Journey Stage | Module | Chapters | Story Arc | Image |
|---|---|---|---|---|
| Ordinary World | 1: Foundations | 1–2 | Bag End — peaceful Shire → Burglar Agreement | K-shire-morning |
| Call to Adventure | 2: Mutual Assent | 3–6 | Unexpected party → trolls → riddles → Mirkwood | K-unexpected-party |
| Tests & Allies | 3: Consideration | 7–9 | Lonely Mountain → Arkenstone → Five Armies | K-lonely-mountain-hoard |
| Crossing the Threshold | 4: Defenses | 10–13 | Isengard → Elrond → Golden Hall → palantír | K-council-of-elrond |
| Inmost Cave | 5: Interpretation | 14–18 | Moria → Lothlórien → Fellowship breaks → Rohan | K-doors-of-moria |
| The Ordeal | 6: Performance | 19–23 | Helm's Deep → Osgiliath → Shelob → Black Gate | K-helms-deep-dawn |
| Return with Elixir | 7: Remedies | 24–28 | Mount Doom → coronation → Scouring → Grey Havens | K-mount-doom |

### Chapter-by-Chapter Story Beats

| Ch | Title | Story Beat | Exercise Theme | Image |
|----|-------|-----------|----------------|-------|
| 1 | What Is Contract Law? | Bag End — ordinary world | The Shire Archives | K-shire-morning |
| 2 | What Is a Contract? | The Burglar Agreement | Bilbo's Agreement | K-burglary-agreement |
| 3 | Bargains | Thorin's handshake | The Unexpected Party | K-unexpected-party |
| 4 | Offers | Trolls — shifting proposals | Troll Campfire | K-troll-campfire |
| 5 | Termination of the Offer | Riddles in the Dark | The Riddle Game | K-riddles-in-the-dark |
| 6 | Acceptance | Mirkwood merchants | Mirkwood Merchants | K-mirkwood-merchants |
| 7 | Consideration | Lonely Mountain hoard | The Dragon's Hoard | K-lonely-mountain-hoard |
| 8 | Promissory Estoppel | Arkenstone crisis | The Arkenstone | K-arkenstone-betrayal |
| 9 | Promissory Restitution | Battle of Five Armies | Thorin's Last Gift | K-battle-of-five-armies |
| 10 | Statute of Frauds | Isengard forgery | Saruman's Desk | K-isengard-forgery |
| 11 | Mistake | Council of Elrond | The Council's Dilemma | K-council-of-elrond |
| 12 | Improper Bargaining | Golden Hall | Wormtongue's Counsel | K-golden-hall-wormtongue |
| 13 | Incapacity | Pippin's palantír | The Palantír Oath | K-pippin-palantir |
| 14 | Ambiguity | Doors of Moria | The Doors of Durin | K-doors-of-moria |
| 15 | Intrinsic Evidence | Balin's tomb | The Book of Records | K-balin-tomb |
| 16 | Extrinsic Evidence | Galadriel's Mirror | Galadriel's Mirror | K-galadriel-mirror |
| 17 | Parol Evidence Rule | Breaking of Fellowship | The Breaking | K-breaking-of-fellowship |
| 18 | Warranties | Rohan smithy | The Rohirrim Smithy | K-rohan-smithy |
| 19 | Conditions | Helm's Deep dawn | Dawn at Helm's Deep | K-helms-deep-dawn |
| 20 | Performance & Breach | Faramir at Osgiliath | Faramir's Choice | K-faramir-osgiliath |
| 21 | Repudiation | Shelob's Lair | The Treachery | K-shelob-lair |
| 22 | Excuse | Denethor's madness | The Steward's Despair | K-denethor-madness |
| 23 | Modification | Black Gate plan | The Last Debate | K-black-gate-plan |
| 24 | Money Damages | Mount Doom | The Crack of Doom | K-mount-doom |
| 25 | Defective Performance | Coronation repairs | The King's Repair | K-coronation-repairs |
| 26 | Limits on Damages | Scouring of the Shire | The Three Dams | K-scouring-of-shire |
| 27 | Alternative Remedies | Grey Havens | The Last Ship | K-grey-havens |
| 28 | Third-Party Beneficiaries | The Red Book | The Red Book | K-red-book |

---

## Technical Architecture

```
K/
├── index.html                         ← landing page (cinematic, image-rich)
├── assets/
│   ├── css/
│   │   ├── oranburg-style.css         ← design tokens + roadmap + landing
│   │   └── engine.css                 ← exercise styles
│   ├── js/
│   │   ├── engine.js                  ← shared exercise engine
│   │   ├── progress.js                ← localStorage progress for roadmap
│   │   ├── progress-sync.js           ← Quaere API sync
│   │   ├── nav.js                     ← shared navigation
│   │   └── theme.js                   ← dark/light toggle
│   └── images/                        ← ALL chapter/supplemental images
├── exercises/
│   ├── _template/                     ← exercise scaffold
│   ├── mod-{N}-{slug}/               ← 7 module activities
│   └── {chapter-slug}/               ← 28 chapter exercises
├── data/
│   ├── contract-law.json             ← portable knowledge base
│   └── middle-earth.json             ← story structure
├── tome/                              ← R2d + UCC reference (future)
├── archive/                           ← mothballed old exercises
├── manuscript/                        ← source texts
└── docs/
    ├── master-plan.md                 ← this file
    └── image-prompts.md               ← 43 image prompts
```

---

## Execution Sequence

The following steps can be executed autonomously with "continue building K":

### Step 1: Organize Images
- [ ] Move all 37 images from `inbox/` to `assets/images/`
- [ ] Remove duplicate `K-image01-burglary-agreement.png` (keep `k-burglary-agreement.png`)
- [ ] Remove legacy `mod4b-image.png` and `mod7-image.png` from inbox
- [ ] Update image catalog in this document
- [ ] Commit and push

### Step 2: Redesign Landing Page
- [ ] Full-bleed hero with `K-hero-banner.png` background
- [ ] Each module as a visual card with chapter image background
- [ ] Module activity buttons overlaying images
- [ ] Story arc visual progression (green Shire → dark Mordor → golden resolution)
- [ ] Responsive, accessible, text-sm minimum
- [ ] Commit and push

### Step 3: Process Textbook (Ch 3-28 → contract-law.json)
- [ ] Read each chapter from manuscript
- [ ] Extract: sections, rules, cases, R2d/UCC provisions, problems, key quotations
- [ ] Index into `data/contract-law.json`
- [ ] Commit after each module's worth of chapters

### Step 4: Build Module Activities 3-7
For each module (3 through 7):
- [ ] Read all textbook chapters in the module (from contract-law.json if indexed, else manuscript)
- [ ] Read teacher manual for learning objectives
- [ ] Design multi-scenario narrative integrating all doctrines
- [ ] Build 8-12 graded steps mixing step types
- [ ] Include chapter image as hero banner
- [ ] Include cross-doctrine synthesis
- [ ] Add module activity link to roadmap
- [ ] Commit and push after each module

Modules to build:
- [ ] Module 3: The Dragon's Price (Ch 7-9)
- [ ] Module 4: Shadows Over Middle-earth (Ch 10-13)
- [ ] Module 5: The Words Beneath the Words (Ch 14-18)
- [ ] Module 6: The War of the Ring (Ch 19-23)
- [ ] Module 7: The Return of the King (Ch 24-28)

### Step 5: Polish Modules 1-2
- [ ] Add proper chapter images to Module 1 and 2 exercises
- [ ] Ensure visual consistency with redesigned landing page
- [ ] Verify all step types render correctly

### Step 6: Student Export System
- [ ] Build export function: generate PDF/Word proof of completion
- [ ] Include: student name/email, exercise title, score, date, key answers
- [ ] Add "Download Certificate" button to summary screen in engine.js
- [ ] Ensure KSync tracks all completions for professor dashboard

### Step 7: Build 28 Chapter-Level Exercises
For each chapter (1-28):
- [ ] Read textbook chapter (from contract-law.json)
- [ ] Doctrine primer before activity
- [ ] 4-6 graded steps
- [ ] Chapter image as hero banner
- [ ] KSync.complete() call
- [ ] Prev/next navigation
- [ ] Update roadmap links
- [ ] Commit after each module's worth of chapters

### Step 8: Integration Sweep
- [ ] Verify all 35 exercises load and complete without errors
- [ ] Verify progress tracking: complete exercise → roadmap shows gold dot
- [ ] Verify KSync posts to Quaere for all exercises
- [ ] Verify prev/next navigation chains correctly
- [ ] Verify dark/light mode works on all pages
- [ ] Test on mobile (responsive check)

### Step 9: Visual Polish
- [ ] Consistent image treatment across all exercises
- [ ] Consistent typography (no text-xs anywhere readable)
- [ ] Landing page final review
- [ ] Exercise summary screens polished
- [ ] Loading states and empty states handled

### Step 10: Asset Review
- [ ] Check if any chapters need better images
- [ ] Check if any exercises need additional artifacts or steps
- [ ] Report to professor what's needed
- [ ] Process any new inbox items professor provides

---

## Design Principles

1. **Beautiful AND effective** — cinematic images, rigorous doctrine
2. **Teach, then quiz** — doctrine primers before every exercise
3. **Story-driven** — Hobbit→LOTR arc gives narrative momentum
4. **Legibility first** — text-sm (14px) minimum, text-base (16px) body, text-lg (18px) legal text
5. **Static HTML** — no build step, no framework, vanilla JS
6. **One engine** — shared rendering logic, per-exercise data files
7. **Progressive** — visual journey map with progress tracking
8. **Cohesive** — same design tokens, navigation, and Middle-earth theme throughout

---

## Content Sources

| File | Contents | Size |
|------|---------|------|
| `manuscript/Contract Law 2d Ed.md` | Full 28-chapter casebook with 50+ cases | 2.2 MB |
| `manuscript/Oranburg's Contract Law 2d Ed Teachers Manual.md` | IRAC solutions, learning objectives, discussion Qs | 1.2 MB |
| `manuscript/R2d and UCC Provisions for Contracts - Statutory Supplement.md` | Verbatim R2d (~80+ sections) + UCC Article 2 | 966 KB |
| `manuscript/course-notes.yml` | Course metadata, module structure | 4.1 KB |

## External Integrations

| System | Purpose | Config |
|--------|---------|--------|
| Quaere | 676 MC questions, LTI for Canvas/Brightspace | Course code: `K-CONTRACTS` |
| Quaere API | Progress tracking (ActivityProgress) | `progress-sync.js` → POST |
| GitHub Pages | Hosting (static, deploy from branch) | Main branch, root |

---

## Lessons Learned from BA

### Repeat
- Read textbook BEFORE building activities
- Doctrine primers before every exercise
- Required synthesis notes (min 20 chars) to complete
- Scoring with doctrinal explanations
- Color-coded progress on roadmap
- Breadcrumb navigation on every page
- Commit frequently, push often
- Make it beautiful — images as hero banners, cohesive visual theme

### Avoid
- Don't audit by running lint — click every button
- Don't use text-xs for readable content
- Don't map unbuilt chapters to home with no context
- Don't show progress percentages (professor prefers qualitative)
- Don't leave chapters as "planned" when they could be built
- Don't add annotation features (clutter)
- Don't make a plain text landing page when beautiful images exist
