var rangeLeft = document.getElementById("rangeLeft");
var numberLeft = document.getElementById("numberLeft");

var rangeTop = document.getElementById("rangeTop");
var numberTop = document.getElementById("numberTop");

var rangeRight = document.getElementById("rangeRight");
var numberRight = document.getElementById("numberRight");

var rangeBottom = document.getElementById("rangeBottom");
var numberBottom = document.getElementById("numberBottom");

var box = document.getElementById("box");

rangeLeft.addEventListener("input", function () {
  numberLeft.value = this.value;
  let radius = this.value + "px";
  box.style.borderTopLeftRadius = radius;
});

rangeTop.addEventListener("input", function () {
  numberTop.value = this.value;
  let radius = this.value + "px";
  box.style.borderTopRightRadius = radius;
});

rangeRight.addEventListener("input", function () {
  numberRight.value = this.value;
  let radius = this.value + "px";
  box.style.borderBottomLeftRadius = radius;
});

rangeBottom.addEventListener("input", function () {
  numberBottom.value = this.value;
  let radius = this.value + "px";
  box.style.borderBottomRightRadius = radius;
});
