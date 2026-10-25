# AIZenera — Website

Multi-page website for AIZenera, a digital solutions and IT consulting agency.

Built with React, TypeScript, Tailwind CSS, React Router and lucide-react icons.

## Run locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build in /dist
```

## Where to edit content

- `src/config/site.ts` — brand name, email, phone, location, social links, budget and timeline options
- `src/data/services.ts` — services and service detail pages
- `src/data/industries.ts` — industries
- `src/data/projects.ts` — portfolio projects (screenshots in `public/images/work`)
- `public/images` — hero, about, founder and industry images

## Contact form

Inquiries are sent to the email in `site.ts` through [FormSubmit](https://formsubmit.co).
The first submission sends a one-time activation email to that inbox — click **Activate** once.
To use another service, set `VITE_FORM_ENDPOINT` in a `.env` file (it must accept a JSON POST).

## Deploying

This is a single-page app. When hosting, route all paths to `index.html`
(e.g. a `_redirects` file on Netlify or a rewrite rule on Vercel).
