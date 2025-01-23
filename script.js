const firstCheckbox = document.getElementById("firstCheckbox");
const firstInput = document.getElementById("firstInput");
const firstForm = document.getElementById("firstForm");
const secondCheckbox = document.getElementById("secondCheckbox");
const secondInput = document.getElementById("secondInput");
const secondForm = document.getElementById("secondForm");
const thirdCheckbox = document.getElementById("thirdCheckbox");
const thirdInput = document.getElementById("thirdInput");
const thirdForm = document.getElementById("thirdForm");
const fourthCheckbox = document.getElementById("fourthCheckbox");
const fourthInput = document.getElementById("fourthInput");
const fourthForm = document.getElementById("fourthForm");
const mode = document.getElementById("mode");

document.body.style.backgroundColor = "black";
document.body.style.color = "white";

let darkMode = 0;
mode.addEventListener("click", () => {
  if (darkMode === 0) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    mode.innerHTML = "Dark";
    darkMode = 1;
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    mode.innerHTML = "Light";
    darkMode = 0;
  }
});

firstCheckbox.addEventListener("click", (event) => {
  const firstValue = firstInput.value;
  if (firstCheckbox.checked) {
    firstInput.style.textDecoration = "line-through";
  } else {
    firstInput.style.textDecoration = "none";
  }
  console.log(firstValue);
});

secondCheckbox.addEventListener("click", (event) => {
  const secondValue = secondInput.value;
  if (secondCheckbox.checked) {
    secondInput.style.textDecoration = "line-through";
  } else {
    secondInput.style.textDecoration = "none";
  }
  console.log(secondValue);
});

thirdCheckbox.addEventListener("click", (event) => {
  const thirdValue = thirdInput.value;
  if (thirdCheckbox.checked) {
    thirdInput.style.textDecoration = "line-through";
  } else {
    thirdInput.style.textDecoration = "none";
  }
  console.log(thirdValue);
});

fourthCheckbox.addEventListener("click", (event) => {
  const fourthValue = fourthInput.value;
  if (fourthCheckbox.checked) {
    fourthInput.style.textDecoration = "line-through";
  } else {
    fourthInput.style.textDecoration = "none";
  }
  console.log(fourthValue);
});
