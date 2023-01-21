const tipInputs = document.querySelectorAll('.tipInput')
const tipAmount = document.querySelector('.resultValueAmount')
const TotalAmount = document.querySelector('.resultValueTotal')
const resetBtn = document.querySelector('.resetBtn')
const billError = document.querySelector('.billError')
const peopleError = document.querySelector('.peopleError')

let tipValue
let bill
let people

const changeAmounts = () => {
    bill = document.querySelector('.billValue').value
    people = document.querySelector('.peopleValue').value
    
    for(input of tipInputs) {
        if(input.checked) {
            tipValue = input.value
        } 
    }
    console.log(tipValue);
}

const checkInputs = () => {
    changeAmounts()

    if(bill == 0 || bill == '') {
        billError.textContent = "Can't be zero"
    } else {
        billError.textContent = ""
    }

    if(people == 0 || people == '') {
        peopleError.textContent = "Can't be zero"
    } else {
        peopleError.textContent = ""
    }

    if((people != 0 && people != '' ) && (bill != 0 && bill != '')) {
        countTip()
    }
}

const countTip = () => {

    changeAmounts()

    const num1 = (tipValue * parseInt(bill)) / parseInt(people)
    const num2 = (parseInt(bill) + (tipValue * parseInt(bill))) / parseInt(people)

    tipAmount.textContent = `$${num1.toFixed(2)}`
    TotalAmount.textContent = `$${num2.toFixed(2)}`

}

const checkEnter = (e) => {
    if (e.keyCode === 13) {
        checkInputs()
    } 
}

const resetFunction = () => {
    billError.textContent = ''
    people.textContent = ''
    tipAmount.textContent = ''
    TotalAmount.textContent =''
    document.querySelector('.billValue').value = ''
    document.querySelector('.peopleValue').value = ''
}

window.addEventListener('keyup', checkEnter)
resetBtn.addEventListener('click', resetFunction)
