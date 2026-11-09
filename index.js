alert("JavaScript is working!");

const bank = [];
const odds = [];
const evens = [];

function addNumber(number) {
  bank.push(number);
  render();
}

function sortOne() {
  if (bank.length === 0) {
    return;
  }

  const number = bank.shift();

  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }

  render();
}

function sortAll() {
  while (bank.length > 0) {
    const number = bank.shift();

    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }
  }

  render();
}

function NumberForm() {
  const form = document.createElement("form");

  form.innerHTML = `
    <input type="number" id="numberInput" required step="1" placeholder="Enter a number" />
    <button type="submit">Add number</button>
  `;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = form.querySelector("#numberInput");
    const number = Number(input.value);

    if (input.value !== "" && Number.isSafeInteger(number)) {
      addNumber(number);
    }
  });

  return form;
}

function NumberBank() {
  const section = document.createElement("section");

  section.innerHTML = `
    <h2>Number Bank</h2>
    <p>${bank.join(", ")}</p>
    <button type="button" id="sortOne">Sort 1</button>
    <button type="button" id="sortAll">Sort All</button>
  `;

  section.querySelector("#sortOne").addEventListener("click", sortOne);
  section.querySelector("#sortAll").addEventListener("click", sortAll);

  return section;
}

function NumberCategory(title, numbers) {
  const section = document.createElement("section");

  section.innerHTML = `
    <h2>${title}</h2>
    <p>${numbers.join(", ")}</p>
  `;

  return section;
}

function render() {
  const app = document.querySelector("#app");

  app.replaceChildren(
    NumberForm(),
    NumberBank(),
    NumberCategory("Odd Numbers", odds),
    NumberCategory("Even Numbers", evens),
  );
}

alert("Reached the bottom!");
console.log("Starting render");
render();
