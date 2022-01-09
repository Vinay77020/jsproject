// adding items to array using splice


function insertElement(){
    var array = ['rabbit','lion','tiger','elefant','monkey','chitah',];
    let index = 3;
    let element = 'monster';
    array.splice(index,0,element);
    console.log(array);
}
insertElement();