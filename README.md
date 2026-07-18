# CodeTrack - Julius Gabriel Adebowale

CodeTrack is a static landing page project for a coding habit tracker product. The current build focuses on a clean marketing homepage with a strong design system, responsive layout work, and polished feature-card interactions.

## Overview

The homepage is built with plain HTML and CSS. It introduces the product, highlights social proof and core features, and uses a lightweight responsive layout that adapts across desktop, tablet, and mobile screens.

## What's Included

- Hero section with primary call-to-action
- Community stats section
- Features grid with hover lift effect
- Static mobile menu icon styling
- Design system notes for colors, type, spacing, and components

## Tech Stack

- HTML5
- CSS3
- [Boxicons](https://boxicons.com/) via CDN for the menu icon

## Project Structure

```text
.
├── index.html
├── style.css
├── app.js
├── images/
├── notes/
│   ├── designsystem.md
│   └── note.md
└── README.md
```

## Getting Started

Since this is a static project, you can run it with any simple local server.

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Use VS Code Live Server

If you use VS Code, open the project folder and launch `index.html` with the Live Server extension.

### Option 3: Use Python

If Python is installed:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Design Notes

The visual direction for the project is documented in [notes/designsystem.md](/Users/macbookpro/Documents/GitHub/codetrack/notes/designsystem.md). It covers:

- brand colors
- typography
- spacing scale
- radius and elevation
- component usage patterns

## Current Focus

The current implementation is centered on the homepage experience, especially:

- refined `stats` section styling
- feature card layout and hover states
- responsive behavior for header, hero, stats, and features

## Next Ideas

- complete styling for the remaining homepage sections
- add real navigation behavior for the mobile menu
- connect CTAs to real product flows
- introduce JavaScript interactions where needed

## License

This project currently has no license specified.
