# Build Process (not great!)

The build process isn't documented in official docs,
so you need to poke around and be familiar with how
Gulp works and how NPM works.

This is the process Wes used (written from his POV) in order to get things to get what he needed
to happen: a new published build with his modifications

## Building with Gulp
Unfortunately, there doesn't appear to be an explicit "generate release files" build step.  Rather, that step comes
rolled into the publishing steps.

If you run `gulp build` you will get built artifacts scattered across dozens of folders
for each sub module.

### Gulp publish-github
I found it useful to just follow the publishing aproach hinted at by
`gulpfile.js` and straight up publish to Github with it.

1. Make and commit changes.
2. Modify `gulptasks/utils/constants.js` and adjust the `MIN_RELEASE_TAG_TO_PUBLISH` value to `'v5.0.0-rc.1'`
3. Update the constants `GITHUB_OWNER` `GITHUB_REPO` with your user and repo information.
4. Create a new tag with an appropriate SemVer version number.  I opted for an approach where I created `v5.0.0-rc.1-latest`
   and just deleted and re-added the tag when I made important changes.  This step can't be skipped; without a tag, no 
   appropriate bundle will be created.
5. Run `gulp publish-github`

### Notes
- You need to delete a release from Github if you want to rebuild it.  E.g.: Wes deletes `v5.0.0-rc.1-latest`
- It's very annoying and slow.
- You might be better off expending some time creating a new build task.
- `gulp watch` seemed pretty busted, and could build in an infinite loop as if it was triggering
  itself as it rebuilt and caused change detections to trigger.  Stick to manual.
