const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')

questions.forEach(question => {
    question.addEventListener('click', () => {
        let answer = question.nextElementSibling
        let img = question.firstElementChild
        if (answer.style.display === 'none') {
            answers.forEach(answer => answer.style.display = 'none')
            questions.forEach(question => question.firstElementChild.src = 'images/plus.png')
            answer.style.display = 'block'
            img.src = "images/close.png"
        } else {
            answer.style.display = 'none'
            img.src = "images/plus.png"
        }
    })
})