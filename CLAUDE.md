# IGSCF Website – Development Guidelines

This document explains how AI tools and developers should structure and implement UI for the IGSCF website.

The goal is to keep the codebase **clean, modular, and easy for future student developers to maintain**.

---

## Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Language:** JavaScript (`.jsx`)

---

## Project Architecture

Follow this directory structure strictly.

```
src/
  assets/
    images/
    icons/
    logos/

  components/
    layout/
      Navbar.jsx
      Footer.jsx
    ui/
      Button.jsx
      Card.jsx
      SectionTitle.jsx
    social/
      SocialIcons.jsx

  pages/
    Home/
      Home.jsx
      sections/
        Hero.jsx
        Welcome.jsx
        Programs.jsx
        Gallery.jsx
        Connect.jsx
        Testimonials.jsx

    ForStudents/
      index.jsx
      sections/
        FridayNights.jsx
        SpecialEvents.jsx
        HomeGroups.jsx
        EnglishClass.jsx
        Volunteer.jsx

    About/
      About.jsx

    Donors/
      Donors.jsx

  data/
    testimonials.js
    events.js
    programs.js

  App.jsx
  main.jsx
  index.css
```

---

## Page Composition Rules

Each page should be built from **section components**.

Example (`Home.jsx`):

```jsx
<Navbar />
<Hero />
<Welcome />
<Programs />
<Gallery />
<Connect />
<Testimonials />
<Footer />
```

Do NOT place large JSX blocks directly inside page files.

Each section must live in:

```
pages/PageName/sections/
```

---

## Component Guidelines

Use components for UI elements reused across **multiple pages**.

Examples:

- Button
- Card
- SectionTitle
- Navbar
- Footer

Reusable components go in:

```
components/ui/
```

Layout components go in:

```
components/layout/
```

---

## Content Data

Text content that may change frequently should NOT be hardcoded inside components.

Instead store it in:

```
src/data/
```

Examples:

- `testimonials.js`
- `events.js`
- `programs.js`

Components should import data and map through it.

---

## Styling Rules

- Use Tailwind CSS classes directly in JSX
- Avoid large external CSS files unless necessary
- Use mobile-first responsive design

Example:

```jsx
className="px-6 py-3 bg-orange-500 text-white rounded-lg"
```

---

## Screenshot Self-Correction Loop

When recreating UI from screenshots, run a visual verification loop.

### Step 1 — Run the app

```
npm run dev
```

### Step 2 — Take screenshot

```
npx puppeteer screenshot http://localhost:5173 --fullPage
```

If the page has major sections (hero, programs, gallery, etc.), capture screenshots of those sections as well.

### Step 3 — Compare with reference

Check for:

- Spacing and padding
- Font sizes and weights
- Colors (exact hex values)
- Alignment
- Grid or flex layouts
- Border radius
- Shadows
- Section heights
- Responsive layout

Be extremely specific when identifying issues.

Examples:

- "Hero heading is ~40px but reference is closer to 32px"
- "Gap between cards should be 24px but is 16px"
- "Button border radius looks 6px instead of 8px"

### Step 4 — Fix the code

Update the React components and Tailwind classes to fix every issue.

Examples:

- Adjust spacing: `gap-4` → `gap-6`
- Adjust font size: `text-3xl` → `text-2xl`
- Fix alignment: `items-start` → `items-center`
- Fix width/height: `w-full` → `max-w-5xl`

### Step 5 — Re-screenshot and repeat

Take another screenshot and compare again.

At least **2 full comparison rounds are required**.

Continue until visual differences are minimal and the layout matches the reference within ~2–3px.

Do NOT stop after the first implementation.

---

## Placeholder Assets

If images are not provided use:

```
https://placehold.co/
```

Example:

```jsx
<img src="https://placehold.co/600x400" />
```

---

## Important Rules

- Do NOT redesign the UI — match the provided reference
- Do NOT merge sections into a single component
- Follow the folder structure exactly
- Each page section must be its own component
- Keep components simple and readable
- Use provided CSS classes verbatim when given

---

## Goal

Create a maintainable React codebase that future student developers can easily understand and extend, while matching design references **pixel-accurately** using a **screenshot feedback loop for self-correction**.