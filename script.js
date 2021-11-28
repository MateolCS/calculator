let buttons = document.querySelectorAll('.number')
let displayResult = document.querySelector('.display')
let clear = document.querySelector('.clear')
let remove = document.querySelector('.delete')
let specials = document.querySelectorAll('.btn')

let numberOne = ""
let numberTwo = ""
let operator = ''
let placeholder = 1
displayResult.innerText = ""


buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        let value = button.innerText
        displayResult.innerText = displayResult.innerText.concat(value)
    })
})

specials.forEach(special =>{
    special.addEventListener('click', ()=>{
        if(placeholder == 1){
            numberOne = displayResult.innerText
            placeholder+=1
        }else{
            numberTwo = displayResult.innerText
            placeholder -=1
        }
        displayResult.innerText = special.innerText
    })
})

clear.addEventListener('click', ()=>{
    displayResult.innerText = ""
    numberOne = 0
    numberTwo = 0
    placeholder = 1
})

remove.addEventListener('click', ()=>{
    displayResult.innerText = displayResult.innerText.slice(0,-1)
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