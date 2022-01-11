// 1. string
const favoriteDrink = 'water';
console.log('favoriteDrink', favoriteDrink, typeof favoriteDrink);

// 2. number
const numberOfCups = 6;
console.log('numberOfCups', numberOfCups, typeof numberOfCups);

// 3. boolean
const isColdDrink = true;
console.log('isColdDrink', isColdDrink, typeof isColdDrink);

// 4. null
const studentFavoriteDrink = null;
console.log('studentFavoriteDrink', studentFavoriteDrink, typeof studentFavoriteDrink);

// 5. undefined
let carOwner;
console.log('carOwner', carOwner, typeof carOwner);

// 6. object
const drink = {
    favoriteDrink: 'water',
    numberOfCups: 6,
    isColdDrink: true,
};
console.log('drink', drink, typeof drink);

// 7. symbol
const id = Symbol('id');
console.log('id', id, typeof id);

// 8. bigint
const bigIntNumber = BigInt(10);
console.log('bigIntNumber', bigIntNumber, typeof bigIntNumber);
