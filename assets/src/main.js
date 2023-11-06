// const button = document.querySelector(".box button");

// button.addEventListener("click", function () {
//   button.nextElementSibling.nextElementSibling.classList.toggle("btnShow");
// });

// button.ondblclick = () => {
//   button.nextElementSibling.nextElementSibling.classList.toggle("btnShow");
// };

// button.onmouseenter = () => {
//   button.nextElementSibling.nextElementSibling.classList.toggle("btnShow");
// };

// Button Click
// button.onclick = () => {
//   const foodName = button.previousElementSibling.value;
//   button.nextElementSibling.nextElementSibling.innerHTML = foodName;
//   button.previousElementSibling.value = "";
// };

const button = document.querySelector(".box button");
const data = document.querySelector(".box .data");

// Button add
const foods = [];

const showFood = () => {
  let content = "";
  foods.map((item, index) => {
    content += `<h2>${index + 1}.${item}</h2>`;
  });
  data.innerHTML = content;
};

button.onclick = () => {
  let foodName = button.previousElementSibling.value;
  foods.push(foodName);
  showFood();
  button.previousElementSibling.value = "";
};

console.log(button.previousElementSibling.value);
