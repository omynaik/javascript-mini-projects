const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `${height} is not a valid height, please enter a valid height.`;
    return;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `${weight} is not a valid weight, please enter a valid weight.`;
    return;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    if (BMI < 18.6) {
      results.innerHTML = `Your BMI is <span>${BMI}</span> and you are in <span>underweight range</span>`;
    } else if (BMI > 18.5 && BMI < 25.0) {
      results.innerHTML = `Your BMI is <span>${BMI}</span> and you are in a <span>normal weight range</span>`;
    } else {
      results.innerHTML = `Your BMI is <span>${BMI}</span> and you are in <span>overweight range</span>`;
    }
  }
});
