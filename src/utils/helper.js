import { firstName, lastName } from "../constants/names";

//The Math.floor() function always rounds down and returns 
//the largest integer less than or equal to a given number.
//The Math.random() function returns a floating-point, 
//pseudo-random number that's greater than or equal to 0 and less than 1.

export function getName() {
  let first = firstName[Math.floor(Math.random() * firstName.length)]
  let last = lastName[Math.floor(Math.random() * lastName.length)]

  if(last === undefined) {
    return first;
  } else {
    return first + " " + last;
  }

}