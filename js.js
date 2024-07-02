// let number = 69;

// if (number > 0) {
//     console.log("The number is positive");
// }else if (number < 0) {
//     console.log("The number is negative");
// }else {
//     console.log("The number is zero");
// }

// let age = 69;

// if (age >= 18) {
//     console.log("You are eligible to vote");
// }else {
//     console.log("You are not eligible to vote");
// }

// let score = 69;
// let grade;

// if (score >= 90){
//     grade = "A";
// } else if (score >= 80){
//     grade = "B";
// }else if (score >= 70){
//     grade = "C";
// }else if (score >= "60"){
//     grade = "D";
// }else {
//     grade = "F";
// }
// console.log("Your grade is: " + grade);

// let number = 69;

// if (number % 2 === 0){
//     console.log("The number is even");
// }else{
//     console.log("The number is odd");
// }

// let num1 = 868856;
// let num2 = 868875;
// if (num1 === num2){
//     console.log("The numbers are equal");
// }else if (num1 > num2){
//     console.log("The first number is greater");
// }else {
//     console.log("The second number is greater");
// }

// const product = {
//     name : "Ball Pen",
//     rating : 4,
//     offer : 5,
//     price : 270,
// }
// console.log(product)

// const profile = {
//     username : "Zaidddd.11",
//     isFollow : false,
//     followers : 65,
//     following : 82,
// }
// console.log(profile)


// Calculate sum of 1 to 5
// let sum = 0;
// for(let i = 1; i<=5; i++){
//     sum = sum + i;
// }
// console.log("sum = ", sum);

// Calculate sum of 1 to n
// let sum = 0;
// let n = prompt("Enter a number:");
// for(let i = 1; i <=n; i++) {
//     sum = sum + i;
// }
// console.log("sum = ", sum);

// While loop

// let i = 1;
// while (i <= 10) {
//     console.log("Zaid Khan");
//     i++;
// }

// const person = {
//     firstname : "Zaid",
//     lastname : "Khan",
//     age : 19,
// }
// console.log(person)

// const cars = [
//     "Porche",
//     "BMW",
//     "Mercedes"
// ]
// console.log(cars)

// const bikes = new Array ("TVS","Honda","Suzuki")
// console.log(bikes)

// Primitives Data types
// let a = null;
// let b = 383;
// let c = true;
// let d = BigInt("73993");
// let e = "Zaid";
// let f = Symbol("I am a nice symbol")
// console.log(a, b, c, d, e, f)
// console.log(typeof d)

// Objects Non-promitive data type

// const marksheet = {
//     "Boss" : 90,
//     "Chinta" : 80,
//     "Tab" : 79,
//     "Tito" : 95,
//     "Guddu" : 86
// }
// console.log(marksheet.Tab)

// Practice set-1 
// Q-1
// let a = "Zaid";
// let b = 69;
// console.log(a + b);

// // Q-2
// console.log(typeof (a + b))

// // Q-3
// const c = {
//     name : "Zaid",
//     section : 1,
//     isPrinciple : false
// }
// console.log(c)

// // Q-4
// c['name'] = "Khan"
// console.log(c)

// // Q-5
// const dict = {
//     appreciate : "recognize the full worth of.",
//     ataraxia : "a state of freedom from emotional disturbance and anxiety",
//     yakka : "work, especially hard work"
// }
// console.log(dict.yakka)

// Arrays
// let marks = [97, 82, 99, 80, 81]
// console.log(marks);
// console.log(marks.length);

// // Loops using arrays
// for(let i=0; i<marks.length; i++) {
//     console.log(marks[i]);
// }

// For of loop using array

// let cities = ["Mumbai", "Hyderabad", "Banglore", "Delhi"]

// for (let city of cities) {
//     console.log(city.toUpperCase());
// }

// Practice Questions
// let marks = [89, 90, 88, 93, 97];
// let sum = 0;

// for (let val of marks) {
//     sum+=val;
// }
// console.log(sum);
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);
// // 
// let items = [250, 645, 300, 900, 50];

// let idx = 0;
// for (let val of items) {
//     console.log(`value at index ${idx} = ${val}`);
//     idx++;
// }

// // 
// let fruits = ["guava", "apple", "pineapple", "litchi"];
// fruits.push("kiwi", "dragonfruit", "banana");
// console.log(fruits);
// let deletedfruits = fruits.pop();
// console.log(fruits);
// console.log("deleted", deletedfruits);

// // 
// let marvelHeroes = ["thor", "hulk" ,"ironman"];
// let dcHeroes = ["batman", "superman", "aquaman"];

// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// Slice 

// let heroes = ["thor", "spiderman", "batman", "ironman", "aquaman"];
// console.log(heroes);
// console.log(heroes.slice(1, 4));

// Splice

// let arr = [1 ,2 ,3 ,4 ,5 ,6 ,7];
// arr.splice(2 ,2, 101, 102);

// Add element
// arr.splice(2 ,0, 102);

// Delete Element
// arr.splice(3,1);

// Replace Element
// arr.splice(3 , 1 , 101);

// console.log(arr)