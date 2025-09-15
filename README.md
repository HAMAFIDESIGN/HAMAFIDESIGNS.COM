# HAMAFI DESIGNS — Option 2 (GitHub + Browser Editing)

**Edit everything in /data/*.js** — no coding build or installs required.
Open the repo in GitHub (or StackBlitz) → edit text/images → commit → deploy.

## Folder structure
- `index.html` — the site (Tailwind CDN, no build step)
- `/data/settings.js` — company, hero text, contact, intro paragraph
- `/data/clients.js` — client names
- `/data/services.js` — service cards
- `/data/process.js` — steps 01–04
- `/data/projects.js` — project cards with image paths
- `/assets/` — put your JPG/PNG images here (match paths used in projects)

## How to preview (quickest)
Just open `index.html` in your browser.
If you push to GitHub, you can also use StackBlitz to live preview the repo.

## How to go live (Netlify / Vercel / Cloudflare Pages)
1. Create a new project and upload the folder contents.
2. Ensure your images are in `/assets/` and paths match in `projects.js`.
3. Connect your domain `hamafidesigns.com`:
   - Vercel: `www` CNAME → `cname.vercel-dns.com` (apex per Vercel docs)
   - Netlify: `www` CNAME → your-site.netlify.app (apex via Netlify DNS or ALIAS)
   - Cloudflare Pages: `www` CNAME → your-project.pages.dev
4. Enable HTTPS (auto on these hosts).

## Editing tips
- To add a new project, just append to the array in `/data/projects.js`.
- To change copy, edit `/data/settings.js` → `heroText` / `servicesIntro`.
- To add Arabic later, duplicate the data files as `/data/ar/*.js` and swap imports in `scripts/main.js`.
