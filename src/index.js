const injectItems = require("./items/defineItems.js")
const activateItemInterval = require("./items/activateItemInterval.js")

const isElementVisible = require("./functions/isElementVisible.js")

const initws = require("./ws/main.js")
const keys = require("./config.js")

initws(keys)
activateItemInterval(isElementVisible)
injectItems()

