const checkBox = document.querySelector('.toggle input')
let basicPrize
let profesionalPrize
let masterPrize

const downloadVariable = () => {
    basicPrize = document.querySelector('.card-one .card-prize span')
    profesionalPrize = document.querySelector('.card-two .card-prize span')
    masterPrize = document.querySelector('.card-three .card-prize span')
}


const checkInputValue = () => {
    downloadVariable()

    if (checkBox.checked) {
        basicPrize.textContent = '19.99'
        profesionalPrize.textContent = '24.99'
        masterPrize.textContent = '39.99'
    } else {
        basicPrize.textContent = '199.9'
        profesionalPrize.textContent = '249.99'
        masterPrize.textContent = '399.99'
    }
}

checkBox.addEventListener('change', checkInputValue)