const YOU = {
    fullname: "Cody Alejo",
    age: 25,
    faveColor: "Hyperblue",
    likesPizza: true,
}
let newFaveColor = YOU.faveColor;
console.log(newFaveColor);
YOU.fullname = "Alejo";
console.log(YOU.fullname);
delete YOU.likesPizza;
console.log(YOU);
YOU.likesWings = true;
console.log(YOU);


// Follow the instructions below. As you go through the process console log each variable to see it change!
// 1. Create a new Object representing YOU. Include they following keys: fullName, age, faveColor, and likesPizza.
// HINT: likesPizza accepts a boolean.
// 2. Create a new variable and set it equal to the faveColor property.
// 3. Update your fullName to only be your last name.
// 4. Delete the likesPizza property.
// 5. Add a new key that represents your fave food and mirrors the likePizza. The value will represent the fact that you like it :)
// For example, I would like put likesCookies.