# Jotter

A simple macOS app that sits in your menubar and helps you jot down reminders, small self notes etc while working so that you never loose track of something important.

Note - I created this utility app for personal feasibility so I only focused on macOS while developing, this can easily be extended to support windows and linux OS as the entire UI and logic is handled inside a React app and will be same. Head to [`Electron Docs`](https://www.electronjs.org/docs/latest) and have fun !!

## Development

- Install dependencies for electron wrapper application and React -

```bash
npm i && cd app && npm i
```

- Build the react application -

```bash
cd app && npm run build
```

- Replace the start script in package.json in electron app to run the application locally -

```json
"start": "electron ."
```

- Run this from the root of the project -

```bash
npm start
```

- Hooray! You can see Jotter in your mac menu bar

## Download zip for macOS

- Please use my [`drive link`](https://drive.google.com/drive/folders/1Asb48SEL_N8F5dOgCPnWufhGRz_GzArM?usp=drive_link) to download the zip.
- Note - While launching the app, if you see a popup with error - "Jotter is damaged and can't be opened. You should move it to Bin", use the following command to fix this -

```bash
xattr -cr <path_to_jotter.app>
```
