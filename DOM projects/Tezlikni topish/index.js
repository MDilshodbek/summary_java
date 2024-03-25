function getSpeed() {
  let minute = document.getElementById("minute");
  let kmetr = document.getElementById("kmetr");
  let box = document.getElementById("box");

  let secund = parseInt(minute.value * 60);
  let meter = parseInt(kmetr.value * 1000);

  let speed = meter / secund;
  let message = `Sizning masofangiz ${kmetr.value} km, Vaqtingiz ${minute.value} minut, Tezligingiz ${speed} m/s`;
  box.innerText = message;
  console.log(message);
}
