function clickMe(){
    const traiangleBaseInput = document.getElementById('triangle-base');
    const traiangleBaseText = traiangleBaseInput.value;
const base = parseFloat(traiangleBaseText);
// console.log(base)

const traiangleHeightInput = document.getElementById('triangle-height');
const traiangleHeight = traiangleHeightInput.value;
const height = parseFloat(traiangleHeight);
// console.log(height)

const Calculate = 0.5 * base * height;
console.log(Calculate)

const triangleAreaspan = document.getElementById('triangle-area');
triangleAreaspan.innerText = Calculate

}