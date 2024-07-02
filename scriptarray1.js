//Lecture: Arrays - Part 1

var arr = [                     //Literal Notation
    "John",
    "Mary",
    "Bob",
    10,
    true,
    [1, 2, 3],
    function (name) {
        return "Hello " + name;
    },
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[5][1]);
console.log(arr[6](arr[0]));

var arr = new Array(1, "John", false);// Constrctor Notation

console.log(arr);

