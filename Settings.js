class Settings {
    constructor () {
        const defaultSettings = {
            colors: {
                font: '#000000',
                background: '#f00000'
            },
            type: 'french'
        };

        this.applySettings(getData('settings') || defaultSettings);
    }

    applySettings (settings) {
        this.data = {
            type: settings.type,
            colors: settings.colors
        };
        
        this.applyFontColor(this.data.colors.font);
        this.applyBackgroundColor(this.data.colors.background);
        this.applyType(this.data.type);
    }
    
    applyType () {
        // will create new Fries with specified type 
        // will need to be loaded/dealt with before making a pile
    }

    applyFontColor (color) {
        let elements = [...document.querySelectorAll("button"), document.querySelector('h1')];
    
        elements.forEach(function(ele) {
            ele.style.color = color;
        }); 
    }

    applyBackgroundColor (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
        
    get colors () {
        return this.data.colors;
    }

    get type () {
        return this.data.type;
    }

    saveSettings () {
        setData('settings', this.data);
    }

    // methods called on input changes
    updateFontColor (color) {
        this.applyFontColor(color);
        this.data.colors.font = color;
        this.saveSettings();
    }

    updateBackgroundColor (color) {
        this.applyBackgroundColor(color);
        this.data.colors.background = color;
        this.saveSettings();
    }
}