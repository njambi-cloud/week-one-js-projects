const input = document.getElementById('marks')
let gradeInput = document.querySelector('button')
const form = document.getElementById('form')
const message = document.querySelector('li')
// const message = document.getElementById('grade')

form.addEventListener("submit", (event) => {
    event.preventDefault()
    validate(input);
})
function validate(input){
    console.log(input)
    console.log(input.value)
    const checkInput = input.value
    if (checkInput > 79 && checkInput < 100){
        message.textContent = `You have an A`
        console.log('A');
    }
    if (checkInput > 60 && checkInput <= 79){
        message.textContent = `You have an B`
        console.log('B');
    }
    if (checkInput > 49 && checkInput <= 59){
        message.textContent = `You have an C`
        console.log('C');
    }
    if (checkInput > 40 && checkInput <= 49){
        message.textContent = `You have an D`
        console.log('D');
    }
    if (checkInput < 40){
        message.textContent = `You have an E`
        console.log('E');
    }

}