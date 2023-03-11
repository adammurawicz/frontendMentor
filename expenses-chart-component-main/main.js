const charts = document.querySelectorAll('.figureDay__figure')

const getFigure = () => {
    
    const monValue  = charts[0].getAttribute('value');
    const tueValue  = charts[1].getAttribute('value');
    const wedValue  = charts[2].getAttribute('value');
    const thuValue  = charts[3].getAttribute('value');
    const friValue  = charts[4].getAttribute('value');
    const satValue  = charts[5].getAttribute('value');
    const sunValue  = charts[6].getAttribute('value');
    const theHighestValue = Math.max(monValue, tueValue, wedValue, thuValue, friValue, satValue, sunValue)
    
    for(chart of charts) {
        let value = [chart.getAttribute('value') * 2];
        chart.style.height = `${value}px`
    }
    
    let dayChart

    if(monValue == theHighestValue) {
        dayChart = document.querySelector('.figureDay--mon .figureDay__figure')
    } else if (tueValue == theHighestValue) {
        dayChart = document.querySelector('.figureDay--tue .figureDay__figure')
    } else if (wedValue == theHighestValue) {
        dayChart = document.querySelector('.figureDay--wed .figureDay__figure')
    } else if (thuValue == theHighestValue) {
        dayChart = document.querySelector('.figureDay--thu .figureDay__figure')
    } else if (friValue == theHighestValue) {
        dayChart = document.querySelector('.figureDay--fri .figureDay__figure')
    } else if (satValue == theHighestValue) {
        dayChart = document.querySelector('.figureDay--sat .figureDay__figure')
    } else if (sunValue == theHighestValue) {
        dayChart = document.querySelector('.figureDay--sun .figureDay__figure')
    } 

    dayChart.style.backgroundColor = 'hsl(186, 34%, 60%)'
}


window.addEventListener('DOMContentLoaded', getFigure)


