// function replaceVar() {
//   let firstInput = document.getElementById("birinchi");
//   let secondInput = document.getElementById("ikkinchi");
//   let New_data = document.querySelector(".new_data");

//   const message = `Sizning to'liq ismingiz: ${firstInput.value}, ${secondInput.value}`;
//   New_data.innerText = message;
//   console.log(message);
// }

let firstInput = document.getElementById("birinchi");
let secondInput = document.getElementById("ikkinchi");
let new_data = document.querySelector(".new_data");

function replaceVar() {
  const message = `Sizning to'liq ismingiz: ${secondInput.value}, ${firstInput.value} <button onclick="correct()">Change</button>`;
  new_data.innerHTML = message;
  console.log(message);
}

function correct() {
  const message = `Sizning to'liq ismingiz: ${firstInput.value}, ${secondInput.value} ga o'zgartirildi`;
  new_data.innerText = message;
  console.log(message);
}
