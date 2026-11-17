# Project Interlock documentation maintenance

For any website change on this branch, update `docs/PROGRAM_OVERVIEW.md` in the
same commit. Review its mission, program model, audience, partner relationships,
page inventory, contact/data behavior, deployment status, and known limitations.
Describe actual implementation separately from planned program commitments.
Update its editorial review date and dated change log when substantive facts
change. Do not infer publication from a commit or passing build.

After editing the narrative, run `npm run docs:update`, then
`npm run docs:check` and checks appropriate to the code change. The generator
only refreshes the source inventory; it does not replace editorial review.
Never commit credentials, private contacts, or participant submissions.
