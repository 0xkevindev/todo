window.addEventListener("load", () => {
  const savedFirstValue = localStorage.getItem("goalOne");
  const savedSecondValue = localStorage.getItem("goalTwo");
  const savedThirdValue = localStorage.getItem("goalThree");
  const savedFourthValue = localStorage.getItem("goalFour");

  if (savedFirstValue) {
    firstInput.value = savedFirstValue;
  }
  if (savedSecondValue) {
    secondInput.value = savedSecondValue;
  }
  if (savedThirdValue) {
    thirdInput.value = savedThirdValue;
  }
  if (savedFourthValue) {
    fourthInput.value = savedFourthValue;
  }
  
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

  const savedFirstCheckbox = localStorage.getItem("goalOneChecked");
  const savedSecondCheckbox = localStorage.getItem("goalTwoChecked");
  const savedThirdCheckbox = localStorage.getItem("goalThreeChecked");
  const savedFourthCheckbox = localStorage.getItem("goalFourChecked");

  if (savedFirstCheckbox === "true") {
    firstCheckbox.checked = true;
    firstInput.style.textDecoration = "line-through";
  } else {
    firstCheckbox.checked = false;
    firstInput.style.textDecoration = "none";
  }

  if (savedSecondCheckbox === "true") {
    secondCheckbox.checked = true;
    secondInput.style.textDecoration = "line-through";
  } else {
    secondCheckbox.checked = false;
    secondInput.style.textDecoration = "none";
  }

  if (savedThirdCheckbox === "true") {
    thirdCheckbox.checked = true;
    thirdInput.style.textDecoration = "line-through";
  } else {
    thirdCheckbox.checked = false;
    thirdInput.style.textDecoration = "none";
  }

  if (savedFourthCheckbox === "true") {
    fourthCheckbox.checked = true;
    fourthInput.style.textDecoration = "line-through";
  } else {
    fourthCheckbox.checked = false;
    fourthInput.style.textDecoration = "none";
  }
});

firstCheckbox.addEventListener("click", () => {
  const firstValue = firstInput.value;
  localStorage.setItem("goalOne", firstValue);
  localStorage.setItem("goalOneChecked", firstCheckbox.checked);
  firstInput.style.textDecoration = firstCheckbox.checked
    ? "line-through"
    : "none";
});

secondCheckbox.addEventListener("click", () => {
  const secondValue = secondInput.value;
  localStorage.setItem("goalTwo", secondValue);
  localStorage.setItem("goalTwoChecked", secondCheckbox.checked);
  secondInput.style.textDecoration = secondCheckbox.checked
    ? "line-through"
    : "none";
});

thirdCheckbox.addEventListener("click", () => {
  const thirdValue = thirdInput.value;
  localStorage.setItem("goalThree", thirdValue);
  localStorage.setItem("goalThreeChecked", thirdCheckbox.checked);
  thirdInput.style.textDecoration = thirdCheckbox.checked
    ? "line-through"
    : "none";
});

fourthCheckbox.addEventListener("click", () => {
  const fourthValue = fourthInput.value;
  localStorage.setItem("goalFour", fourthValue);
  localStorage.setItem("goalFourChecked", fourthCheckbox.checked);
  fourthInput.style.textDecoration = fourthCheckbox.checked
    ? "line-through"
    : "none";
});

firstInput.addEventListener("input", () => {
  localStorage.setItem("goalOne", firstInput.value);
});
secondInput.addEventListener("input", () => {
  localStorage.setItem("goalTwo", secondInput.value);
});
thirdInput.addEventListener("input", () => {
  localStorage.setItem("goalThree", thirdInput.value);
});
fourthInput.addEventListener("input", () => {
  localStorage.setItem("goalFour", fourthInput.value);
});
