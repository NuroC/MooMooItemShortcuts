module.exports = function(ws, keys) {
    for(let i in keys) {
        console.log(keys[i].key, items[keys[i].item])
        document.addEventListener("keydown", event => {
            if(event.key == keys[i].key.toString()) {
                if(items[keys[i].item]) {
                    console.log(items[keys[i].item])
                    ws.send(new Uint8Array((msgpack.encode(["5", [items[keys[i].item]]]))))
                }
            }
        })
    }
}