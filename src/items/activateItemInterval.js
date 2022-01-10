module.exports = function (isElementVisible) {
    setInterval(() => {
        for (let e = 16; e < 19; e++) isElementVisible(document.getElementById("actionBarItem" + e.toString())) && (window.items.food = e - 16);
        for (let e = 19; e < 22; e++) isElementVisible(document.getElementById("actionBarItem" + e.toString())) && (window.items.wall = e - 16);
        for (let e = 22; e < 26; e++) isElementVisible(document.getElementById("actionBarItem" + e.toString())) && (window.items.spike = e - 16);
        for (let e = 26; e < 29; e++) isElementVisible(document.getElementById("actionBarItem" + e.toString())) && (window.items.mill = e - 16);
        for (let e = 31; e < 33; e++) isElementVisible(document.getElementById("actionBarItem" + e.toString())) && (window.items.trap = e - 16);
    }, 100);
}