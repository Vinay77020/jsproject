var person = {
    name : 'vinay',
    age : '24',
    hobbies : ['playing','riding','coding'],
    greet : function(){
        console.log('helloooo people on the earth');

    },
    marks :{
        maths : 86,
        science :89 
    }
};
console.log(typeof person);
console.log(person.name);
console.log(person.hobbies[0]);
person.greet;
console.log(person.marks.science);
