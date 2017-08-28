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
  
  for (let i = 0; i < length; i++) {
    if (difference !== array[i + 1] - array[i]) {
      return false;
    }
  }
  return true;
}

const isGeometric = (array) => {
  const ratio = array[1] / array[0];

  for (let i = 0; i < array.length; i++) {
    if (ratio !== array[i + 1] / array[i]) {
      return false;
    }
  }
  return true;
}

// let commonDifference = arr[1] - arr[0];
//        let commonRatio = arr[1] / arr[0];
//        let arithmetic = true;
//        let geometric = true;
       
//        for (let i = 0; i < arr.length; i++) {
//            if (commonDifference !== arr[i + 1] - arr[i]) {
//                arithmetic = false;
//            }
//            if (commonRatio !== arr[i + 1] / arr[i]) {
//                geometric = false;
//            }
//        }

//        if (arithmetic) {
//            return 'Arithmetic';
//        }
//        else if (geometric) {
//            return 'Geometric';
//        }
//        else {
//            return -1;
//        }
//    }