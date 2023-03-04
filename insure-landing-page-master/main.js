const navMobileBtn = document.querySelector('.navMobile__btn')
const navPopUp = document.querySelector('.navPopUp')
const navMobileItems = document.querySelectorAll('.navPopUp__container a')

const handleNavAnimation = () => {
    let delayTime = 0
    navMobileItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        delayTime += 2
        item.style.animationDelay = '.' + delayTime + 's'
    })
}

const togglePopUp = () => {
    navPopUp.classList.toggle('active')
    handleNavAnimation()
    if(navPopUp.classList.contains('active')) {
        navMobileBtn.style.backgroundImage = "url('../images/icon-close.svg')"
    } else {
        navMobileBtn.style.backgroundImage = "url('../images/icon-hamburger.svg')"
    }
}

navMobileBtn.addEventListener('click', togglePopUp)
navMobileItems.forEach(item => {
    item.addEventListener('click', togglePopUp)
})