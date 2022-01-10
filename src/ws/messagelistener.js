const initkeys = require("../functions/initkeys.js")

module.exports = function(ws, keys) {
    ws.addEventListener("message", (e) => {
        if(!e) return;
        let temp = msgpack.decode(new Uint8Array(e.data));
        let data;
        if(temp.length > 1) {
            data = [temp[0], ...temp[1]];
            if (data[1] instanceof Array){
                data = data;
            }
        } else {
            data = temp;
        }
        if(!data) {return};
        if(data[0] == "io-init") {
            initkeys(ws, keys)
        }
    })
}