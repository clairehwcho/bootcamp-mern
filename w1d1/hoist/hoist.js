console.log("----- #1 -----");
// GIVEN
console.log(hello);
var hello = 'world';
// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';

console.log("----- #2 -----");
// GIVEN
var needle = 'haystack';
test();
function test () {
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
// var needle;
// function test () {
//     var needle;
//     needle = 'magnet';
//     console.log(needle); // 'magnet'
// }
// needle = 'haystack';
// test();

console.log("----- #3 -----");
// GIVEN
var brendan = 'super cool';
function print () {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan;
// function print () {
//     var brendan;
//     brendan = 'only okay';
//     console.log(brendan); // 'only okay'
// }
// brendan = 'suepr cool';
// console.log(brendan); // 'super cool

console.log("----- #4 -----");
// GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat () {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
// var food;
// food = 'chicken';
// console.log(food); // 'chicken'
// function eat () {
//     var food;
//     food = 'half-chicken';
//     console.log(food); // 'half-chicken'
//     var food;
//     food = 'gone';
// }
// eat(); // 'half-chicken'

console.log("----- #5 -----");
// GIVEN
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// var mean;
// mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// mean(); // undefined
// console.log(food); // undefined
// console.log(food); // undefined


console.log("----- #6 -----");
// GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind () {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// console.log(genre); // logs undefined
// var genre;
// genre = "disco";
// function rewind () {
//     var genre;
//     genre = "rock";
//     console.log(genre); // 'rock'
//     var genre;
//     genre = "r&b";
//     console.log(genre); // 'r&b'
// }
// rewind(); // 'rock, r&b'
// console.log(genre); // 'disco'

console.log("----- #7 -----");
// GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn () {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// dojo = "san jose";
// console.log(dojo); // 'san jose'
// function learn () {
//     dojo = "seattle";
//     console.log(dojo); // 'seattle'
//     var dojo;
//     dojo = "burbank";
//     console.log(dojo); // 'burbank'
// }
// learn(); // 'seattle, burbank'
// console.log(dojo); 'san jose'

console.log("----- #8 -----");
// GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo (name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
// AFTER HOISTING BY THE INTERPRETER
// function makeDojo (name, students) {
//     const dojo;
//     dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now"; // assignment to constant variable
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
