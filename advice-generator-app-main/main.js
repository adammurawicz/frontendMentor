const diceDiv = document.querySelector('.dice')
const adviceText = document.querySelector('.adviceText-p')
const adviceNumberSpan = document.querySelector('.adviceInfo-p span')

const mainFunction = () => {
    const URL = 'https://api.adviceslip.com/advice'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            adviceNumberSpan.textContent = data.slip.id
            adviceText.textContent = data.slip.advice
        })
        .catch(err => console.log(`fatal error of API: ${err}`))
}

diceDiv.addEventListener('click', mainFunction)

