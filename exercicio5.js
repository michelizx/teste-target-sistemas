var string = 'string invertida'
var reverseString = '';

for (var i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
}

console.log(reverseString);