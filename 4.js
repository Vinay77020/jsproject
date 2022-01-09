// area of a 
// area = (base*height)/2

// var bValue = prompt('enter base value');
// var hValue = prompt('enter heght value');
// var ans = (bValue*hValue)/2;
// document.write(ans)


// area of triangle
var s1 = parseInt(prompt('enter side1:'));
var s2 = parseInt(prompt('enter side2:'));
var s3 = parseInt(prompt('enter side3:'));
var s = (s1+s2+s3)/2;
var ans = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
document.write(ans)