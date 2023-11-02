let el1 = document.querySelector(".btn1");
el1.addEventListener("click", funcBtn1);
function funcBtn1() {
  console.log("⚡BTN ONE");
  el1.innerHTML = "🔥";
}
let el2 = document.querySelector(".btn2");
el2.addEventListener("click", funcBtn2);
function funcBtn2() {
  console.log("BTN TWO⚡");
  el2.innerHTML = "🔥";
}
