"use strict";
const path = require("path");
const electron = require("electron");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const path__default = /* @__PURE__ */ _interopDefaultLegacy(path);
let win;
electron.app.whenReady().then(() => {
  win = new electron.BrowserWindow();
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path__default.default.join(__dirname, "../dist/index.html"));
  }
});
