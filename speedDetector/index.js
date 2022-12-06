const form = document.getElementById("form")
const input = document.getElementById("speedDetector")
const message = document.getElementById("message")

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    speedChecker(input) 
});

function speedChecker(input){
    console.log(input)
    console.log(input.value)
    const speedChecker = input.value;

    let points;
    points = (speedChecker - 70) / 5
    if(speedChecker <= 70) {
        return message.textContent = 'OK'
    }else if (speedChecker> 70 && speedChecker < 130){
        return points
    }else if(points >= 12){
        return message.textContent = 'License suspended'
    }
}