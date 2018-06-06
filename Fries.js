class Fries {
    constructor (type, count) {
        this.tabs = count;
        this.type = type;

        this.write();
        this.drawPile();
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
        fry.style.left = randomPx(0, pile.dimensions.width);
    
        const randTop = randomPx(400, pile.dimensions.heightMin);
        fry.animate({ top: ['-1000px', randTop] }, { delay: i * 10, duration: 500, fill: 'forwards'});
    
        pile.ele.appendChild(fry);
    }
    
    calculatePileDimensions () {
        const maxWidth = 1000; // TODO base this off of screen width
        const maxHeight = 400; // TODO base this off of screen height
        const pile = {};
        pile.ele = document.getElementById('tally');
        pile.dimensions = {};

        pile.dimensions.width = (this.tabs * 9) < maxWidth ? this.tabs * 9 : maxWidth;
        pile.dimensions.heightMin = (maxHeight - (this.tabs * 3)) > 0 ? (maxHeight - (this.tabs * 3)) : 0;
        pile.ele.style.width = pile.dimensions.width;
        return pile;
    }
}
