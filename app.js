let randomColor1, randomColor2, randomColor3;
let color1 = "#9e9520";
let color2 = "#fff97b";
let color3 = "#b5f3ee";

// if click on lock === color color
let lock1 = false;
let lock2 = false;
let lock3 = false;

// 2nd time click on lock === unlock color
let unlock1 = true;
let unlock2 = true;
let unlock3 = true;

function generateColorCode() {
  // 0xfffff = hexadecimal code
  // xing by 100000 for expanding its range
  // toString(16) is used to convert into hexadecimal string
  // slice is used for 1st 6 hexa decimal value

  if (lock1 === false) {
    randomColor1 = (Math.random() * 0xfffff * 100000).toString(16);
    color1 = "#" + randomColor1.slice(0, 6);
  }
  if (lock2 === false) {
    randomColor2 = (Math.random() * 0xfffff * 100000).toString(16);
    color2 = "#" + randomColor2.slice(0, 6);
  }
  if (lock3 === false) {
    randomColor3 = (Math.random() * 0xfffff * 100000).toString(16);
    color3 = "#" + randomColor3.slice(0, 6);
  }

  document.querySelector(".color1").style.backgroundColor = color1;
  document.querySelector(".color2").style.backgroundColor = color2;
  document.querySelector(".color3").style.backgroundColor = color3;

  document.querySelector("#num1").innerHTML = color1;
  document.querySelector("#num2").innerHTML = color2;
  document.querySelector("#num3").innerHTML = color3;
}

function lockColor1() {
  if (unlock1) {
    // locked
    document.querySelector(".unlockIcon1").classList.add("hide");
    document.querySelector(".lockIcon1").classList.remove("hide");

    lock1 = true;
    unlock1 = false;
  } else {
    // unlocked
    document.querySelector(".unlockIcon1").classList.remove("hide");
    document.querySelector(".lockIcon1").classList.add("hide");
    lock1 = false;
    unlock1 = true;
  }
}
function lockColor2() {
  if (unlock2) {
    // locked
    document.querySelector(".unlockIcon2").classList.add("hide");
    document.querySelector(".lockIcon2").classList.remove("hide");
    lock2 = true;
    unlock2 = false;
  } else {
    // unlocked
    document.querySelector(".unlockIcon2").classList.remove("hide");
    document.querySelector(".lockIcon2").classList.add("hide");
    lock2 = false;
    unlock2 = true;
  }
}
function lockColor3() {
  if (unlock3) {
    // locked
    document.querySelector(".unlockIcon3").classList.add("hide");
    document.querySelector(".lockIcon3").classList.remove("hide");
    lock3 = true;
    unlock3 = false;
  } else {
    // unlocked
    document.querySelector(".unlockIcon3").classList.remove("hide");
    document.querySelector(".lockIcon3").classList.add("hide");
    lock3 = false;
    unlock3 = true;
  }
}

function copyColorCode1() {
  // Copy the text inside the text field
  navigator.clipboard.writeText(color1);

  // show the msg of the copied text
  document.querySelector(".successMsg").innerHTML = color1 + " Copied!";
  setTimeout(() => {
    document.querySelector(".successMsg").innerHTML = "";
  }, 1000);
}

function copyColorCode2() {
  // Copy the text inside the text field
  navigator.clipboard.writeText(color2);

  // show the msg of the copied text
  document.querySelector(".successMsg").innerHTML = color2 + " Copied!";
  setTimeout(() => {
    document.querySelector(".successMsg").innerHTML = "";
  }, 1000);
}

function copyColorCode3() {
  // Copy the text inside the text field
  navigator.clipboard.writeText(color3);

  // show the msg of the copied text
  document.querySelector(".successMsg").innerHTML = color3 + " Copied!";
  setTimeout(() => {
    document.querySelector(".successMsg").innerHTML = "";
  }, 1000);
}
