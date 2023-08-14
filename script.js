
input = document.getElementById('input');
numbers = []
operators = ['+']
// isPointBtn = false

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
    input.value = ""
    numbers = []
    operators = ['+']
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
    ans = 0
    numbers.push(Number(input.value))
    operators.push('=')
    for(i = 0; i <= numbers.length; i++){
        if(operators[i] == '+'){
            ans += numbers[i]
        }
        else if(operators[i] == '-'){
            ans -= numbers[i]
        }
        else if(operators[i] == '*'){
            ans *= numbers[i]
        }
        else if(operators[i] == '/'){
            ans /= numbers[i]
        }
        else if(operators[i] == '='){
            break
        }
    }
    input.value = ans
    numbers = []
    operators = ['+']
}
function btnBS(){
    let value = input.value;
    value = value.slice(0, -1);
    input.value = value
}
function btnPoint(){
    // is
    // input.value = (Number(input.value) + 0.1)
}