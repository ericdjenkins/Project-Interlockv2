# Project Interlock Program and Website Overview

Last editorial review: November 17, 2026  
Maintainer: Eric Jenkins  
Website source branch: `hostinger-version-4`  
Intended production domain: `projectinterlock.org`

## Purpose and mission

Project Interlock is a nonprofit initiative being developed to make STEM
education and careers more accessible to Black and Latino students across the
diaspora. It connects learning, educational support, mentoring, work experience,
and career opportunities into a coordinated pathway. AI preparedness is a core
part of the mission: students should gain the skills, confidence, and networks
to help shape technology as well as use it.

The intended Boston-area pilot is in the design phase, with a projected 2027
launch and an initial focus within approximately 20 miles of Boston. Current
priorities are partner recruitment, pathway design, funding development, and
first-cohort planning. A projected launch is not a commitment that enrollment,
scholarship awards, internships, or job placements are currently available.
This document does not assert completed incorporation or tax-exempt status.

## Program model

The current planning framework is **Learn / Support / Mentor / Experience /
Launch**. These elements are intended to work together rather than function as
disconnected services.

| Element | Intended role |
| --- | --- |
| Learn | Build STEM and AI literacy through hands-on learning, coding, robotics, data, and project experiences. |
| Support | Help students persist and complete their pathway through educational guidance, scholarship access, and completion support. |
| Mentor | Connect students with professionals and educators for sustained guidance, role models, goal setting, and feedback. |
| Experience | Develop workplace readiness, practical skills, portfolios, and networks through employer-connected experiences and internships. |
| Launch | Support transfer and career transitions through preparation, employer connections, and access to further education and employment opportunities. |

Detailed eligibility, cohort size, delivery schedules, funding amounts, and
partner responsibilities remain to be finalized. The program aims to improve
access and outcomes; it does not guarantee a scholarship, internship, or job.

## Guiding principle: Reciprocity and Community

**Reach Forward. Reach Back.**

We believe individual success can create opportunity for others. As Project Interlock participants advance in their education and careers, we encourage them to reach back into their communities—sharing knowledge, offering mentorship, opening doors, and supporting the next generation of Black and Latino students across the diaspora pursuing STEM pathways.

Contributions can grow with each person’s experience and capacity, from encouraging a peer to mentoring a student or making an introduction. Receiving support does not depend on giving back.

For the planned 2027 pilot, we are designing opportunities for peer support and knowledge sharing. As participants progress, we plan to invite them back as mentors, speakers, and connections to education and career opportunities.

The website introduces the principle on Home, explains it on About at
`/about#reach-back`, connects it to Programs and Pathways, and invites mentor
interest on Get involved. These are values and planned opportunities, not
claims of current alumni activities.

## Community and partners

Students and families are the primary community served. Educators, mentors,
colleges, employers, funders, and community organizations contribute learning
opportunities, guidance, financial resources, work experience, and connections.

The program's stated partnership relationships are:

| Organization | Planning relationship |
| --- | --- |
| Middlesex Community College | Established partner |
| UMass Lowell | Established partner |
| North Shore Community College | Recruiting partner |

These relationships do not by themselves define a funded delivery agreement,
guaranteed placement, or specific institutional commitment. Add approved scope,
contacts, and responsibilities when established. The Version 4 website does not
yet present these newer partnership details.

## Website scope and version history

This branch is a Hostinger-compatible adaptation of saved **Version 4**, whose
original source commit is `5b68e4d18c321074ae8720862bed1504859a8ad5`.
The six page components, original page CSS, and imagery were retained during
the November 14, 2026 migration. The hosting runtime changed from
Vinext/Cloudflare Workers to a standard Next.js Node.js server; fonts are bundled
locally and development-preview metadata was removed.

The public Sites project has newer versions, including Version 17. Those later
changes are not automatically part of this branch. A code push, a saved Sites
version, and a live Hostinger deployment are separate events.

### Pages and visitor journeys

| Page | Route | Purpose and behavior in Version 4 |
| --- | --- | --- |
| Home | `/` | Introduces the mission, five original program areas, student journey, and ways to get involved. |
| Why | `/why` | Explains representation in STEM and AI; includes workforce statistics, research links, and student-to-career imagery. |
| About | `/about` | Describes the rationale, vision, and values of access, belonging, connection, agency, and reciprocity and community. |
| Programs | `/programs` | Presents AI and STEM Education, Scholarship Access, Mentorship, Internships, and Career Launch. |
| Pathways | `/pathways` | Describes the historical Discover / Build / Connect / Launch journey. |
| Get involved | `/get-involved` | Offers student/family, professional, organization, and supporter contact links. |

Navigation provides desktop links and a mobile menu. The site uses navy, blue,
and gold branding and local images under `public/assets/`.

### Known differences from current program direction

| Topic | Current program direction | Version 4 implementation |
| --- | --- | --- |
| Audience | Black and Latino students across the diaspora | Historical copy focuses on Black and African American students. |
| Framework | Learn / Support / Mentor / Experience / Launch | Uses original program labels and a separate Pathways page. |
| Pilot status | Design phase; projected 2027 Boston-area pilot | Newer pilot-status messaging is not incorporated. |
| Partnerships | Relationships listed above | Newer partner details are not incorporated. |
| Research updates | Later work includes research and insights content | Contains the historical Why page; no monthly insights feed. |

Keep these differences visible until website copy and functionality are updated.
Do not describe a planned change as implemented simply because it appears in
this overview.

## Contact and data handling

Version 4 uses `mailto:info@projectinterlock.org` links with subjects for student,
mentor, partnership, supporter, and general interest. These open the visitor's
email application. This branch does not store interest submissions or provide
an interest database, staff dashboard, or authenticated admin portal.

Mailbox availability has not been verified by the code checks. Confirm the
mailbox before publishing. If a form, database, analytics service, or login is
introduced, document its fields, destination, consent text, authorized access,
retention expectations, error behavior, and required configuration in the same
change. Do not commit credentials or private participant information.

## Hosting and validation

The target is `projectinterlock.org` on Hostinger, connected to
`ericdjenkins/Project-Interlockv2`, branch `hostinger-version-4`.
See [the deployment README](../README.md) for the build and start settings.
This Node.js version does not require FTP, Cloudflare bindings, or a database.

The initial migration passed local production checks. For the November 17
reciprocity update, consult the commit's GitHub checks for validation status. Hostinger publication and domain routing have not been verified.
The GitHub checks do not establish that the domain is live.

The production test builds the site, starts the actual Node.js server, and checks
all six pages, their linked local assets, Why-page images, contact links, and
404 behavior. Before a release, also review mobile navigation, readability,
keyboard access, research attribution, and the selected hosting preview.
Existing statistics are historical claims linked from Version 4, not newly
verified or current statistics merely because this document was updated.

## Keeping this file current

For every website change:

1. Update the relevant narrative, tables, status, limitations, and editorial
   review date in this file. Record the change in the dated log below.
2. Run `npm run docs:update` to refresh the generated source inventory.
3. Run `npm run docs:check`, then the checks appropriate to the code change.
4. Commit the overview together with the website change. Record live deployment
   status only after checking the actual hosting result.

`docs:update` refreshes the inventory, routes, package information, and file
fingerprints; it does not invent a program summary or rewrite the editorial
sections. GitHub runs `docs:check` and reports failure if the inventory is stale.
This check flags drift; branch protection is not enabled, so it cannot prevent
a maintainer from bypassing a failed check or Hostinger from deploying a push.
Changes made outside this branch must be brought into the source and reviewed
before this document can describe them as implemented.

## Change log

| Date | Change | Publication status |
| --- | --- | --- |
| 2026-11-14 | Prepared historical Version 4 for Hostinger using standard Next.js, local fonts, production-route checks, and deployment instructions. | Code pushed; Hostinger publication not verified. |
| 2026-11-17 | Added Reach Forward. Reach Back. across Home, About, Programs, Pathways, and Get involved, with voluntary contributions and planned pilot/alumni opportunities. | Source update; Hostinger publication not verified. |
| 2026-11-15 | Added this overview, documented current program direction and Version 4 gaps, and added a documentation freshness check. | Documentation change only; no website-content or domain change. |

## Source inventory

The following section is generated from this branch. It detects changes to
pages, components, imagery, fonts, dependencies, configuration, scripts, and
workflows. Fingerprints identify file contents, not a release approval.

<!-- BEGIN GENERATED WEBSITE INVENTORY -->

Source fingerprint: `dfd6a4bb8a4b988108cc40e4de8e7fcb8b960d5c8a02870b19507390eab95637`

Routes found: `/`, `/about`, `/get-involved`, `/pathways`, `/programs`, `/why`.

Runtime: Next.js 16.2.6; React 19.2.6; Node >=22.13.0 <25.

Build: `next build --webpack`. Start: `next start --hostname 0.0.0.0`.

| Source file | SHA256 |
| --- | --- |
| `.github/workflows/hostinger-checks.yml` | `26c6637441ec733f4ae192a53ccaef6702c6d2d545d165468f7955ffeda03565` |
| `.npmrc` | `a3909ac0447c469fda12c57374993be70f47ce73e49fd3124678c7c047f2214d` |
| `README.md` | `f949a5e997b1cb5264dfa8604aa10ab32d425f1a59ffcfa5ddb7eca4f3bb933f` |
| `app/about/page.tsx` | `74e33f91d805ea91c30e80ccb2d2affa57df2f16186c275cf940a1e61bc35d90` |
| `app/components/SiteChrome.tsx` | `5dfd4ab0c9d4b73f742587858a65668448761b8d63bbfd05dd3595d3b9cbd64f` |
| `app/fonts/geist-latin.woff2` | `9b6f5ff45b278c744b5f379a2c4ecbaf858a842b8eaf82ac8d21b699ca16c608` |
| `app/fonts/geist-mono-latin.woff2` | `5f3d6ad60f29d6cb708414ec6887163d63bf197377ef5417d2483ff31ace6c3b` |
| `app/get-involved/page.tsx` | `1088e6be8a1055c198d09d69fa8de4fa907cb70b7caf0291e1fed511d20a7364` |
| `app/globals.css` | `a931d4e2250aa43a38b4e95f8322ef73d0706baebfc5a413a40c87e1c282f162` |
| `app/layout.tsx` | `b9cf884d101b3ece929e1967c6ec61a9cfa039169ad603223ade7269e99cb7d7` |
| `app/page.tsx` | `f2a0c81ab05e8c6743b6efd80c7e404f9bdada0831466d3404d4661c6f1413bd` |
| `app/pathways/page.tsx` | `28ce0e95b2e767b961d9438dc6536de7ed0719cc7d02e680f0b3beab1b466961` |
| `app/programs/page.tsx` | `799b37484588fdd21613ad565333d3ce86d60a22b3f422b76db8bde385fd4031` |
| `app/why/page.tsx` | `0775b546d5331d70636d0e07faa546a00324f1bf25ce48b7ea7bb258f8af0c49` |
| `next.config.ts` | `cb1292b255083ef3cf1283bc6408fda00db178a09d07a822a67ab646a7cea882` |
| `package-lock.json` | `1e03fda503636c47d75ccfb286ea112a5f27b85750b9c57e11cb37929814c441` |
| `package.json` | `3adcfe320f4ca57f7398b4299cfc9f513f3bc71e24a222ee2c7b83b4a7084791` |
| `postcss.config.mjs` | `dfac7ac2d86d326a0e5adb024e7943c181393ed17a5fcb8f0315b24c7da6ddde` |
| `public/assets/project-interlock-hero.png` | `a9d371b5be96bc04f539dbb13876bf783ebfcba20e0251acd980649e22a3134c` |
| `public/assets/project-interlock-logo.png` | `0025d6e1b3e7086216f5158720b7774e269b6b5f6bfa00438d6b1515bd247d8a` |
| `public/assets/project-interlock-mark.png` | `72c80e577f2425787d9d3ce61e2d8f6a4797004b19379189feeefe653e4b2545` |
| `public/assets/project-interlock-stacked.png` | `b5328f669508bd0ed4889a67785a442396b54462363255b0276df9250272da0a` |
| `public/assets/why-older-students.png` | `c1153633aa3368d1b4d8f856ef404d886d1946edee452b1852a851ecc90dbab5` |
| `public/assets/why-working-professionals.png` | `3e0c28824b4c163f2a6d4e321fa6a2602d4a56b68df2b50c9244d0517bd0c736` |
| `public/assets/why-young-students.png` | `971bf9feded56942e2414835e2682fdaaa9f1fd1dbae7b80c079ceb6fa2f57dc` |
| `public/favicon.svg` | `e6d2e59b7b5bbb0342e0fb496dfc262decbfe4426bbb7b047aec8d467d1dc6f7` |
| `public/file.svg` | `2b67812c325c199a02536cdbeea0c593a72f707d323b72ee3e08dbab06753bd4` |
| `public/globe.svg` | `b614b9bf183925957661ac851498fe1d8029fd43a62fbfed86f9e2624a57e7cf` |
| `public/window.svg` | `644768c4aaeb4767bce293344eeb0c125fb804a94d801440424072202d85e3a1` |
| `scripts/dev.mjs` | `02615f23f8e9ceda5fcf8a6aa03b0f9563b12d66f4a53c3c6086b1b031ec5079` |
| `scripts/program-docs.mjs` | `27de30d822b4b41146fd472bdaf469c8126ceca302e66e6ddce366cfa5fe1a04` |
| `tests/production.test.mjs` | `65a57887e0dd5ae770525ab331161a76bd942a88046a670fd0899390e873e2ff` |
| `tsconfig.json` | `be18523b23b78b6e1a876ddd107d330f0168bddf09d751b57e0b5edce69c66f3` |

<!-- END GENERATED WEBSITE INVENTORY -->
