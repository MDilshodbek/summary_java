function getAverage() {
  const firstNum = document.getElementById("firstNum");
  const secondNum = document.getElementById("secondNum");

  const result = document.getElementsByClassName("average");
  console.log(result);
  let average = "0";
  if (firstNum.value.length === 0 || secondNum.value.length === 0) {
    alert("Please enter a number");
  } else {
    average = (parseInt(firstNum.value) + parseInt(secondNum.value)) / 2;
    result[0].innerText = average;
    console.log(average);
  }
}
