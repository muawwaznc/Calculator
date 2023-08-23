
input = document.getElementById('input');
numbers = []
operators = []

function btn9(){
    input.value += 9
}
function btn8(){
    input.value += 8
}
function btn7(){
    input.value += 7
}
function btn6(){
    input.value += 6
}
function btn5(){
    input.value += 5
}
function btn4(){
    input.value += 4
}
function btn3(){
    input.value += 3
}
function btn2(){
    input.value += 2
}
function btn1(){
    input.value += 1
}
function btn0(){
    input.value += 0
}
function btnC(){
    input.value = null
    numbers = []
    operators = []
}
function btnPlus(){
    numbers.push(Number(input.value))
    operators.push('+')
    input.value = ""
}
function btnMinus(){
    numbers.push(Number(input.value))
    operators.push('-')
    input.value = ""
}
function btnMul(){
    numbers.push(Number(input.value))
    operators.push('*')
    input.value = ""
}
function btnDiv(){
    numbers.push(Number(input.value))
    operators.push('/')
    input.value = ""
}
function btnEqual(){
    value = Number(input.value);
    numbers.push(value);
    operators.push('=');
    i = 0;
    while(operators.includes('*') || operators.includes('/')){
        if(operators[i] == '*'){
            numbers[i] *= numbers[i + 1]            
            performOperation(i)
        }
        else if(operators[i] == '/'){
            numbers[i] /= numbers[i + 1]            
            performOperation(i)
        }
        else if(operators[i] == '='){
            break
        }
        else{
            i++;
        }        
    }
    i = 0;
    while(operators.includes('+') || operators.includes('-')){
        if(operators[i] == '+'){
            numbers[i] += numbers[i + 1]            
            performOperation(i)
        }
        else if(operators[i] == '-'){
            numbers[i] -= numbers[i + 1]            
            performOperation(i)
        }
        else if(operators[i] == '='){
            break
        }
        else{
            i++;
        }        
    }
    input.value = numbers[0]
    numbers = []
    operators = []
}
function btnBS(){
    let value = input.value;
    value = value.slice(0, -1);
    input.value = value
}
function btnPoint(){
    input.value += '.'
}
function performOperation(i){
    a = numbers.slice(0, i + 1)
    b = numbers.slice(i + 2)
    numbers = a.concat(b)

    a = operators.slice(0, i)
    b = operators.slice(i + 1)
    operators = a.concat(b)
}

function ShowCalculator(){
    document.getElementById('calculator').hidden = false;
    document.getElementById('popover').hidden = true
}

function ShowPopover(){
    document.getElementById('popover').hidden = false;
    document.getElementById('calculator').hidden = true
}