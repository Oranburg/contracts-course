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

## Oranburg Style

This site uses the shared Oranburg Style system:
- `assets/css/oranburg-style.css` — design tokens, base styles, nav, footer, theme toggle
- `assets/js/theme.js` — dark/light mode toggle with localStorage persistence

## Structure

```
contracts-course/
├── assets/
│   ├── css/
│   │   ├── oranburg-style.css    # Shared foundation
│   │   └── site.css              # Course-specific styles
│   └── js/
│       └── theme.js              # Theme toggle
├── manuscript/
│   ├── Contract Law 2d Ed.md     # Full casebook text
│   ├── course-notes.yml          # Structured notes for site building
│   ├── Oranburg's Contract Law 2d Ed Teachers Manual.md
│   └── R2d and UCC Provisions for Contracts - Statutory Supplement.md
├── index.html                    # Home page (to build)
└── README.md
```

## Development

Static HTML/CSS/JS. Deploy via GitHub Pages. Dark mode default.
