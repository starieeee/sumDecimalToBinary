
// Firt method
function addDecimalToBinary(a, b){
    return (a + b).toString(2);
}
console.log(addDecimalToBinary(1, 1));

// Second method
function decimalToBinary(x,y){
    let sum = x + y;
    let remainder = '';
    while (sum > 0){
        remainder = (sum % 2) + remainder;
        sum = Math.floor(sum / 2);
    }
    return remainder || '0';
}
console.log(decimalToBinary(5,9));  