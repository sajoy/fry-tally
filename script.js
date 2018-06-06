// count how many fries to make
const pile = new Fries('french');
pile.addFry();

// set up reset button
document.querySelector('#reset').addEventListener('click', () => {
    const remove = confirm('Are you sure you want to clear all your fries?');
    if (!remove) return;

    localStorage.clear();
    pile.clear();
    pile.redraw();
});