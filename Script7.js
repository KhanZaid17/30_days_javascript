const string ="hi there";

console.log(string);

const usingArrayFrom = Array.from(string);

console.log(usingArrayFrom);

console.log("Total number of data "+ usingArrayFrom.length);

for(var index = 0; index < usingArrayFrom.length;index++) {
    console.log(usingArrayFrom[index]);
}