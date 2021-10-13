function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(thing = "go to the office"){
    return `This Monday, I will ${thing}.`
}

function wrapAdjective(vis = "*"){
    return function(adj = "special"){
        return `You are ${vis}${adj}${vis}!`
    }
}