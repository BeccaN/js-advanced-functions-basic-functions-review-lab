// Your code here
function saturdayFun(param="roller-skate") {
    return `This Saturday, I want to ${param}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(param1="*") {
    return function(param2="special") {
        return `You are ${param1}${param2}${param1}!`
    }
}

const Calculator = {
    add: function(num1,num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    }
}

let actionApplyer = function(int, functions) {
    let num = int
    for (let i=0; i < functions.length; i++){
        num = functions[i](num)
    }
    return num
}