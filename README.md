# IGSCF Website

The official website for the International Graduate Student Christian Fellowship (IGSCF), built with React and Vite.

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 4
- **Routing:** React Router v7
- **Styling:** Tailwind CSS 3 with PostCSS and Autoprefixer
- **Fonts:** Poppins (sans-serif), Playfair Display (serif)

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)
- [Git](https://git-scm.com/)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/<your-org>/IGSCF_website.git
cd IGSCF_website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` by default.

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local development server   |
| `npm run build`   | Build the production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
IGSCF_website/
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS theme and brand colors
├── postcss.config.js           # PostCSS plugins
├── src/
│   ├── main.jsx                # React entry point (renders App)
│   ├── App.jsx                 # Route definitions
│   ├── index.css               # Global styles and Tailwind directives
│   ├── assets/
│   │   ├── icons/              # SVG and icon files
│   │   ├── images/             # Photos and graphics
│   │   └── logos/              # Brand logos
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── social/             # Social media icon components
│   │   └── ui/                 # Reusable UI (Button, Card, SectionTitle)
│   ├── data/
│   │   ├── events.js           # Event listing data
│   │   ├── programs.js         # Program details data
│   │   └── testimonials.js     # Student testimonial data
│   └── pages/
│       ├── Home/               # Landing page
│       │   ├── Home.jsx
│       │   └── sections/       # Hero, Welcome, Programs, Gallery, Testimonials, Connect
│       ├── About/              # About IGSCF
│       │   ├── About.jsx
│       │   └── sections/       # Hero, WhoWeAre, Mission, OurRoots, MeetTeam
│       ├── ForStudents/        # Student resources page
│       │   ├── index.jsx
│       │   ├── icons.jsx
│       │   └── sections/       # EnglishClass, FridayNights, HomeGroups, SpecialEvents, Volunteer
│       └── Donors/             # Donor information page
│           └── Donors.jsx
└── dist/                       # Production build output (git-ignored)
```

## Routes

| Path        | Page         |
| ----------- | ------------ |
| `/`         | Home         |
| `/about`    | About        |
| `/students` | For Students |
| `/donors`   | Donors       |

## Development Guide for Teammates

### First-time setup

1. Make sure Node.js and Git are installed on your machine.
2. Clone the repo and run `npm install` as described above.
3. Run `npm run dev` to verify the site loads in your browser.

### Working on a feature

1. Create a new branch from `master`:

```bash
git checkout -b your-branch-name
```

2. Make your changes. The dev server supports hot module replacement, so your changes will appear in the browser immediately.

3. Commit your work with a clear message:

```bash
git add .
git commit -m "brief description of what you changed"
```

4. Push the branch and open a pull request:

```bash
git push origin your-branch-name
```

### Where to put things

- **New page:** Create a folder under `src/pages/` with a main component and a `sections/` subfolder for its sections. Add a route in `src/App.jsx`.
- **Reusable component:** Place it in `src/components/ui/`.
- **Images or icons:** Add them to the appropriate subfolder under `src/assets/`.
- **Static data:** Add a new file in `src/data/`.

### Brand colors (defined in tailwind.config.js)

| Token          | Value     | Usage              |
| -------------- | --------- | ------------------ |
| `brand-red`    | `#a32638` | Primary accent     |
| `brand-grey`   | `#363d45` | Text and headers   |
| `brand-cream`  | `#FFF7F2` | Background         |
| `brand-light`  | `#F9D9AB` | Secondary accent   |

Use these as Tailwind classes, for example: `text-brand-red`, `bg-brand-cream`.

## License

MIT -- see [LICENSE](./LICENSE) for details.
