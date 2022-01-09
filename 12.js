// removing duplicate value from array



// function getUnique(arr){
//     let uniqueArr = [];
//     for (let i of arr){
//         if(uniqueArr.indexOf(i) === -1){
//             uniqueArr.push(i);
//         }
//     }
//     document.write(uniqueArr);

// }
// var array = [1,2,2,2,2,3,3,3,3,43,45,45,45,46];
// getUnique(array);

// using set 

function getUnique(arr){
    let uniqueArr = [...new Set(arr)];
    document.write(uniqueArr);
}
const array = [1,2,2,3,3,4,5,6,7,4,9,8];
getUnique(array);