const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')
const { constructMenuTemplate } = require('./menu')

function createWindow() {
    const window = new BrowserWindow({
        width: 1310,
        height: 850,
        webPreferences: {
            nodeIntegration: true
        },
        useContentSize: true
    })

    const appUrl = process.env.ELECTRON_URL || url.format({
        pathname: path.join(__dirname, 'app/index.html'),
        protocol: 'file:',
        slashes: true
    })

    const menuTemplate = constructMenuTemplate(app, window)
    const menu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(menu)

    window.loadURL(appUrl)

    if (process.env.ELECTRON_URL) {
        window.webContents.openDevTools()
    }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
