/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const formElement = document.querySelector('#quiz-form')
const answerInputs = [...document.querySelectorAll('.answer')]
const questionElements = [...document.querySelectorAll('.question-item')]
const alertElement = document.querySelector('#alert')

// TODO: 3. Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
formElement.addEventListener('submit', e => {
    e.preventDefault()
    const selectedAnswers = answerInputs.filter(answer => answer.checked)
    console.log(selectedAnswers)
    answerInputs.forEach(answer => answer.closest('.question-item').classList.add('incorrect'))
    selectedAnswers.forEach(answer => {
        const parentElement = answer.closest('.question-item')
        parentElement.classList.add('incorrect')
        if(answer.value === 'true') {
            parentElement.classList.remove('incorrect')
            parentElement.classList.add('correct')
            console.log(parentElement)
        } else {
            parentElement.classList.add('incorrect')
            console.log(parentElement)
        }
    })
    const allCorrect = selectedAnswers.every(answer => answer.value === 'true')
    const allAnswered = questionElements.length === selectedAnswers.length
    let alertActive = false
    if(allCorrect && allAnswered) {
        alertElement.classList.add('active')
        alertActive = true
    }
    setTimeout(() => {
        alertElement.classList.remove('active')
        alertActive = false
    }, 1000)
})