// code your solution here
function saturdayFun(argu = 'roller-skate'){
    return "This Saturday, I want to " + argu + "!"; 
}

function mondayWork(argu = 'go to the office'){
    return `This Monday, I will ${argu}.`
}

function wrapAdjective(v = "*"){
    return function(argu = "special"){
        return  `You are ${v}${argu}${v}!`
    }
}