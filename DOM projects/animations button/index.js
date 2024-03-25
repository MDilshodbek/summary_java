// 1
function myMoveTRT() {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position === 350) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = null;
      elem.style.top = null;
      elem.style.left = position + "px";
      elem.style.right = null;
    }
  }
}
// 2
function myMoveTLT() {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position === 350) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = null;
      elem.style.top = null;
      elem.style.left = null;
      elem.style.right = position + "px";
    }
  }
}
//   3
function myMoveTRB() {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position === 350) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = null;
      elem.style.top = null;
      elem.style.left = position + "px";
      elem.style.right = null;
    }
  }
}
//   4
function myMoveTLB() {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position === 350) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = null;
      elem.style.top = null;
      elem.style.left = null;
      elem.style.right = position + "px";
    }
  }
}
//   5
function myMoveTBL() {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position === 350) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = null;
      elem.style.top = position + "px";
      elem.style.left = null;
      elem.style.right = null;
    }
  }
}
//   6
function myMoveTTL() {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position === 350) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = position + "px";
      elem.style.top = null;
      elem.style.left = null;
      elem.style.right = null;
    }
  }
}
// 7
function myMoveTBR() {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position === 350) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = null;
      elem.style.top = position + "px";
      elem.style.left = null;
      elem.style.right = null;
    }
  }
}
//   8
function myMoveTTR() {
  var elem = document.querySelector(".myAnimation");
  var position = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (position === 350) {
      clearInterval(id);
    } else {
      position++;
      elem.style.bottom = position + "px";
      elem.style.top = null;
      elem.style.left = null;
      elem.style.right = null;
    }
  }
}
