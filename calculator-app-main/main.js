const numberBtns = document.querySelectorAll('.numberBtn')
const sectionMiddle__p = document.querySelector('.sectionMiddle__p')
const error = document.querySelector('.error')
const memoNumber = document.querySelector('.sectionMiddle__memo')

const btnDel = document.querySelector('.btnDel')
const btnReset = document.querySelector('.btnReset')

const btnPlus = document.querySelector('.btnPlus')
const btnMinus = document.querySelector('.btnMinus')
const btnMultiply = document.querySelector('.btnMultiply')
const btnDivide = document.querySelector('.btnDivide')
const actionBtns = [btnPlus, btnMinus, btnMultiply, btnDivide]
const equalBtn = document.querySelector('.btnEqual')

const root = document.documentElement
const toggleInputOne = document.querySelector('.toggleInputOne')
const toggleInputTwo = document.querySelector('.toggleInputTwo')
const toggleInputThree = document.querySelector('.toggleInputThree')
const toggles = [toggleInputOne, toggleInputTwo, toggleInputThree]


const checkToggle = () => {
    if(toggleInputOne.checked) {
        root.style.setProperty('--background1', 'hsl(222, 26%, 31%)');
        root.style.setProperty('--background2', 'hsl(223, 31%, 20%)');
        root.style.setProperty('--background3', 'hsl(224, 36%, 15%)');
        root.style.setProperty('key1', 'hsl(225, 21%, 49%)');
        root.style.setProperty('key2', 'hsl(224, 28%, 35%)');
        root.style.setProperty('key3', 'hsl(6, 63%, 50%)');
        root.style.setProperty('key4', 'hsl(6, 70%, 34%)');
        root.style.setProperty('key5', 'hsl(30, 25%, 89%)');
        root.style.setProperty('key6', 'hsl(28, 16%, 65%)');
        root.style.setProperty ('text1', 'hsl(221, 14%, 31%)');
        root.style.setProperty ('text2', 'hsl(0, 0%, 100%)');
    } else if ( toggleInputTwo.checked) {
        root.style.setProperty('--background1', 'hsl(0, 0%, 90%)');
        root.style.setProperty('--background2', 'hsl(0, 5%, 81%)');
        root.style.setProperty('--background3', 'hsl(0, 0%, 93%)');
        root.style.setProperty('key1', 'hsl(185, 42%, 37%)');
        root.style.setProperty('key2', 'hsl(185, 58%, 25%)');
        root.style.setProperty('key3', 'hsl(25, 98%, 40%)');
        root.style.setProperty('key4', 'hsl(25, 99%, 27%)');
        root.style.setProperty('key5', 'hsl(45, 7%, 89%)');
        root.style.setProperty('key6', 'hsl(45, 7%, 89%)');
        root.style.setProperty ('text1', 'hsl(60, 10%, 19%)');
        root.style.setProperty ('text2', 'hsl(0, 0%, 100%)');
    } else if (toggleInputThree.checked) {
        root.style.setProperty('--background1', 'hsl(268, 75%, 9%)');
        root.style.setProperty('--background2', 'hsl(285, 91%, 52%)');
        root.style.setProperty('--background3', 'hsl(268, 75%, 9%)');
        root.style.setProperty('key1', 'hsl(281, 89%, 26%)');
        root.style.setProperty('key2', 'hsl(285, 91%, 52%)');
        root.style.setProperty('key3', 'hsl(176, 100%, 44%)');
        root.style.setProperty('key4', 'hsl(177, 92%, 70%)');
        root.style.setProperty('key5', 'hsl(268, 47%, 21%)');
        root.style.setProperty('key6', 'hsl(290, 70%, 36%)');
        root.style.setProperty ('text1', 'hsl(52, 100%, 62%)');
        root.style.setProperty ('text2', 'hsl(198, 20%, 13%)');
    }
}


// errors:
const errorAction = (errorText) => {
    error.textContent = errorText
    setTimeout(()=> {
        error.textContent = ""
    }, 2500)
}

// divide on 0

const zeroDivide = () => {
    memoNumber.textContent = '';
    sectionMiddle__p.textContent = ''
    errorAction("Hey sucker! You can't divide on 0!")
}

// counting

const countingAction = (x, operator, y) => {
    console.log(x, operator , y);
    sectionMiddle__p.textContent = eval(x + operator + y)
    memoNumber.textContent = ''
}


// typing in paragraph
const typeAction = (e) => {
    const maxNumber = 10

    if(sectionMiddle__p.textContent === '') {
        sectionMiddle__p.textContent = e.target.value
        
    } else {
        if (sectionMiddle__p.textContent.length > maxNumber) {
            errorAction('error of calculator - to long number for its precessor')
        } else {
            sectionMiddle__p.textContent = sectionMiddle__p.textContent + e.target.value
        }
    }
}

// delate last number
const deleteAction = () => {
    sectionMiddle__p.textContent = sectionMiddle__p.textContent.slice(0, memoNumber.textContent.length -1)
}


// reset all
const resetAction = () => {
    sectionMiddle__p.textContent = ''
    memoNumber.textContent = ''
    error.textContent = ''
}


// using '+', '-', '*', '/' btns:
const mainAction = (e) => {
    let operator

    // 1. empty memoNumber and typed sesectionMiddle__p
    if (memoNumber.textContent === '' && sectionMiddle__p.textContent != '') {
        memoNumber.textContent = sectionMiddle__p.textContent + e.target.value
        sectionMiddle__p.textContent = ''
    } 
    // 2.start with operator 
    else if (memoNumber.textContent === '' && e.target.value != '') {
        errorAction("don't start calculation with an operator")
    }

    // 3.divide on 0
    else if (memoNumber.textContent.charAt(memoNumber.textContent.length - 1) == '/' && sectionMiddle__p.textContent == 0) {
        zeroDivide()
    } 
    // 4.change of operator
    else if (memoNumber.textContent.charAt(memoNumber.textContent.length - 1) != e.target.value){
        memoNumber.textContent = memoNumber.textContent.replace(memoNumber.textContent.slice(memoNumber.textContent.length-1), e.target.value);
    }
    // 5.typed memoNumber and typed sectionMiddle__p
    else if (memoNumber.textContent != '' && sectionMiddle__p.textContent != '') {
        countingAction(parseFloat(memoNumber.textContent), memoNumber.textContent.charAt(memoNumber.textContent.length - 1), 
        parseFloat(sectionMiddle__p.textContent))
    } 
}

const equalAction = () => {
    if (memoNumber.textContent.charAt(memoNumber.textContent.length - 1) == '/' && sectionMiddle__p.textContent == 0){
        zeroDivide()
    } else if (
        memoNumber.textContent != '' && sectionMiddle__p.textContent != ''
    ) {
        countingAction(parseFloat(memoNumber.textContent), memoNumber.textContent.charAt(memoNumber.textContent.length - 1), 
        parseFloat(sectionMiddle__p.textContent))
    }
}




toggles.forEach(toggle => {
    toggle.addEventListener('click', checkToggle)
})
numberBtns.forEach(btn => {
    btn.addEventListener('click', typeAction)
})
btnDel.addEventListener('click', deleteAction)
btnReset.addEventListener('click', resetAction)
actionBtns.forEach(btn => {
    btn.addEventListener('click', mainAction)
})
equalBtn.addEventListener('click', equalAction)
