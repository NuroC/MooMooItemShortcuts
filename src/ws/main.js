const messagelistener = require("./messagelistener.js")

module.exports = function(keys) {
    WebSocket = class extends WebSocket {
        constructor(...e) {
            super(...e)
            let ws = this;
            messagelistener(ws, keys)
        }
    };
}