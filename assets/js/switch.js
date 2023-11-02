const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const car1 = document.querySelector(".car:nth-child(1)")
const car2 = document.querySelector(".car:nth-child(2)")

button1.addEventListener("click", () => {
  button1.style.backgroundColor = "darkred";
  button2.style.backgroundColor = "#140101";
  car1.style.opacity = 0;
  car2.style.opacity = 100;
  // car1.style.display = "none";
  // car2.style.display = "flex";
})
button2.addEventListener("click", () => {
  button2.style.backgroundColor = "darkredñ";
  button1.style.backgroundColor = "#140101";
  car2.style.opacity = 0;
  car1.style.opacity = 100;
  // car2.style.display = "none";
  // car1.style.display = "flex";
})