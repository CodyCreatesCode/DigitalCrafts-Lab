let YOU = {
    fullName: "Cody Alejo",
    age:  25,
    faveColor: "Blue",
    likesPizza: true,
};

let faveColor = YOU.faveColor;
YOU['lastName'] = YOU['fullName'];
delete YOU['fullName'];
YOU.lastName= "Alejo";
delete YOU.likesPizza;
YOU['likesWings'];
YOU.likesWings = true;

console.log(YOU);