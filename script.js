let buttons = document.querySelectorAll('.number')
let displayResult = document.querySelector('.display')
let clear = document.querySelector('.clear')
let remove = document.querySelector('.delete')
let specials = document.querySelectorAll('.btn')

var numberOne = ""
let numberTwo = ""
let operator = ''

displayResult.innerText = ""


buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        let value = button.innerText
        displayResult.innerText = displayResult.innerText.concat(value)
    })
})

specials.forEach(special =>{
    special.addEventListener('click', ()=>{

    })
})

clear.addEventListener('click', ()=>{

})

remove.addEventListener('click', ()=>{

})






let add = function(numberOne, numberTwo){
    return numberOne + numberTwo
}

let substract = function(numberOne, numberTwo){
    return numberOne - numberTwo
}

let divide = function(numberOne, numberTwo){
    return numberOne / numberTwo
}

let multiply = function(numberOne,  numberTwo){
    return numberOne * numberTwo
}