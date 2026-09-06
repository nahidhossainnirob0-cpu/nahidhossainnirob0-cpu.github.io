# Setup & Deployment Guide

This is a React + TypeScript + Tailwind CSS (v4) portfolio, built with Vite.
Everything below uses **free-tier tools only**.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## 2. Make the contact form actually send emails (free)

The form uses **Web3Forms** — a free service that emails form submissions to
you with no backend/server code needed, and no secret key exposed in a way
that matters (the "access key" is a public site key by design, like a
reCAPTCHA site key — it only lets people email *your* configured inbox, it
can't be used to read your email or do anything else).

1. Go to https://web3forms.com
2. Enter `nahidhossainnirob0@gmail.com` and get your free **Access Key** (sent
   instantly to that inbox, no account required).
3. Create a file named `.env` in the project root (a template is already
   provided as `.env.example`) and paste your key:

   ```
   VITE_WEB3FORMS_KEY=your-access-key-here
   ```
4. Restart `npm run dev`. Submit the form once to confirm the email arrives
   at `nahidhossainnirob0@gmail.com`.

Free tier covers 250 submissions/month, which is enough for a portfolio site.
If you outgrow it, Web3Forms and similar services (Formspree, EmailJS) all
have paid tiers — that would be the one paid dependency if this ever needs it.

## 3. Double-check your phone/WhatsApp number

The brief listed `+880192153969` for both WhatsApp and phone. Bangladeshi
mobile numbers are usually 13 digits after the `+880` country code
(`+8801XXXXXXXXX`) — this number looks one digit short, so please confirm the
full number and update it in these two places before deploying:

- `src/components/Contact.tsx` → `PHONE_NUMBER`
- `src/components/Footer.tsx` → the three contact links at the bottom

## 4. Add your real photo (optional)

The About section currently uses a placeholder icon instead of a photo (no
photo was provided). To add your photo:

1. Drop an image file into `public/`, e.g. `public/profile.jpg`.
2. In `src/components/About.tsx`, replace the placeholder `<svg>` block with:
   ```tsx
   <img src="/profile.jpg" alt="Nahid Hossain Nirob" className="w-full h-full object-cover" />
   ```

Project cards intentionally use generated workflow diagrams instead of stock
photos or fake screenshots — this matches the automation subject matter and
avoids inventing fake project screenshots.

## 5. Deploy for free

**Recommended: Vercel** (or Netlify — both work the same way, static site, no backend)

1. Push this project to a GitHub repository (see step 6 below).
2. Go to https://vercel.com → "Add New Project" → import your GitHub repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Add an Environment Variable: `VITE_WEB3FORMS_KEY` = your Web3Forms key.
5. Deploy. Vercel gives you a free public URL (e.g. `your-project.vercel.app`).

Netlify works identically: build command `npm run build`, publish directory `dist`,
same environment variable added under Site settings → Environment variables.

## 6. Push the code to your GitHub account

From inside this project folder:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repo on GitHub first, then run the commands above.)

## Project structure

```
src/
  components/       All page sections (Navbar, Hero, About, Services, ...)
  data/content.ts   Services & projects content — edit text here
  types.ts          Shared TypeScript types
  App.tsx           Assembles all sections
public/             Static assets (favicon, and your photo if you add one)
```

To edit copy (services, project descriptions, etc.), edit `src/data/content.ts` —
you won't need to touch component files for text changes.
