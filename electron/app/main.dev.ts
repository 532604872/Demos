/* eslint global-require: off, no-console: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `yarn build` or `yarn build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 */
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import path from 'path'
import { app, BrowserWindow } from 'electron'
import { autoUpdater } from 'electron-updater'
import log from 'electron-log'
import MenuBuilder from './menu'

// 页面地址
const host = {
  webPage: 'https://www.baidu.com/'
}

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info'
    autoUpdater.logger = log
    autoUpdater.checkForUpdatesAndNotify()
  }
}

let mainWindow: BrowserWindow | null = null

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support')
  sourceMapSupport.install()
}

if (
  process.env.NODE_ENV === 'development' ||
  process.env.DEBUG_PROD === 'true'
) {
  require('electron-debug')()
}

const installExtensions = async() => {
  const installer = require('electron-devtools-installer')
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS']

  return Promise.all(
    extensions.map((name) => installer.default(installer[name], forceDownload))
  ).catch(console.log)
}

const createWindow = async() => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    await installExtensions()
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'resources')
    : path.join(__dirname, '../resources')

  const getAssetPath = (...paths: string[]): string =>
    path.join(RESOURCES_PATH, ...paths)

  mainWindow = new BrowserWindow({
    frame: false, // 创建无边框窗口
    show: false, // 是否应该显示窗口创建的时候
    width: 1024,
    height: 728,
    // fullscreen: true,
    icon: getAssetPath('icon.png'), // 窗口的图标
    webPreferences: {
      nodeIntegration: true, // Boolean(process.env.START_HOT),
      webviewTag: true // Boolean(process.env.START_HOT)
    }
    /* webPreferences:
      (process.env.NODE_ENV === 'development' ||
        process.env.E2E_BUILD === 'true') &&
      process.env.ERB_SECURE !== 'true'
        ? {
          nodeIntegration: true
        }
        : {
          preload: path.join(__dirname, 'dist/renderer.prod.js')
        }*/
  })
  mainWindow.maximize() // 默认最大化

  mainWindow.loadURL(host.webPage)
  /* if (process.env.NODE_ENV === 'development' && process.env.IS_WEB === 'true') {
    console.log('IS_WEB', true)
    mainWindow.loadURL(host.webPage)
  } else {
    mainWindow.loadURL(`file://${__dirname}/app.html`)
  }*/

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined')
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize()
    } else {
      mainWindow.setFullScreen(true)

      mainWindow.show()
      mainWindow.focus()
    }
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  if (process.env.NODE_ENV === 'development') {
    const menuBuilder = new MenuBuilder(mainWindow)
    menuBuilder.buildMenu()
  } else {
    mainWindow.removeMenu()
  }

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
}

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

if (process.env.E2E_BUILD === 'true') {
  app.whenReady().then(createWindow)
} else {
  app.on('ready', createWindow)
}

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

app.allowRendererProcessReuse = true
// 关键代码限制只能开启一个应用(4.0以下版本)
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => { // event, commandLine, workingDirectory
    // 当运行第二个实例时,将会聚焦到mainWindow这个窗口
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()

      mainWindow.setFullScreen(true)

      mainWindow.show()
      mainWindow.focus()
    }
  })
}

if (!process.env.START_HOT) {
  if (!app.isPackaged) {
    app.setLoginItemSettings({
      openAtLogin: true,
      openAsHidden: false,
      path: process.execPath,
      args: [path.resolve(process.argv[1])]
    })
  } else {
    app.setLoginItemSettings({
      openAtLogin: true
    })
  }
}
