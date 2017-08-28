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
  
  for (let i = 0; i < length - 1; i++) {
    if (typeof array[i] !== 'number' || difference !== array[i g+ 1] - array[i]) {
      return false;
    }
  }
  return true;
}

const isGeometric = (array) => {
  const ratio = array[1] / array[0];

  for (let i = 0; i < length - 1; i++) {
    if (typeof array[i] !== 'number' || ratio !== array[i + 1] / array[i]) {
      return false;
    }
  }
  return true;
}