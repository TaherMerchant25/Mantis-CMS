# Mantis landing CMS runbook

This Strapi project (`mantis-landing-cms`) stores content for the Astro site in `Mantis-Public-2025-Deployment`. The site reads the REST API at build time (and falls back to built-in copy if `STRAPI_URL` is unset).

## Local development

1. Copy `.env.example` to `.env` and set secrets (`APP_KEYS`, JWT secrets, etc.) as for any Strapi 5 app.
2. Use Node 20 LTS (`nvm use 20`).
3. From this directory: `npm install` then `npm run develop`.
4. Open the admin UI at `http://localhost:1337/admin`, create the first admin user, and sign in.

## Bootstrap behavior

On every Strapi start, `src/index.ts`:

- Ensures the **Public** role can **read** published `landing-page`, `navigation`, and `site-setting` entries (permissions are **added**; existing Public permissions are not removed).
- Ensures **Editor** and **Admin** roles exist under Users & Permissions with types `landing_editor` and `landing_admin` (display names: Editor / Admin). Editors can update content and upload media; Admins additionally have create/delete on those types and upload destroy. If you previously used custom role types named `editor` or `admin`, migrate Users & Permissions users to the new roles manually.
- Runs a **one-time seed** (see `src/bootstrap/landing-seed.ts`) if the three single types have no draft or published document yet. Content mirrors the previous hardcoded landing page.

## Editorial workflow

1. Edit **Landing Page**, **Navigation**, or **Site Setting** in the Content Manager.
2. Use **Publish** so anonymous API consumers (and the Astro build) see the changes.
3. Rebuild or redeploy the Astro site so `getLandingCmsPayload()` runs again with the new data.

## CMS users (Editors / Admins)

Strapi has two user systems:

- **Admin panel users** (Settings → Users): full product access; use for developers.
- **Users & Permissions** users (Content Manager → Users): use for editors.

To give someone CMS-only access:

1. Create a user under **Users & Permissions** (not the Strapi admin invite flow unless you intend panel access).
2. Assign role **Editor** or **Admin** (`landing_editor` / `landing_admin`).

Editors cannot delete landing types or destroy uploads; Admins can.

## Astro environment

In `Mantis-Public-2025-Deployment/.env`:

- `STRAPI_URL` — Strapi origin without a trailing slash, e.g. `http://localhost:1337` or your production CMS URL.
- `STRAPI_API_TOKEN` or `STRAPI_TOKEN` — optional read token if the Public role is locked down; must allow `find` on the three content types.

Without `STRAPI_URL`, the frontend uses offline fallback content and still builds.

## Production checklist

- [ ] Strapi served over HTTPS with correct CORS if the admin runs on another origin.
- [ ] Strong secrets in `.env`, not committed.
- [ ] Optional read-only API token on the static build pipeline.
- [ ] Astro `site` in `astro.config.mjs` set to the real public URL for canonical and OG fallbacks.
- [ ] After content changes: publish in Strapi, then rebuild the static site.
