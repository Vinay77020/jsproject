// checking number is positive,negative,or zero
 
// var number = parseInt(prompt('enter number'));
// if(number > 0 ){
//     document.write('number is positive');
// }
// else if (number == 0) {
//     document.write('number is zero')
// }
// else {
//     document.write('number is negative');
// }

// nested if else type

var number = prompt('enter number');
if (number >= 0){
    if (number == 0){
        document.write('number is zero');
    }else {
        document.write('number is poitive');
    }

}
else {
    document.write('number is negative');
}