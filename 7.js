//  number is odd or even

// var number = prompt('enter number');
// if (number % 2 ==0){
//     document.write('number is even');

// }else {document.write('number is odd')}

// using turnery operator

var number = prompt('enter number');
var res = (number %2 == 0)?'even':'odd';
document.write(`the number is ${res}.`)