const btns = document.querySelectorAll('.numberBtn')
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
let num1; 
let num2;



// typing in paragraph
const typeAction = (e) => {
    const maxNumber = 10

    if(sectionMiddle__p.textContent === '') {
        sectionMiddle__p.textContent = e.target.value
        // num1 = parseFloat(sectionMiddle__p.textContent)
        
    } else {
        if (sectionMiddle__p.textContent.length > maxNumber) {
            error.textContent = 'error of calculator - to long number for its precessor'
            setTimeout(()=> {
                error.textContent = ""
            }, 2000)
        } else {
            sectionMiddle__p.textContent = sectionMiddle__p.textContent + e.target.value
            // num1 = parseFloat(sectionMiddle__p.textContent)
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



const mainAction = (e) => {
    let operator

    // 1. empty memoNumber and typed sesectionMiddle__p
    if (memoNumber.textContent === '' && sectionMiddle__p.textContent != '') {
        memoNumber.textContent = sectionMiddle__p.textContent + e.target.value
        sectionMiddle__p.textContent = ''
    } 
    // divide on 0
    else if (memoNumber.textContent.charAt(memoNumber.textContent.length - 1) == '/' && sectionMiddle__p.textContent == 0) {
        memoNumber.textContent = '';
        sectionMiddle__p.textContent = ''
        error.textContent = "Hey sucker! You can't divide on 0!"
        setTimeout(()=> {
            error.textContent = ""
        }, 2000)
    } 
    // typed memoNumber and typed sectionMiddle__p
    else if (memoNumber.textContent != '' && sectionMiddle__p.textContent != '') {
        num1 = parseFloat(memoNumber.textContent)
        num2 = parseFloat(sectionMiddle__p.textContent)
        operator = memoNumber.textContent.charAt(memoNumber.textContent.length - 1)
        console.log(num1, operator ,num2);
        sectionMiddle__p.textContent = eval(num1 + operator + num2)
        memoNumber.textContent = ''
    }
    // change of operator
   
}

const check = () => {
    console.log(memoNumber.textContent.charAt(memoNumber.textContent.length - 1));
    console.log(sectionMiddle__p.textContent);
}

equalBtn.addEventListener('click', check)
// const plusAction = () => {

//     if(memoNumber.textContent === '' && sectionMiddle__p.textContent != '') {
//         memoNumber.textContent = parseFloat(sectionMiddle__p.textContent) + '+'
//         sectionMiddle__p.textContent = ''
//     } 

//     else if (
//         sectionMiddle__p.textContent == ''
//     ) {
//         console.log('no number');
//         console.log(memoNumber.textContent.slice(-1));
//         memoNumber.textContent = memoNumber.textContent.slice(0, memoNumber.textContent.length -1) + '+'
//     }
    
//     else if (memoNumber.textContent.slice(-1) === '-' ||memoNumber.textContent.slice(-1) === '*' || memoNumber.textContent.slice(-1) === '/' )
//     {
//         console.log('change sign');
//         console.log(memoNumber.textContent.slice(-1));
//         memoNumber.textContent = memoNumber.textContent.slice(0, memoNumber.textContent.length -1) + '+'
//     }
    
    
//     else {
//         if (sectionMiddle__p.textContent === '') {
//             // console.log('error nic');
//         } else {
//             num1 = parseFloat(memoNumber.textContent)
//             num2 = parseFloat(sectionMiddle__p.textContent)
//             memoNumber.textContent = ''
//             sectionMiddle__p.textContent = num1 + num2
//         }
//     }
// }

// const minusAction = () => {
//     if(memoNumber.textContent === '') {
//         memoNumber.textContent = parseFloat(sectionMiddle__p.textContent) + '-'
//         sectionMiddle__p.textContent = ''
//     } else {

//         if (sectionMiddle__p.textContent === '') {
//             // console.log('error nic');
//         } else {
//             num1 = parseFloat(memoNumber.textContent)
//             num2 = parseFloat(sectionMiddle__p.textContent)
//             memoNumber.textContent = ''
//             sectionMiddle__p.textContent = num1 - num2
//         }
//     }
// }


// const equalAction = () => {
//     if (memoNumber.textContent.slice(-1) === '+') {
//         sectionMiddle__p.textContent = parseFloat(memoNumber.textContent) + parseFloat(sectionMiddle__p.textContent)
//         memoNumber.textContent = ''
//     } else if (memoNumber.textContent.slice(-1) === '-') {
//         sectionMiddle__p.textContent = parseFloat(memoNumber.textContent) - parseFloat(sectionMiddle__p.textContent)
//     }
// }





btns.forEach(btn => {
    btn.addEventListener('click', typeAction)
})
btnDel.addEventListener('click', deleteAction)
btnReset.addEventListener('click', resetAction)
actionBtns.forEach(btn => {
    btn.addEventListener('click', mainAction)
})


btnPlus.addEventListener('click', mainAction)
// btnMinus.addEventListener('click', minusAction)
// equalBtn.addEventListener('click', equalAction)