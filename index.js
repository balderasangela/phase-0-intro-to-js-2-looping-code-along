// Code your solutions in this file
const gifts = ["teddy bear","drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me`);
}

const names = ["Angela","Peach", "Fukia"];
const event = ["birthday"]

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]} for the wonderful birthday gift!`);
    }
    return names;
}
writeCards(names);

var i = 10; // begin at 10
while (i > 0) {
    console.log( i-- ); // prints 10, 9, ..., 1
}
console.log("Blast Off!");