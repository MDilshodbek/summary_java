function calculateAge() {
  let current_year = "2024";
  let age = 0;
  let inputYear = document.getElementById("inputYear");
  let Current_age = document.getElementById("Current_age");
  // let ageStyle = document.getElementsByClassName("dastur");

  if (inputYear.value === "") return alert("Tug'ilgan yilingizni kiriting");
  else {
    age = current_year - inputYear.value;
    const message = `Siz ${age} yoshdasz!`;
    // message.ClassName = "ageStyle";
    Current_age.innerText = message;
    console.log(message);
  }
}

// Issue with message style
