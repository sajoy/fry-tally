class Fries {
    constructor (type) {
        this.tabs = getData('tabCount') || 1;
        this.type = type;

        this.write();
        this.drawPile();
    }

    clear () {
        this.tabs = 0;
    }

    addFry () {
        this.tabs++;
        setData('tabCount', this.tabs);
    }

    redraw () {
        this.pile.innerHTML = '';
        this.drawPile();
        this.write();
    }

    write () {
        const typeSpan = document.getElementById('type');
        typeSpan.innerHTML = this.type || 'french';
        typeSpan.addEventListener('blur', function () {
            setData('type', typeSpan.innerHTML);
        });

        document.getElementById('count').innerHTML = this.tabs || 'no';
    }

    drawPile () {
        const pile = this.calculatePileDimensions();
        for (let i = 0; i < this.tabs; i++) { this.drawFry(pile,i); }        
    }

    drawFry (pile, i) {
        const fry = document.createElement('li');

        fry.style.width = randomPx(40, 200);
        fry.style.left = randomPx(0, pile.width);
    
        const randTop = randomPx(400, pile.heightMin);
        fry.animate({ top: ['-1000px', randTop] }, { delay: i * 10, duration: 500, fill: 'forwards'});
    
        this.pile.appendChild(fry);
    }
    
    calculatePileDimensions () {
        const maxWidth = 1000; // TODO base this off of screen width
        const maxHeight = 400; // TODO base this off of screen height
        const pileDimensions = {};
        this.pile = document.getElementById('tally');

        pileDimensions.width = (this.tabs * 9) < maxWidth ? this.tabs * 9 : maxWidth;
        pileDimensions.heightMin = (maxHeight - (this.tabs * 3)) > 0 ? (maxHeight - (this.tabs * 3)) : 0;
        this.pile.style.width = pileDimensions.width;
        return pileDimensions;
    }
}
