function addition(a,b){
    return console.log(`Addition of ${a} and ${b} = `, a + b);
}

addition(2,4)

function subtraction(a,b){
    return console.log(`Subtraction of ${a} and ${b} = `, a - b);
}

subtraction(2,4)

function multiplication(a,b){
    return console.log(`multiplication of ${a} and ${b} = `, a * b);
}

multiplication(2,4)

function division(a,b){
    return console.log(`Division of ${a} by ${b} = `, a / b);
}

division(2,4)

// ::::::::::::::::::::  calculator UI ::::::::::::::::::::::

function addToDisplay(value){
    document.getElementById('display').value += value
}

function calculate(){
    let expression = document.getElementById('display').value
    try {
        let res = eval(expression)
        document.getElementById('display').value = res
    } catch (error) {
        alert('Please enter valid input')
    }
}

function clearDisplay(){
    document.getElementById('display').value = ''
}