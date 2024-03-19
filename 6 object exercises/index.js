// E1
// var user = {
//   name: "Dilshodbek",
//   surname: "Makhmudov",
//   age: 25,
//   nationality: "Uzbekistan",
// };

// function info(operation) {
//   if (operation.method === "create") {
//     user[operation.key] = operation.value;
//   } else if (operation.method === "update") {
//     user[operation.key] = operation.value;
//   } else if (operation.method === "delete") {
//     delete user[operation.key];
//   }
//   console.log(user);
// }

// info({
//   method: "create",
//   key: "Current city",
//   value: "South Korea, Daejeon",
// });

// info({
//   method: "update",
//   key: "age",
//   value: 26,
// });

// info({
//   method: "delete",
//   key: "Current city",
// });

// E2

// var products = {};
// function cart(shoes) {
//   if (shoes.type === "buy") {
//     products[shoes.name] = {
//       count: shoes.count,
//       price: shoes.price,
//     };
//   } else if (products.type === "cancel") delete products[name];

//   var sum = 0;
//   var sneakers = Object.values(products);

//   for (let i = 0; i < sneakers.length; i++) {
//     sum += sneakers[i].count * sneakers[i].price;
//   }
//   return { products: products, count: sneakers.length, total_price: sum };
// }

// console.log(cart({ type: "buy", name: "Nike", price: 90, count: 2 }));
// console.log(cart({ type: "buy", name: "New balance", price: 110, count: 1 }));
// console.log(cart({ type: "cancel", name: "Nike" }));

// E3

// var students = {
//   student1: {
//     name: "Dilshodbek",
//     age: 25,
//     grade: 4,
//   },
//   student2: {
//     name: "Ahad",
//     age: 25,
//     grade: 4,
//   },
//   student3: {
//     name: "Murod",
//     age: 25,
//     grade: 3,
//   },
// };
// // console.log(students);

// function pupil(freshman) {
//   switch (freshman.status) {
//     case "newcomer":
//       students[freshman.key] = {
//         name: freshman.name,
//         age: freshman.age,
//         grade: freshman.grade,
//       };
//       break;
//       break;
//     case "remove":
//       delete students[freshman.key];
//       break;
//   }
//   return {
//     "List of students": students,
//   };
// }

// console.log(
//   pupil({
//     status: "newcomer",
//     key: "New student",
//     name: "Temur",
//     age: 25,
//     grade: 1,
//   })
// );

// console.log(
//   pupil({
//     status: "remove",
//     key: "student3",
//   })
// );

// E4

// var people = {
//   person1: {
//     name: "Dilshodbek",
//     age: 25,
//     gender: "Male",
//   },
//   person2: {
//     name: "Maqsadbek",
//     age: 25,
//     gender: "Male",
//   },
//   person3: {
//     name: "Ahad",
//     age: 25,
//     gender: "Male",
//   },
// };

// var keys = Object.keys(people);

// function formatted_string(name) {
//   for (let i = 0; i < keys.length; i++) {
//     let person = people[keys[i]];
//     if (person.name === name) {
//       console.log(
//         `Name -> ${person.name} Age -> ${person.age} Gender -> ${person.gender}`
//       );
//     }
//   }
// }
// formatted_string("Ahad");

// M2
// var n = Object.keys(people);

// for (let i = 0; i < n.length; i++) console.log(n[i], people[n[i]]);

// M3
// var n = Object.keys(people.person1);

// for (let i = 0; i < n.length; i++) console.log(n[i], people.person1[n[i]]);

// E5

// var bank = {
//   humo: {
//     balance: 2000,
//   },
//   12345: {
//     balance: 17000,
//   },
// };

// function operation_executer(type, amount, secret = "not provided") {
//   if (secret === "not provided") {
//     return console.log("Please provide a secret key!");
//     console.log("Smth");
//   } else {
//     console.log(secret);
//   }

//   console.log("Smth");

//   if (bank[secret]) {
//     if (type === "withdraw") bank[secret].balance -= amount;
//     else bank[secret].balance += amount;
//   } else {
//     console.log("Operation declined!");
//   }
// }

// operation_executer("deposit", 500, 12312);

// console.log(bank);

// E6

let library_store = {
  "Atomic Habits": {
    borrow_to: "",
    borrow_count: 15,
  },
  "Zero to One": {
    borrow_to: "",
    borrow_count: 8,
  },
  "Rich Dad, Poor Dad": {
    borrow_to: "",
    borrow_count: 12,
  },
  "The Magic of Thinking Big": {
    borrow_to: "",
    borrow_count: 4,
  },
};

function library(operation) {
  const found_book = library_store[operation.book_name];

  if (operation.type === "borrow" && found_book === "undefined") {
    console.log("Book not found");
  } else if (operation.type === "borrow" && found_book.borrow_to !== "") {
    console.log("Book already borrowed");
  } else if (operation.type === "borrow") {
    library_store[operation.book_name] = {
      borrow_to: operation.student_name,
      borrow_count: found_book.borrow_count + 1,
    };
  } else if (operation.type === "return") {
    library_store[operation.book_name] = {
      borrow_to: "",
      borrow_count: found_book.borrow_count,
    };
  }

  console.log(library_store);
}

library({
  type: "borrow",
  student_name: "Dilshodbek",
  book_name: "Atomic Habits",
});

library({
  type: "return",
  student_name: "Dilshodbek",
  book_name: "Atomic Habits",
});

library({
  type: "borrow",
  student_name: "Dilshodbek",
  book_name: "Zero to One",
});
