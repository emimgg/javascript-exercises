const sumAll = function(a, b) {

    let numberMin = Math.min(a, b)
    let numberMax = Math.max(a, b);
    let totalSum = 0;

    if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    }

    do {
        totalSum += numberMin;
        numberMin++;
    } while (numberMin <= numberMax);
    
    return totalSum;
};



// Do not edit below this line
module.exports = sumAll;
