const add = (a,b) => (0 + a + b);

const subtract = (a,b) => (0 + a  - b);

const sum = (valArr) => {
  return valArr.reduce((total, val) => total + val, 0);
};


const multiply = (valArr) => {
  return valArr.reduce((total, val) => total * val, 1);
};

const power = (a,b) => (a ** b);

const factorial = (a) => {
  let initArray = [...Array(a).keys()];
  let iterArray = initArray.map(val => val + 1);
  console.log(iterArray);
  return iterArray.reduce((total, val) => total * val, 1);
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
