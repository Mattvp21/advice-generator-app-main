const number = document.getElementById('number');
const advice = document.getElementById('advice');
const dice = document.getElementById('dice')



async function getAdvice() {
    const apiUrl = 'https://api.adviceslip.com/advice'
    try {
        const response = await fetch(apiUrl)
        data = await response.json()
        randomAdvice()
    } catch (error) {
        
    }
}

function randomAdvice() {
    let dataSlipNumber = data.slip.id
    let dataSlipAdvice = data.slip.advice;
    number.textContent = dataSlipNumber
    advice.textContent= dataSlipAdvice;
}

getAdvice();

dice.addEventListener('click', () => {
    console.log('click')
    getAdvice()
})