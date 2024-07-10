
// Primitive data types

// let word = "javascript";
// word [0] = "y";
// console.log(word)

// let numOne = 3;
// let numTwo = 3;
// console.log(numOne == numTwo)    

// let js = "javascript";
// let py = "python";
// console.log(js == py)

// let lightOn = true;
// let lightOf = false;
// console.log(lightOn == lightOf)

// // Non-primitive data types
//  let numss = [3, 2, 1];
//  numss[0] = 5;
//  console.log(numss)

//  let nums = [1, 2, 3];
//  let numbers = [1, 2, 3];
//  console.log(nums == numbers)

//  let userOne = {
//     name : "Zaid",
//     role : "Student",
//     country : "India",
//  }

//  let userTwo = {
//     name : "Zaid",
//     role : "Student",
//     country : "India",
//  }
//  console.log(userOne == userTwo)

//  let numsss = [1, 2, 3];
//  let numberss = numss;
//  console.log(numsss == numberss);

//  let userone = {
//     name : "Zaid",
//     role : "Student",
//     country : "India"
//  }

//  let usertwo = userone;
//  console.log(userone == usertwo)

//  Numbers
// let age = 35
// const gravity = 9.81  
// let mass = 72         
// const PI = 3.14

// More Examples
// const boilingPoint = 100 
// const bodyTemp = 37      

// console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

// let age = 4397;
// let name = "Zaid";
// console.log(`My name is ${name} and i am ${age} old`);


// let string = "Javascript";
// console.log(string.toUpperCase())

// let firstname = "Zaid";
// console.log(firstname.toLowerCase())

// let lastname = "Khan";
// console.log(lastname.toUpperCase())

// console.log(`My name is ${firstname} ${lastname} and i am learning ${string}`);

// let string = "ZaidKhan";
// console.log(string.substr(2,3));

// let str = "ZaidKhan";
// console.log(str.substring(1,6));

// let country = "India";
// console.log(country.substring(2,4));
// console.log(country.substring(0,5));
// console.log(country.substring(4));

// let string = "30 days of javascript";
// console.log(string.split());
// console.log(string.split(' '));
// console.log(string.split(" "));

// let firstName = "Zaid";
// console.log(firstName.split());
// console.log(firstName.split(""));

// let countries = "India, Ireland, England, Scotland";
// console.log(countries.split(","));
// console.log(countries.split(", "));

// let string = "zaid is very bad";
// console.log(string.replace("zaid", "khan"));
// console.log(string.indexOf('bad'));
// console.log(string.lastIndexOf('very'));
// console.log(string.startsWith('zaid'));
// console.log(string.startsWith('bad'));
// console.log(string.endsWith('zaid'));
// console.log(string.endsWith('bad'));
// console.log(string.search("zaid"));
// console.log(string.search("very"));


// let numOne = 5;
// let numTwo = 9;

// let sum = numOne + numTwo;
// let diff = numOne - numTwo;
// let mult = numOne * numTwo;
// let div = numOne / numTwo;
// let mod = numOne % numTwo;
// let expo = numOne ** numTwo;
// console.log(sum, diff, mult, div, mod, expo);

// let num = 3;
// if (num > 0) {
//     console.log(`${num} is a positive number`);
// }else {
//     console.log(`${num} is a negative number`)
// }

// isRaining = true;
// if (isRaining) {
//     console.log("You need a raincoat");
// }else {
//     console.log("No need for a raincoat")
// }

// let a = 0
// if (a > 0) {
//     console.log(`${a} is a positive number`)
// }else if (a < 0) {
//     console.log(`${a} is a negative number`)
// }else (a == 0); {
//     console.log(`${a} is zero`)
// }

// // if else if else
// let weather = 'sunny'
// if (weather === 'rainy') {
//   console.log('You need a rain coat.')
// } else if (weather === 'cloudy') {
//   console.log('It might be cold, you need a jacket.')
// } else if (weather === 'sunny') {
//   console.log('Go out freely.')
// } else {
//   console.log('No need for rain coat.')
// }

// // Switch

// let wEather = 'cloudy';

// switch (wEather) {
//     case 'rainy' :
//         console.log('You need a raincoat')
//         break
//     case  'summer' :
//         console.log('Go out freely')
//         break
//     case 'cloudy':
//         console.log('It might be cold, you need a jacket')
//         break
//     case 'sunny' :
//         console.log('Go out freely')
//         break

// }

// let age = 12;

// if (age >= 18) {
//     console.log("You are old enough to drive");
// }else {
//     let yearstowait = 18 - age;
//     console.log(`You need to wait for ${yearstowait} more years to turn 18.`)
// }

// let myAge = prompt("Enter your age");

// if (myAge < 30)  {
//     let youareolder = 30 - myAge;
//     console.log(`You are ${youareolder} years older than me`)
// }

// const numbers = [0, 23, 34, 345, 5415, 84431];
// const fruits = ['banana', 'pineapple', 'apple', 'peru']
// const vegetables = ['tomato', 'potato', 'carrot', 'onion']
// const webTechs = ['html', 'css', 'js', 'react', 'node']

// console.log('numbers:', numbers);
// console.log('numbers of fruits:', fruits.length);
// console.log('number of vegetables:' ,vegetables.length);
// console.log(webTechs);

// let js = 'javascript';
// const charsInJavascript = js.split('')
// console.log(charsInJavascript);

// let companies = 'facebook, microsoft, google, amazon'
// console.log(companies.split(',')) 

// let txt = 'I love studying . Till now i have learned html, css, js'
// const words = txt.split(' ')
// console.log(words)

// const webtechs = [
//     'html',
//     'css',
//     'javascript',
//     'react',
//     'node',
//     'mongoDB'
// ]
// console.log(webtechs);
// console.log(webtechs.length);
// console.log(webtechs[3]);
// console.log(webtechs[5]);

// let lastIndex = webtechs.length -1;
// console.log(webtechs[lastIndex]);


// const countries = [
//     'albania',
//     'england',
//     'germany'
// ]
// countries[2] = 'inida'
// console.log(countries)

// const arr = Array() creates an empty Array
// console.log(arr)

// const eightEmptyValues = Array(8);
// console.log(eightEmptyValues)

// const eightXvalues = Array(8).fill(69);
// console.log(eightXvalues);

// const firstlist = [1, 2, 3];
// const secondlist = [4, 5, 6];
// const thirdlist = firstlist.concat(secondlist)

// console.log(thirdlist)

// const fruitss = ['banana', 'orange', 'mango', 'pineapple']
// let index = fruits.indexOf('pineapple')

// if (index === -1){
//     console.log('This fruit does not exists in the array')
// } else {
//     console.log('This fruit does exist in array')
// }

// const numberss = [1, 2, 3, 4, 5, 6];

// console.log(numberss.includes(4));
// console.log(numberss.includes(9));
// console.log(numberss.includes(0));
// console.log(numberss.includes(3));

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.join())

// const names = ['tab', 'boss', 'guddu', 'chinta', 'tito'];

// console.log(names.join())
// console.log(names.join(''))
// console.log(names.join(' '))
// console.log(names.join(', '))
// console.log(names.join(' # '))

// Slice array

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.slice())
// console.log(numbers.slice(0))
// console.log(numbers.slice(0, numbers.length))
// console.log(numbers.slice(1,4))
// console.log(numbers.slice(0,3))

// const countries = ['india', 'england', 'scotland', 'ireland']
// countries.push('france')
// console.log(countries)
// countries.pop()
// console.log(countries)

// countries.shift()
// console.log(countries)

// countries.unshift('netherland')
// console.log(countries)

// const webTechs = [
//     'html',
//     'css',
//     'javascript',
//     'react',
//     'node',
//     'mongoDB'
// ]
// webTechs.sort()
// console.log(webTechs);

// webTechs.reverse()
// console.log(webTechs)


// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     isMarried: true
//   }
//   console.log(person)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
 const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

const companies = ['google', 'facebook', 'microsoft', 'amazon']
const setOfCompanies = new Set(companies)
console.log(companies)
