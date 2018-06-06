var tabCount = getData( 'tabCount' );
setData( 'tabCount', tabCount ? tabCount + 1 : 1 );

var type = getData( 'type' );
setData( 'type', type ? type : 'french' );

var typeSpan = document.getElementById( 'type' );
typeSpan.innerHTML = type || 'french';
typeSpan.addEventListener( 'blur', function () {
    setData( 'type', typeSpan.innerHTML );
});

document.getElementById( 'count' ).innerHTML = tabCount || 'no';

var pile = document.getElementById( 'tally' );
var pileDimensions = {};
pileDimensions.width = (tabCount * 9) < 1000 ? tabCount * 9 : 1000;
pileDimensions.heightMin = (400 - (tabCount * 3)) > 0 ? (400 - (tabCount * 3)) : 0;
pile.style.width = pileDimensions.width;

for( var i = 0; i < tabCount; i ++ ) {
    var fry = document.createElement( 'li' );
    fry.style.width = randomPx( 200, 40 );
    fry.style.left = randomPx( pileDimensions.width, 0 );

    var randTop = randomPx( 400, pileDimensions.heightMin );
    fry.animate({ top: ['-1000px', randTop] }, { delay: i * 10, duration: 500, fill: 'forwards'});

    document.getElementById( 'tally' ).appendChild( fry );
}

// functions

function setData ( keypath, data ) {
    localStorage.setItem( keypath, JSON.stringify( data ) );
}

function getData ( keypath ) {
    var data = null;

    if ( localStorage[keypath] ) {
        data = JSON.parse( localStorage[keypath] );
    }

    return data;
}

function randomPx ( max, min = 0 ) {
    return Math.floor( Math.random() * ( max - min ) + min ) + 'px';
    // reference: http://stackoverflow.com/questions/1527803/
}
