function setData (keypath, data) {
    localStorage.setItem(keypath, JSON.stringify(data));
}

function getData (keypath) {
    return localStorage[keypath] ? JSON.parse(localStorage[keypath]) : null;
}

function randomPx (min, max) {
    return Math.floor(Math.random() * (max - min) + min) + 'px';
}
