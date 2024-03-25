const box = document.getElementById("box");
const button = document.getElementById("button");
// const box_style = document.getElementsByClassName("dollar");
let uzb = 15000;
let result = 0;

const valyuta = document.getElementById("valyuta");
button.addEventListener("click", () => {
  if (valyuta.value === "") return alert("Biror qiymat kiriting");
  else {
    result = valyuta.value * uzb;
    const message = `Siz kiritgan ${valyuta.value}$ o'zbek so'mida ${result} tashkil etadi`;
    console.log(message);
    box.innerText = message;
  }
});
