[![Travis Build Status][travis-image]][travis-url]
[![AppVeyor Build status][appveyor-image]][appveyor-url]
[![Dev Dependency Status][dev-dependency-image]][dev-dependency-url]
[![TypeScript definitions on DefinitelyTyped](https://definitelytyped.org/badges/standard-flat.svg)](https://www.npmjs.com/package/@types/workbox-sw)

<img src='https://user-images.githubusercontent.com/110953/28352645-7a8a66d8-6c0c-11e7-83af-752609e7e072.png' width='500px'/>

# Welcome to Weston's Workbox Workaround fork!

Workbox is a collection of JavaScript libraries for
[Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/).

## Difference from primary project
This fork exists entirely to work around unfixed issues in Electron.  It is unlikely
aspects of this repo will eventually make it into the main Workbox project, because
these issues are really Electron's problems.

* [Background Sync][no-background-sync] is disabled and can't be enabled!
* `file` scheme will [not work in Cache API][no-cache].

## Documentation

* [Overview](https://developers.google.com/web/tools/workbox/) ([site source](https://github.com/google/WebFundamentals/tree/master/src/content/en/tools/workbox))
* [Get started](https://developers.google.com/web/tools/workbox/guides/get-started)
* [Contribute](CONTRIBUTING.md)

Workbox is available on `npm`. We have [installation
instructions](https://developers.google.com/web/tools/workbox/guides/precache-files/)
available depending on your build tool or bundler of choice, including
`webpack`.

## Contributing

You should consider contributing directly to the Workbox project directly instead of this one!

## License

MIT, see [LICENSE](LICENSE) for details.

[npm-url]: https://npmjs.org/package/workbox
[npm-image]: https://badge.fury.io/js/workbox.svg
[travis-url]: https://travis-ci.org/GoogleChrome/workbox
[travis-image]: https://travis-ci.org/GoogleChrome/workbox.svg?branch=master
[appveyor-image]: https://ci.appveyor.com/api/projects/status/4ct8ph4d34c5ifnw?svg=true
[appveyor-url]: https://ci.appveyor.com/project/gauntface/workbox
[dev-dependency-url]: https://david-dm.org/GoogleChrome/workbox?type=dev
[dev-dependency-image]: https://david-dm.org/GoogleChrome/workbox/dev-status.svg

[no-background-sync]: https://github.com/electron/electron/issues/9802
[no-cache]: https://github.com/electron/electron/issues/2831#issuecomment-359707054
