const { menubar } = require("menubar");
const path = require("path");

const mb = menubar({
  index: `file://${path.join(__dirname, "./app/build/index.html")}`,
  icon: path.resolve(__dirname, "IconTemplate.png"),
  browserWindow: {
    width: 270,
    height: 610,
    resizable: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
  },
});

mb.on("ready", () => {
  console.log("app is ready");
});
