// count how many fries to make
let tabCount = getData('tabCount') || 1;
setData('tabCount', tabCount + 1);

new Fries('french', tabCount);