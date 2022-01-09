var number = parseInt(prompt('enter integer'));
for (let i=1;i<=10;i++){
    var result = i*number;
    document.write(`${number}*${i} = ${result}`);
}