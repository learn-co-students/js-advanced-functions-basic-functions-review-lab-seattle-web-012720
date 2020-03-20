
const Calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2
  },
  multiply: function(num1,num2) {
    return num1 * num2
  },
  divide: function(num1,num2) {
    return num1 / num2;
  }
}

const actionApplyer = function(start, fnArray){
  let end = start
  for (let i=0; i<fnArray.length; i++){
      end = fnArray[i](end)
  }
  return end
}

// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}


mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(flair="*"){
    return function inner(x="special"){
        return `You are ${flair}${x}${flair}!`
    }
}








