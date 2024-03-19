// E1
// let word = "Congratulation!";

// console.log(word.length);

// E2

// var products = {};

// console.log(cart({ type: "buy", p_name: "lamb", price: 6000, count: 4 }));
// console.log(cart({ type: "buy", p_name: "beef", price: 9000, count: 2 }));
// console.log(cart({ type: "buy", p_name: "chicken", price: 8000, count: 4 }));
// console.log(cart({ type: "cancel", p_name: "beef", price: 6000, count: 4 }));

// function cart(items) {
//   switch (items.type) {
//     case "buy":
//       products[items.p_name] = {
//         price: items.price,
//         count: items.count,
//       };
//       break;
//     case "cancel":
//       delete products[items.p_name];
//   }

//   sum = 0;
//   var goods = Object.values(products);

//   for (let i = 0; i < goods.length; i++) {
//     sum += goods[i].price * goods[i].count;
//   }
//   return {
//     products: products,
//     total_count: goods.length,
//     total_price: sum,
//   };
// }

// E3
// Prime number

// E4
// var pupil = {
//   student1: {
//     name: "Dilshodbek",
//     grade: 4,
//     subjects: "IT",
//   },
//   student2: {
//     name: "Maqsadbek",
//     grade: 5,
//     subjects: "Business",
//   },
//   student3: {
//     name: "Akhad",
//     grade: 3,
//     subjects: "Culinary",
//   },
// };

// var keys = Object.keys(pupil);

// function student_grade(name) {
//   for (let i = 0; i < keys.length; i++) {
//     let person = pupil[keys[i]];
//     if (person.name === name) {
//       console.log(`The average grade of ${person.name} is ${person.grade}`);
//     }
//   }
// }
// student_grade("Akhad");

// E5

// var str = "Hello World! i just started programming";
// var vowels = ["a", "e", "i", "o", "u"];
// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) {
//     str = str.replaceAll(str[i], "o");
//   }
// }
// console.log(str);

// function test(str) {
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       str = str.replaceAll(str[i], "o");
//     }
//   }
//   return str;
// }

// console.log(test(str));

// E6

// var library = {
//   "Law of Succes": {
//     Authore: "Napoleon Hills",
//     Pages: 3000,
//   },
//   "Atomic Habits": {
//     Authore: "James Clear",
//     Pages: 2000,
//   },
//   "Zero to One": {
//     Authore: "Peter Thiel",
//     Pages: 1000,
//   },
// };

// let keys = Object.keys(library);
// function formatted_string(input) {
//   if (library[input]) {
//     console.log(
//       `Book Authore: ${library[input].Authore} Pages: ${library[input].Pages}`
//     );
//   } else console.log("Book not found");
//   return input;
// }

// formatted_string("Law of Succes");

// E7

// let number = [1, 2, 3, 4, 5];

// console.log(
//   number.reduce((oldValue, currentValue) => {
//     return oldValue + currentValue;
//   })
// );

// E8

const restaurant = {
  name: "Crispy",
  menu: [
    { item: "Crispy chicken", price: 12.0 },
    { item: "Crispy fish", price: 10.0 },
    { item: "Crispy potato fries", price: 8.0 },
    { item: "cheese ball", price: 3.0 },
    { item: "cheese stick", price: 2.0 },
    { item: "icecream", price: 4.0 },
  ],
  vegan: false,
};

function getMenu(restaurantName) {
  if (restaurantName === restaurant.name) console.log(restaurant.menu);
}

getMenu("Crispy");
// console.log(getMenu("Delicious"));

// E9

// let word = "level";

// function getP() {
//   for (let i = 0; i <= word.length; i++) {
//     let lastOne = word.length - 1 - i;
//     let firstOne = i;
//     if (word[firstOne] !== word[lastOne]) return false;
//   }
//   return true;
// }

// console.log(getP());

// E10

// var bank = {
//   humo: {
//     balance: 2000,
//   },
//   12345: {
//     balance: 17000,
//   },
// };

// var keys = Object.keys(bank);

// function account_balance(account) {
//   for (let i = 0; i < keys.length; i++) {
//     if (keys[i] === account) {
//       console.log(
//         `The current balance of ${account} is ${bank[keys[i]].balance}`
//       );
//     }
//   }
// }
// account_balance("12345");
