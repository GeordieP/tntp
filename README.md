# tntp (v2)
*(tiled new tab page)*

A dead simple new tab replacement that displays web page links as a customizable grid of colored tiles.

Built with:
- [S.js](https://github.com/adamhaile/S)
- [Surplus](https://github.com/adamhaile/Surplus)
- [Parcel](https://parceljs.org/)

## Install

- Will be available in browser extension stores soon!

## Dev

##### Setup
Clone the repository, and run `yarn` or `npm i` in the project directory.

##### Run (Dev mode)

Run `yarn start` or `npm run start` to start Parcel in watch mode, then load the extension in your browser (see 'Load' section below). The `static/` directory will be copied into the output `dist/` directory automatically, making it ready to be loaded by a browser.

As this is an extension, hot reloading is not available, and we have to manually refresh the page to see changes. A simple refresh will do the trick; we don't have to re-install the extension every time.

##### Build (Prod mode)

Run `yarn build` or `npm run build` to have Parcel generate a build in production mode. Like run, this will write its output files (including the `static/` directory) to `dist/`.

As part of the build process, a .zip file is generated inside `dist/`. It will be named `tntp_VERSION.zip`, and is ready for uploading to browser extension stores.

##### Load Extension

*NOTE:* These instructions are just for development. Check the 'Install' section above for directions on installing an official release.

*NOTE:* You must build the extension with Parcel before loading it. See the 'Run' or 'Build' sections above.

**Firefox (version 57+ recommended)**

- Browse to `about:debugging`
- Click "Load Temporary Add-on"
- Browse to `[project root]/dist` and select any file

**Chrome**
- Browse to `about:extensions`
- Click "Load Unpacked Extension"
- Browse to `[project root]/dist` and click open


Check official browser documentation for extension packaging and distribution instructions.
