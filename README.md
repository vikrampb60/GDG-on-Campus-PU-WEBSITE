<div align="center">

# GDG on Campus — Poornima University

### Build what’s next. Learn together. Create with purpose.

A responsive, Google-inspired frontend website concept for **Google Developer Groups on Campus — Poornima University, Jaipur**. Built with React, Vite, Tailwind CSS, and Framer Motion, with a light visual identity, Google-colour accents, custom campus-inspired artwork, and animated interactions.

[Explore the official GDG community](https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/) · [Poornima University](https://poornima.edu.in/)

</div>

---

## Preview

The website uses a clean white canvas, Google-inspired blue/red/yellow/green accents, Jaipur-inspired Hawa Mahal artwork, Poornima University imagery, and a custom Googlebot-inspired visual. The design aims to feel welcoming, creative, and community-focused while keeping content readable.

### Intro animation

<p align="center">
  <img src="Git%20SS/starting-animation-1.png" alt="Intro animation screen one" width="700" />
</p>
<p align="center">
  <img src="Git%20SS/starting-animation-2.png" alt="Intro animation screen two" width="700" />
</p>


### Home

<p align="center">
  <img src="Git%20SS/home.png" alt="GDG on Campus Poornima University homepage" width="900" />
</p>

### More homepage views

<p align="center">
  <img src="Git%20SS/home-2.png" alt="Homepage community learning section" width="900" />
</p>
<p align="center">
  <img src="Git%20SS/home-3.png" alt="Homepage hero and visual design" width="900" />
</p>

### About

<p align="center">
  <img src="Git%20SS/about.png" alt="About page introduction" width="900" />
</p>
<p align="center">
  <img src="Git%20SS/about-2.png" alt="About page values section" width="900" />
</p>
<p align="center">
  <img src="Git%20SS/about-3.png" alt="About page learning approach timeline" width="900" />
</p>
<p align="center">
  <img src="Git%20SS/about-4.png" alt="About page university section" width="900" />
</p>

### Events

<p align="center">
  <img src="Git%20SS/events.png" alt="Events listing and category filters" width="900" />
</p>
<p align="center">
  <img src="Git%20SS/events-2.png" alt="Events page hero and announcement panel" width="900" />
</p>

### Team, community, and contact

<p align="center">
  <img src="Git%20SS/team.png" alt="Team page" width="900" />
</p>
<p align="center">
  <img src="Git%20SS/community.png" alt="Community learning journey page" width="900" />
</p>
<p align="center">
  <img src="Git%20SS/contact.png" alt="Contact page and demo form" width="900" />
</p>

---

## Pages and features

- **Home** — hero section, animated visual elements, technology areas, community introduction, and calls to action.
- **About** — community values, mission and vision copy, learning approach, and university context.
- **Events** — category filters and event cards, with a reusable event detail route.
- **Team** — organizer profile cards and community roles.
- **Community** — learning journey and interactive technology exploration.
- **Contact** — client-side form validation, FAQ, and official-channel links.
- **Join** — steps for getting involved and a link to the official community page.
- **Not found** — custom fallback page for unknown routes.

Additional interface details:

- Responsive desktop and mobile navigation.
- Framer Motion section reveals and transitions.
- Google-inspired colour accents on a light background.
- Reusable components and data-driven cards.
- Reduced-motion support and accessible form labels.
- Custom favicon and campus/Jaipur-inspired visual assets.

## Tech stack

| Technology | Purpose |
| --- | --- |
| [React](https://react.dev/) | UI components |
| [Vite](https://vite.dev/) | Development server and production build |
| [Tailwind CSS](https://tailwindcss.com/) | Responsive utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Motion and transitions |
| [React Router](https://reactrouter.com/) | Client-side routing |
| [Lucide React](https://lucide.dev/) | Interface icons |

## Run locally

**Requirements:** Node.js and npm.

```bash
# Clone the repository
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd gdg-poornima-white

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open the local URL shown in your terminal (Vite commonly uses `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

The production files are generated in the `dist/` directory.

## Project structure

```text
src/
├── assets/          # Logos, campus imagery, illustrations, and team photos
├── components/      # Navbar, cards, motion helpers, backgrounds, and UI elements
├── data/            # Site configuration, event data, team data, and technologies
├── layouts/         # Shared page layout
├── pages/           # Home, About, Events, Team, Community, Contact, Join, etc.
├── styles/          # Global styles
├── App.jsx          # Routes and app-level intro sequence
└── main.jsx         # React entry point

public/
└── favicon.svg      # Browser favicon

Git SS/              # Project screenshots used in this README
```

## Content and demo notes

- **Events:** The event cards currently contain clearly labelled illustrative examples, not confirmed or scheduled events. Replace them with verified event information before presenting the site as an active event calendar.
- **Contact form:** This is a frontend-only demonstration. It validates fields locally and does not send messages to a server.
- **Team details:** Verify organizer names, roles, and image usage against the official chapter information before publishing.
- **Social links:** Confirm that each configured community/social link is current and official.
- **Images:** Some editorial photographs may load from Unsplash and require an internet connection. Use appropriately licensed local assets for offline use or more predictable production loading.
- **Branding:** This is a community website concept and is not an official Google-owned product. Use GDG and university brand assets only in accordance with applicable guidelines.

## Deployment

This is a static frontend and can be deployed to Vercel or another static hosting provider.

1. Push the project to GitHub.
2. Import the repository into your hosting provider.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Deploy and test direct refreshes on routes such as `/about`, `/events`, and `/community`.

The repository includes a `vercel.json` rewrite for client-side routing on Vercel.

## Official references

- [GDG on Campus — Poornima University, Jaipur](https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/)
- [Poornima University](https://poornima.edu.in/)

---

<div align="center">

Made as a frontend project for the GDG on Campus — Poornima University technical selection task.

</div>
