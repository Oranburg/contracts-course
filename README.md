# Contract Law — Course Companion Site

Companion website for *Contract Law: Rules, Cases, and Problems* (2d ed., Carolina Academic Press 2025) by Seth C. Oranburg.

## Resources

| Resource | Details |
|---|---|
| **Casebook** | [Contract Law 2d](https://cap-press.com/books/isbn/9781531033804/Contract-Law-Second-Edition) |
| **Podcast** | Organized: The Business Law Breakdown, Season 1 (25 episodes) |
| **Assessment** | [Quaere](https://quaere-1cgr.onrender.com) — 676 questions across 28 chapters |
| **Video Lectures** | 119 videos across 6 YouTube playlists |
| **Statutory Supplement** | R2d and UCC selected provisions |

## Interactive Exercises

| Exercise | Module | Description |
|---|---|---|
| **Bilbo's Burglar Agreement** — Anatomy of a Contract | 1–7 (Full) | Interactive contract with teaching notes, module color coding, learning objectives |
| **Whose Arkenstone?** — Breach & Remedies | 7 (Remedies) | Live classroom simulation with role rooms, negotiation timer, settlement term sheet |
| **Merchant Road** — Battle of the Forms | 2 (Acceptance) | UCC 2-207 learning game — 5 scenarios, 15 questions, mastery tracking |

## Oranburg Style

This site uses the shared Oranburg Style system:
- `assets/css/oranburg-style.css` — design tokens, base styles, nav, footer, theme toggle
- `assets/js/theme.js` — dark/light mode toggle with localStorage persistence

## Structure

```
contracts-course/
├── assets/
│   ├── css/
│   │   └── oranburg-style.css    # Shared foundation
│   └── js/
│       └── theme.js              # Theme toggle
├── exercises/
│   ├── battle-of-forms/          # UCC 2-207 learning game
│   ├── bilbo-contract/           # Interactive contract analysis
│   └── lonely-mountain-dispute/  # Remedies simulation
├── manuscript/                   # Source texts (not served)
├── index.html                    # Home page
└── README.md
```

## Development

Static HTML/CSS/JS. Deploy via GitHub Pages. Dark mode default.
