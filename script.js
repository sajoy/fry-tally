// make some fries
const settings = new Settings();
const pile = new Fries('french fries');

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

document.querySelector('#purchase').addEventListener('click', () => {
    // google.payments.inapp.getPurchases({
    //     'parameters': {'env': 'prod'},
    //     'success': a => console.log(a),
    //     'failure': b => console.log(b)
    // });

    google.payments.inapp.getSkuDetails({
        'parameters': {'env': 'prod'},
        'success': a => console.log(`success:`,  a),
        'failure': b => console.log(`failed:`, b)
    });
    

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