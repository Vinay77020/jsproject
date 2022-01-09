// removing items from array using slice method


function remove (array,n){
    var index = array.indexOf(n);
    if(index > -1){
        array.splice(index , 1);
    }
    return array;

}
var res = remove([1,2,3,4,5,6,7,8],4);
console.log(res);