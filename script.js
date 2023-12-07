const formElement = document.querySelector('#quiz-form')
const answerInputs = [...document.querySelectorAll('.answer')]
const questionElements = [...document.querySelectorAll('.question-item')]
const alertElement = document.querySelector('#alert')

formElement.addEventListener('submit', e => {
    e.preventDefault()
    const selectedAnswers = answerInputs.filter(answer => answer.checked)
    
    answerInputs.forEach(answer => answer.closest('.question-item').classList.add('incorrect'))
    selectedAnswers.forEach(answer => {
        const parentElement = answer.closest('.question-item')
        parentElement.classList.add('incorrect')
        if(answer.value === 'true') {
            parentElement.classList.remove('incorrect')
            parentElement.classList.add('correct')
        } else {
            parentElement.classList.add('incorrect')
        }
    })

    const allCorrect = selectedAnswers.every(answer => answer.value === 'true')
    const allAnswered = questionElements.length === selectedAnswers.length
    let alertActive = false
    if(allCorrect && allAnswered) {
        alertElement.classList.add('active')
        alertActive = true
    }
    if(alertActive) {
        setTimeout(() => {
            alertElement.classList.remove('active')
            alertActive = false
        }, 1000)
    }
})