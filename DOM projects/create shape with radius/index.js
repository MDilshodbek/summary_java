// function createShape() {
//   var shape = document.getElementById("shape").value;
//   var color = document.getElementById("color").value;
//   var width = document.getElementById("width").value;
//   var height = document.getElementById("height").value;
//   // var radiusInput = document.getElementById("radiusInput");
//   // var BorderRadius = radiusInput ? radiusInput.value + "px" : "0";
//   var radiusInput = document.getElementById("radiusInput").value;
//   var BorderRadius = radiusInput + "px";

//   var canvas = document.getElementById("canvas");
//   var box = document.createElement("div");
//   box.className = "shape";
//   box.style.backgroundColor = color;
//   box.style.width = width + "px";
//   box.style.height = height + "px";

//   if (shape === "square") {
//     box.style.borderRadius = "0";
//   } else if (shape === "circle") {
//     box.style.borderRadius = "50%";
//   } else if (shape === "other") {
//     box.style.borderRadius = BorderRadius;
//     // box.style.borderRadius = radiusInput + "px";
//   }
//   canvas.appendChild(box);
// }

// document.getElementById("shape").addEventListener("input", function () {
//   var shapeInput = this.value;
//   var radius = document.getElementById("Radius");

//   if (shapeInput === "other") {
//     radius.style.display = "block";
//   } else {
//     radius.style.display = "none";
//   }
// });

function createShape() {
  let shape = document.getElementById("shape").value;
  let color = document.getElementById("color").value;
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;
  let radiusInput = document.getElementById("radiusInput");
  let BorderRadius = radiusInput.value + "px";

  let canvas = document.getElementById("canvas");
  let box = document.createElement("div");

  box.className = "shape";
  box.style.backgroundColor = color;
  box.style.width = width + "px";
  box.style.height = height + "px";
  box.style.borderRadius = BorderRadius;

  if (shape === "square") {
    box.style.borderRadius = "0";
  } else if (shape === "circle") {
    box.style.borderRadius = "50%";
  } else if (shape === "other") {
    box.style.borderRadius = BorderRadius;
  }

  canvas.appendChild(box);
}

document.getElementById("shape").addEventListener("input", function () {
  let shapeInput = this.value;
  let radius = document.getElementById("Radius");

  if (shapeInput === "other") {
    radius.style.display = "block";
  } else {
    radius.style.display = "none";
  }
});
