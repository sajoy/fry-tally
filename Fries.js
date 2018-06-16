class Fries {
    constructor (type) {
        if (!getData('tabCount')) setData('tabCount', 1);
        this.tabs = getData('tabCount');

        this.displayType = type;
        this.type = type.toLowerCase().replace(' ', '-');

        if (!getData('lastDate')) setData('lastDate', new Date().toString().substr(0,21));
        this.lastDate = getData('lastDate');

        this.write();
        this.drawPile();
        this.drawOrders();
    }

    clear () {
        this.tabs = 0;
        setData('tabCount', this.tabs);
    }

    addPreviousOrder () {
        const currentDate = new Date().toString().substr(0,21);
        const endTotalString = `${this.lastDate} - ${currentDate} ..... ${this.tabs}`;
        
        // save date after making string bc saveDate rewrites this.lastDate
        this.saveDate(currentDate);
        this.saveOrder(endTotalString);
    }

    saveOrder (newOrder) {
        const orders = getData('previousOrders') || [];
        orders.push(newOrder);
        setData('previousOrders', orders);
    }

    saveDate (date) {
        this.lastDate = date;
        setData('lastDate', date);
    }

    addFry () {
        this.tabs++;
        setData('tabCount', this.tabs);
    }

    redraw () {
        this.pile.innerHTML = '';
        this.drawPile();
        this.write();
        this.drawOrders();
    }

    write () {
        const typeSpan = document.getElementById('type');
        typeSpan.innerHTML = this.displayType;

        document.getElementById('count').innerHTML = this.tabs || 'no';
    }

    drawOrders () {
        if (!getData('previousOrders')) return;

        const orders = getData('previousOrders');
        const orderList = document.querySelector('ul#orders');
        orderList.innerHTML = '';
        orders.forEach(order => {
            const li = document.createElement('li');
            li.textContent = order;
            orderList.appendChild(li);
        });   
    }

    drawPile () {
        const pile = this.calculatePileDimensions();
        for (let i = 0; i < this.tabs; i++) { this.drawFry(pile,i); }        
    }

    drawFry (pile, i) {
        const fry = document.createElement('li');
        fry.classList.add(this.type);

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
