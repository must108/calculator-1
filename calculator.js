let display = document.getElementById("display");
let calc = [];
let numCount = 0;
let decimalUsed = false;
let opClicked = false;

display.innerHTML += "0";

function Getting(id){
    return document.getElementById(id);
}

function clickedNum(string){
    if(numCount === 0 || opClicked){
        if(string === '.' && !decimalUsed){
            display.innerHTML = "."
            decimalUsed = true;
            numCount = 1;
            opClicked = false;
        } else if(string !== '.'){
            display.innerHTML = string;
            numCount = 1;
            opClicked = false;
        }
    } else {
        if(string === '.' && !decimalUsed){
            display.innerHTML += string;
            decimalUsed = true;
            opClicked = false;
        } else if(string !== '.'){
            display.innerHTML += string;
            opClicked = false;
        }
    }
}

function clickedOp(string){
    calc.push(display.textContent);
    opClicked = true;
    decimalUsed = false;

    if(string === "add"){
        addition.id = "pressed";
        subtract.id = "sub";
        multiply.id = "multi";
        division.id = "divid";
    } else if(string === "sub"){
        subtract.id = "pressed";
        addition.id = "add";
        multiply.id = "multi";
        division.id = "divid";
    } else if(string === "mul"){
        multiply.id = "pressed";
        addition.id = "add";
        subtract.id = "sub";
        division.id = "divid";
    } else if(string === "divi"){
        division.id = "pressed";
        addition.id = "add";
        subtract.id = "sub";
        multiply.id = "multi";
    }
}

function equals(){
    calc.push(display.textContent);
    let num1 = parseFloat(calc[0]);
    let num2 = parseFloat(calc[1]);
    numCount = 0;

    if(addition.id === "pressed"){
        display.innerHTML = num1 + num2;
    } else if(subtract.id === "pressed"){
        display.innerHTML = num1 - num2;
    } else if(multiply.id === "pressed"){
        display.innerHTML = num1 * num2;
    } else if(division.id === "pressed"){
        display.innerHTML = num1 / num2;
    }

    resetOp();
}

function resetOp(){
    addition.id = "add";
    subtract.id = "sub";
    multiply.id = "multi";
    division.id = "divid";
}

function clearAll(){
    display.textContent = "0";
    numCount = 0;
    decimalUsed = false;
    opClicked = false;
    resetOp();
    calc = [];
}

document.addEventListener("keyup", e => {
    if(e.key === "1"){
        clickedNum(1);
    } else if(e.key === "2"){
        clickedNum(2);
    } else if(e.key === "3"){
        clickedNum(3);
    } else if(e.key === "4"){
        clickedNum(4);
    } else if(e.key === "5"){
        clickedNum(5);
    } else if(e.key === "6"){
        clickedNum(6);
    } else if(e.key === "7"){
        clickedNum(7);
    } else if(e.key === "8"){
        clickedNum(8);
    } else if(e.key === "9"){
        clickedNum(9);
    } else if(e.key === "0"){
        clickedNum(0);
    } else if(e.key === "Enter"){
        equals();
    } else if(e.key === "="){
        clickedOp("add");
    } else if(e.key === "-"){
        clickedOp("sub");
    } else if(e.key === "*"){
        clickedOp("mul");
    } else if(e.key === "/"){
        clickedOp("divi");
    } else if(e.key === '.'){
        clickedNum('.');
    } else if(e.key === "Escape"){
        clearAll();
    }
    
});

let addition = Getting("add");
let subtract = Getting("sub");
let multiply = Getting("multi");
let division = Getting("divid");
let one = Getting("one");
let two = Getting("two");
let three = Getting("three");
let four = Getting("four");
let five = Getting("five");
let six = Getting("six");
let seven = Getting("seven");
let eight = Getting("eight");
let nine = Getting("nine");
