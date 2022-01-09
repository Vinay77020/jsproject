// function as parameter

function greet(){
    return 'hellloooo';

}
function name(user ,func){
var message = func();
console.log(`${message} ${user}`);
}
name('vinay',greet);
name('vishnu',greet);
name('sara',greet)