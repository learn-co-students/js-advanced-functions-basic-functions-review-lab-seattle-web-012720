// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(str = '*') {
    return ((param='special') => `You are ${str}${param}${str}!`)
}

const Calculator = {
    add: function() {
        return 1 + 3
    },

    subtract: function() {
        return 1 - 3
    },

    multiply: function() {
        return 1*3
    },

    divide: function() {
        return 10 / 5
    }
}

function actionApplyer(int, arr) {
    if (arr.length === 0 ) {
        return int;
    } 
    else {
        return actionApplyer(arr[0](int), arr.slice(1))
    }
}