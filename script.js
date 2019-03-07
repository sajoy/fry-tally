// make some fries
const pile = new Fries('french fries');

// set up reset button
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