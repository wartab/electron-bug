const electron = require("electron");

function createWindow() {
  let window = new electron.BrowserWindow({
    backgroundColor: "#ffffff",
    webPreferences: {
      devTools: true,
      webSecurity: true,
      defaultEncoding: "utf-8",
      backgroundThrottling: false,
      webviewTag: true,
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      plugins: true,
      spellcheck: true,
    },
  });

  window.on("closed", () => {
    window = null;
  });

  window.loadURL("file://" + __dirname + "/dist-angular/index.html");
  // window.loadURL("http://localhost:4200");
}

electron.app.whenReady().then(() => {
  createWindow();
});

electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});

electron.app.on("activate", () => {
  if (electron.BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
