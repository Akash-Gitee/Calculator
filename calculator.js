// Using Loop without any html,css element

// let num1=+prompt('Enter number')
// let operator=prompt('Select the operator')
// let num2=+prompt('Enter number')
// console.log(`${num1}${operator}${num2}`);
// if (operator=="+") {
//     console.log(num1+num2);
// }
// else if(operator=="-"){
//     console.log(num1-num2);
// }
// else if(operator=="*"){
//     console.log(num1*num2);
// }
// else if(operator=="/"){
//     console.log(num1/num2);
// }


//Using Function with Html,css

let display=document.getElementById('display')

function Calculate(input) {
    display.value+=input
}
function Clear() {
    display.value=''
}
function Result() {
    try {
        display.value=eval(display.value)
    } catch (error) {
        display.value='Error'
    }
}
function Lastclear() {
    display.value=display.value.toString().slice(0,-1)
}