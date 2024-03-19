// Exercise 1

// let number = [1, 2, 3, 4, 5];

// console.log(
//   number.reduce((oldValue, currentValue) => {
//     return oldValue + currentValue;
//   })
// );

// Exercise 2

// let str = ["Friends", "Hello"];
// // let number = 0;
// let number = str[0];

// function longestStr(str) {
//   for (let i = 0; i < str.length; i++) {
//     // if (str[i].length > number) {
//     //   number = str[i].length;
//     // }
//     if (str[i].length > number.length) {
//       number = str[i];
//     }
//   }
//   return number;
// }

// console.log(longestStr(str));

// E3
// let num = [1, 2, 3, 4, 5, 6];

// function average(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += num[i];
//   }
//   let average = sum / numbers.length;
//   return Math.floor(average);
// }
// console.log(average(num));

// Create an array of numbers and find the maximum value in the array.

// E4

// let info = [
//   {
//     name: "John",
//     age: 30,
//   },
//   {
//     name: "Jane",
//     age: 20,
//   },
//   {
//     name: "Mary",
//     age: 40,
//   },
// ];

// function filterobject(info, object) {
//   return info.filter((value) => value["name"] !== object.value);
// }

// console.log(filterobject(info, { key: "name", value: "Jane" }));

// E5
// let number = [7, 8, 9, 10, 11, 12];
// let maxnum = 0;

// for (let i = 0; i < number.length; i++) {
//   if (number[i] > maxnum) {
//     maxnum = number[i];
//   }
// }
// console.log(maxnum);

// E6
// let randomwords = ["wind", "sun", "earth", "fire", "clean", "rain"];
// console.log(randomwords.sort());

// E7
// let numbers = [1, 2, 3, 4, 5, 6];

// function specific(input) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (input === numbers[i]) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(specific(3));

// E8

// let people = [
//   { name: "John", age: 30 },
//   { name: "Tom", age: 20 },
//   { name: "Mary", age: 40 },
//   { name: "Alex", age: 30 },
// ];

// const result = function (data, input) {
//   return data.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }else if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });
// };

// console.log(result(people, "name"));
// E9
// let num = [1, 2, 3, 4, 5, 6];
// let ber = [7, 8, 9, 10, 11, 12];

// let numbers = [...num,...ber]

// console.log(numbers);

// E10

let randomwords = ["wind", "sun", "wind", "fire"];

let duplicated = randomwords.filter(
  (value, index, array) => array.indexOf(value) === index
);
console.log(duplicated);
