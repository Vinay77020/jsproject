//  largest number among 3 numbers using Math.max()

// var num1 = parseFloat(prompt('enter 1st number'));
// var num2 = parseFloat(prompt('enter 2nd number'));
// var num3 = parseFloat(prompt('enter 3rd number'));
// var largest = Math.max(num1,num2,num3);
// document.write('yhe largest number is ' + largest)

//  using if else condition
var num1 = parseFloat(prompt('enter 1st number'));
var num2 = parseFloat(prompt('ENTER 2ND NUMBER'));
var num3 = parseFloat(prompt('enter 3rd number'));
let largest;
if (num1 >= num2 && num1 >=num3){
    largest = num1;
}
else if (num2 >=num1 && num2>= num3){
    largest = num2;
}
else {
    largest = num3;
}
document.write('The largest number is ' + largest);