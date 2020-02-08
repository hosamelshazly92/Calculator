//get number

function getNumber(number) {
    var inputNumber = document.getElementById("input");
    switch(number) {
        case 1:
        inputNumber.value += "1";
        break;
            
        case 2:
        inputNumber.value += "2";
        break;
            
        case 3:
        inputNumber.value += "3";
        break;
            
        case 4:
        inputNumber.value += "4";
        break;
            
        case 5:
        inputNumber.value += "5";
        break;
            
        case 6:
        inputNumber.value += "6";
        break;
            
        case 7:
        inputNumber.value += "7";
        break;
            
        case 8:
        inputNumber.value += "8";
        break;
            
        case 9:
        inputNumber.value += "9";
        break;
            
        case 0:
        inputNumber.value += "0";
        break;     
    }
}


//get sign

function getSign(sign) {
    var inputSign = document.getElementById("input");
    switch(sign) {
        case "/":
        inputSign.value += "/";
        break;
        
        case "*":
        inputSign.value += "*";
        break;
            
        case "-":
        inputSign.value += "-";
        break;
            
        case "+":
        inputSign.value += "+";
        break;
            
        case ".":
        inputSign.value += ".";
        break;
    }
}

//clear input

function clearInput() {
    document.getElementById("input").value = "";
    document.getElementById("input2").value = "";
}

//backspace

function backspace() {
    var inputValue = document.getElementById("input");
    var x = inputValue.value;
    if(x.length > 0) {
        x = x.substring(0, x.length-1);
        inputValue.value = x;
    }
}



function calculate() {
    var inputValue = document.getElementById("input");
    answer = +eval(inputValue.value);
    document.getElementById("input2").value = answer;
}
































