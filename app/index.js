'use strict';

let length;

export const aritGeo = (array) => {
  length = array.length;
  if (length === 0 ) {
    return 0;
  } else if (length < 3) {
    return 'Array should have a minimum of 3 numbers';
  } else if (isArithmetic(array)) {
    return 'Arithmetic';
  } else if (isGeometric(array)) {
    return 'Geometric';
  } else {
    return -1;
  } 
}

const isArithmetic = (array) => {
  const difference = array[1] - array[0];
  
  const expectedLastElement = array[0] + (length - 1) * difference;

  return array[length - 1] === expectedLastElement;
}

const isGeometric = (array) => {
  const ratio = array[1] / array[0];

  const expectedLastElement = array[0] * Math.pow(ratio, length - 1);
  
  return array[length - 1] === expectedLastElement;
}