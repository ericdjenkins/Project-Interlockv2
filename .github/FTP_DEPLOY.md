# FTPS deployment setup

This workflow uses SamKirkland/FTP-Deploy-Action v4.4.0. It runs only through
workflow_dispatch and defaults to a dry run. It does not change the existing
GitHub Pages workflow.

## Configure GitHub

In repository Settings > Environments, create the environment `hostinger`.
Add these environment secrets:

- `FTP_SERVER`: FTP hostname from the hosting account, without a URL scheme.
- `FTP_USERNAME`: FTP account username.
- `FTP_PASSWORD`: FTP account password.

Add these environment variables:

- `FTP_LOCAL_DIR`: repository-relative directory containing the reviewed,
  built static site, including `index.html` (for example, `ftp-site/`).
  No deployment directory is assumed or created by this change.
- `FTP_SERVER_DIR`: dedicated remote website directory as seen by the FTP
  account, ending in `/`. Use the actual path from your host; do not assume
  that `public_html/` is correct for an account already rooted there.
- `FTP_PORT`: optional; defaults to `21` for explicit FTPS.

Keep credentials in GitHub secrets, never in committed files or chat.
The server must support explicit FTPS with a valid TLS certificate.

## Select compatible content

The repository contains legacy static HTML as well as a newer Vinext/Cloudflare
application with server-side routes and database bindings. Copying that
application's source or client assets to shared hosting will not run its API,
forms, authentication, or database functionality. This workflow does not build
or convert that application and is not a complete deployment method for it.

Prepare and review a dedicated static export before configuring FTP_LOCAL_DIR.
Do not choose the repository root, `public/` assets alone, an archive, or
server application output. The workflow requires an index.html, rejects
common source/runtime directories, omits hidden files, rejects symlinks,
and allows only listed static file types. Hidden configuration files such as
`.htaccess` are deliberately not uploaded.

## Run

After the workflow is reviewed and merged into the default branch, open
Actions > Deploy static site via FTPS > Run workflow. Select the branch
containing the approved static directory and leave dry_run checked first.
Review the preview, verify the target website directory and hosting account,
then run again with dry_run unchecked when ready to publish.

The action synchronizes files and may remove previously tracked files that
were removed locally. It does not enable dangerous-clean-slate. Use a dedicated
destination and preserve the state file between runs. A dry run still requires
valid hosting credentials and connectivity.

No FTP run or website publication is performed by adding these files.
