const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json'

const fruit = document.querySelector('.options')
const submit = document.querySelector('.submitBtn')
const input = document.querySelector('input.first-name')

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  apiFetch();

function displayResults(option){
  for (let i = 0; i < 39; i++){
    let print = document.createElement('label')
    print.setAttribute('class', 'option')
    print.innerHTML = `<input type="checkbox" name="option">${option[i].name}`
    fruit.appendChild(print)
}}

submit.addEventListener('click', () => {
  console.log(input)
})