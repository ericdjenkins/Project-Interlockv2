# Project Interlock Version 4 for Hostinger

This deployment branch preserves the six pages, CSS, and imagery from saved
Sites Version 4, source commit `5b68e4d18c321074ae8720862bed1504859a8ad5`.
It replaces the Vinext/Cloudflare runtime with a standard Next.js Node server.
Fonts are bundled locally so builds do not fetch Google Fonts.

## Hostinger deployment settings

Connect `ericdjenkins/Project-Interlockv2`, branch **hostinger-version-4**,
using Hostinger's Node.js Web App GitHub import. Use these settings:

| Setting | Value |
| --- | --- |
| Domain | projectinterlock.org |
| Framework | Next.js |
| Node.js | 22.x |
| Root directory | Repository root |
| Package manager | npm |
| Install command | npm ci |
| Build command | npm run build |
| Output directory | .next |
| Start command | npm start |

The start command binds to 0.0.0.0 and honors the PORT supplied by hosting.
A Business/Cloud plan with Node.js Web App support is required. Hostinger must
be connected to this specific branch before pushes can deploy it. The GitHub
workflow only checks the build and production routes; it does not upload by FTP
or change hosting or DNS settings. Validate a temporary Hostinger preview before
routing the production domain. Do not merge this historical version into the
current website's main branch.

## What Version 4 includes

- Home, Why, About, Programs, Pathways, and Get involved pages.
- Original Version 4 wording and images, including the representation journey.
- Contact and interest links using `mailto:info@projectinterlock.org`.

This historical version predates later pilot, audience, and partnership updates.
It does not contain the newer interest database or admin dashboard. Its interest
links open the visitor's email app; they do not save submissions to a database.
No database credentials or runtime secrets are required by these six pages.
Confirm that the published contact mailbox exists before launch.

## Local verification

Use Node 22 or 24, then run `npm ci` and `npm test`.
The test builds the production app, starts the actual Node server, and checks all
six routes, the Why-page images, linked local assets, contact links, and 404s.
For development use `npm run dev`; for production use `npm run build` then
`npm start`. No Cloudflare Workers, D1, Sites authentication, or FTP is required.

This branch is independent from the live Sites application. Its original
`.openai/hosting.json` is intentionally omitted so it cannot accidentally
publish over the current Sites project.
