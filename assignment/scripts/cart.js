console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;
let basket = [];

function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}

function addItem (item) {
    if (!isFull()) {
        basket.push( item );
        return true;
    } else {
        return false;
    }
}

addItem('Salt')
addItem('Pepper');
console.log(addItem(3));
console.log(basket)

function listItems ( array ) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

listItems(basket);

function empty ( array ) {
    basket.length = 0;
}

empty(basket);
console.log(basket);

addItem('Watermelon');
addItem('Cherry');
addItem('Strawberry');
addItem('Tomato');
addItem('Banana');
console.log(addItem('Kiwi'));

console.log(basket)

function removeItem (item) {
    let compare = false;
    for(i=0; i < basket.length; i++) {
        let removed = '';
        if (item === basket[i]) {
            removed = basket.indexOf(basket[i]);
            basket.splice(removed,1);
            compare = true;
        } else if (item !== basket[i]) {
            compare = null;
        }
    }
    return compare;
}

console.log(removeItem('Tomato'));
console.log(removeItem('Tissue'));
console.log(basket);