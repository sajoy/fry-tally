// make some fries
const pile = new Fries('french fries');
const settings = new Settings(); 

// set up buttons for reset, previous orders, settings
document.querySelector('#reset').addEventListener('click', () => {
    const remove = confirm('Are you sure you want to clear all your fries?');
    if (!remove) return;

    pile.addPreviousOrder();
    pile.clear();
    pile.redraw();
});

document.querySelector('#ordersBtn').addEventListener('click', () => {
    const list = document.querySelector('#orders');
    list.classList.toggle('show');
});

document.querySelector('#settingsBtn').addEventListener('click', () => {
    const list = document.querySelector('#settings');
    list.classList.toggle('show');
});

// set up color setting inputs
let fontColorInput = document.querySelector('#font-color');
let backgroundColorInput = document.querySelector('#background-color');
fontColorInput.value = settings.colors.font;
backgroundColorInput.value = settings.colors.background;

fontColorInput.addEventListener('input', e => {
    const newColor = e.target.value;
    settings.updateFontColor(newColor);    
});

backgroundColorInput.addEventListener('input', e => {
    const newColor = e.target.value;
    settings.updateBackgroundColor(newColor);    
});