// Your code here
function saturdayFun(act = "roller-skate"){
    return `This Saturday, I want to ${act}!`;
}

function mondayWork(str = "go to the office"){
    return `This Monday, I will ${str}.`;
}

function wrapAdjective(str = "*"){
    return (param = "special") => {
        return `You are ${str}${param}${str}!`
    };
}

const Calculator = {
    add : function add() {return 1+3},
    subtract : function subtract() {return 1-3},
    multiply : function multiply() {return 1*3},
    divide : function divide() {return 10/5}
}

function actionApplyer(int, arr){
    return arr.reduce((acc, func) => func(acc), int);
}
