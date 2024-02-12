function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  // console.log(base)

  const height = getInputValue("parallelogram-height");
  // console.log(height)

  const area = base * height;
  console.log(area);
  setInnerTextById("parallelogram-area", area);
}

function getInputValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputvalue = parseFloat(inputValueText);
  return inputvalue;
}

function setInnerTextById(elements, area) {
  const element = document.getElementById(elements);
  element.innerText = area;
}
