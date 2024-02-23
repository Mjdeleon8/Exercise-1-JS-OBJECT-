const newJeansMemberOne = {
  name: "Hanni Pham",
  age: 19,
  starSign: "Libra",
};

const newJeansMemberTwo = {
  name: "Lee Hye-in",
  age: 15,
  starSign: "Taurus",
};

const newJeansMemberThree = {
  name: "Kang Hae-rin",
  age: 17,
  starSign: "Taurus",
};

const newJeansMemberFour = {
  name: "Danielle Marsh",
  age: 18,
  starSign: "Aries",
};

const newJeansMemberFive = {
  name: "Kim Min-ji",
  age: 19,
  starSign: "Taurus",
};

document.getElementById(
  "person-one"
).innerHTML = `<span>Name: </span>${newJeansMemberOne.name}, <span>Age: </span>${newJeansMemberOne.age}, <span>Star Sign: </span> ${newJeansMemberOne.starSign}`;

document.getElementById(
  "person-two"
).innerHTML = `<span>Name: </span>${newJeansMemberTwo.name}, <span>Age: </span> ${newJeansMemberTwo.age}, <span>Star Sign: </span> ${newJeansMemberTwo.starSign}`;

document.getElementById(
  "person-three"
).innerHTML = `<span>Name: </span>${newJeansMemberThree.name}, <span>Age: </span> ${newJeansMemberThree.age}, <span>Star Sign: </span> ${newJeansMemberThree.starSign}`;

document.getElementById(
  "person-four"
).innerHTML = `<span>Name: </span>${newJeansMemberFour.name}, <span>Age: </span> ${newJeansMemberFour.age}, <span>Star Sign: </span> ${newJeansMemberFour.starSign}`;

document.getElementById(
  "person-five"
).innerHTML = `<span>Name: </span>${newJeansMemberFive.name}, <span>Age: </span>${newJeansMemberFive.age}, <span>Star Sign: </span> ${newJeansMemberFive.starSign}`;
