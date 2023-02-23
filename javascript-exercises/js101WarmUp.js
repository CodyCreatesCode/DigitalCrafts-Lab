const name = "Cody Alejo";
console.log(`${name} is cool.`);
let daysUntilChristmas = 25 - 22;
console.log(`${daysUntilChristmas}, Days until Christmas.`);
const frontTeeth = "my two front teeth";
console.log(`All I want for Christmas is ${frontTeeth}`);
function decemberCountDown(date, today) {
    return date - today;
}
const newYearsCountDown = decemberCountDown(31, 22);
console.log(newYearsCountDown);


// 1. Define a variable (name) that is a STRING of your name.
// 2. Console log your name variable and add the string "is cool".
// 3. Create a new variable called daysUntilChristmas. Set this variable equal to 25 minus today's day value (1).
// Console log this variable preceeded by the string: "Days until Christmas". Don't forget the comma!
// const frontTeeth = "my two front teeth";
// 4. Using interpolation, console log the following phrase using the variable frontTeeth:
// "All I want for Christmas is my two front teeth."
// function decemberCountdown(date, today) {
// return date - today;
// }
// 5. Using the decemberCountdown function, take the day value of New Year's Eve (31) minus today's day value (1).
// Set this equal to a variable! Console log it to confirm your answer!