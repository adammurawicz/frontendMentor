const navMobileBtn = document.querySelector('.nav-mobile__btn')
const navPopupBtn = document.querySelector('.nav-popup__btn')
const navPopupDiv = document.querySelector('.nav-popup')
const darkDiv = document.querySelector('.dark')
const aItems = document.querySelectorAll('.nav-popup__ul li')

const handleNavAnimation = () => {
    let delayTime = 0
    aItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        delayTime += 2
        delayTime < 10 ? item.style.animationDelay = '.' + delayTime + 's' : item.style.animationDelay = '1.' + delayTime + 's'
    })
}


const addPopupNav = () => {
    navPopupDiv.classList.add('active')
    handleNavAnimation()
    setTimeout(()=> {
        darkDiv.style.display = 'block'
    },500)

}

const removePopupNav = () => {
    navPopupDiv.classList.remove('active')
    setTimeout(()=> {
        darkDiv.style.display = 'none'
    },500)
    handleNavAnimation()
}

aItems.forEach(a => {
    a.addEventListener('click', removePopupNav)
})

navMobileBtn.addEventListener('click', addPopupNav)
navPopupBtn.addEventListener('click', removePopupNav)