// remove a property from an object

var student = {
    name:'vinay',
    age :32,
    hobbies : ['riding','playing','coding'],
    greet : function(){
        console.log('helloo people');
    },
    score :{
        english : 90,
        hindi : 78,
    }
};
delete student.greet;
delete student ['score']
console.log(student);