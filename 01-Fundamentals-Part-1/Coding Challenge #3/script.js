/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 
*/

const dolphins1 = Number(prompt("#1 Score?"));
const dolphins2 = Number(prompt("#2 Score?"));
const dolphins3 = Number(prompt("#3 Score?"));
const dolphinsAvg = (dolphins1 + dolphins2 + dolphins3) / 3;

const koalas1 = Number(prompt("#1 Score?"));
const koalas2 = Number(prompt("#2 Score?"));
const koalas3 = Number(prompt("#3 Score?"));
const koalasAvg = (koalas1 + koalas2 + koalas3) / 3;

console.log(`=========Task 1===========`)
console.log(`Dolphins' average score is ${dolphinsAvg}`);
console.log(`Koalas' average score is ${koalasAvg}`);

console.log(`=========Task 2===========`)
if (dolphinsAvg > koalasAvg)
    console.log("Dolphins is the winner");
else if (dolphinsAvg < koalasAvg)
    console.log(`Koalas is the winner`);
else
    console.log(`Draw`);

console.log(`=========Bonus Tasks===========`)
if (dolphinsAvg >= 100 && koalasAvg >= 100) {
    if (dolphinsAvg > koalasAvg)
        console.log("Dolphins is the winner");
    else if (dolphinsAvg < koalasAvg)
        console.log(`Koalas is the winner`);
    else
        console.log(`Draw`);
} else if (dolphinsAvg >= 100) {
    console.log("Dolphins is the winner");
} else if (koalasAvg >= 100) {
    console.log(`Koalas is the winner`);
} else {
    console.log(`No winner for the game`);
}