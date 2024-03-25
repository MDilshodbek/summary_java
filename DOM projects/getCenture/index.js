function getCenture() {
  let year = document.getElementById("year");
  let box = document.querySelector(".box");

  if (year.value === "") return alert("Please enter birth year!");
  else {
    let centure = Math.ceil(parseInt(year.value) / 100);
    message = `Siz kiritgan ${year.value} yil => ${centure} asrga tegishli!`;
    box.innerHTML = message;
    console.log(message);
  }
}
// let year = "1999";
// let hmm = Math.ceil(parseInt(year / 100));
// console.log(hmm);
