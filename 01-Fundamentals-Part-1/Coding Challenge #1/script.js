/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John
*/

const markMass = prompt("Mark's mass?");
const markHeight = prompt("Mark's markHeight?");

const johnMass = prompt("John's mass?");
const johnHeight = prompt("John's markHeight?");

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

const markHigherBMI = markBMI > johnBMI;

alert(markHigherBMI);