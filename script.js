let buttons = document.querySelectorAll('.number')
let displayResult = document.querySelector('.display')
let clear = document.querySelector('.clear')
let remove = document.querySelector('.delete')
let specials = document.querySelectorAll('.btn')

let numberOne = ""
let numberTwo = ""
let operator = ""
let placeholder = 1
let message = "XDDDDDD"
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
            displayResult.innerText = ""
            operator = special.innerText
        }else if(placeholder == 2){
            numberTwo = displayResult.innerText
            placeholder -=1
            numberOne = String(calculate(operator, numberOne, numberTwo))
            displayResult.innerText = numberOne
            numberTwo = ""
            operator = special.innerText
        }
        
        
    })
})

clear.addEventListener('click', ()=>{
    displayResult.innerText = ""
    numberOne = 0
    numberTwo = 0
    placeholder = 1
    operator = ""
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

let calculate = function(operator, numberOne, numberTwo){
    let num1 = Number(numberOne)
    let num2 = Number(numberTwo)
    console.log(num2)

    switch(operator){
        case "+":
            return add(num1, num2)
        case "-":
            return substract(num1, num2)
        case "÷":
            if(num2 == 0){
                return message
            }else{
                return divide(num1, num2)
            }
        case "×":
            return multiply(num1, num2)
    }

}