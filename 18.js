//  merge property of 2 objects using spread operator 

var person = {
    name : 'vinay',
    age : 25
}
var student = {
    gender : 'male'
}
var newObj = {...person, ...student};
console.log(newObj);