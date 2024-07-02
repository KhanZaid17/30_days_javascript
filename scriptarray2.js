// // Lecture: Array - Part 2

var colors = ['white', 'black', 'red'];

// colors[1] = 'green';

console.log(colors);

colors.push('blue');
console.log(colors);
colors.push('green');
console.log(colors);

colors.pop();
console.log(colors)

colors.shift();
console.log(colors)

colors.unshift('purple');
console.log(colors)

 console.log(colors.indexOf('brown'));

if(colors.indexOf('blue') === -1)
{
    colors.push('blue');

    console.log(colors);
}