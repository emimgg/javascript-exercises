const sumAll = function(min, max) {

    let numberMin = parseInt(min);
    let numberMax = parseInt(max);
    let totalSum = 0;

    do {
        totalSum += numberMin;
        numberMin++;
    } while (numberMin <= numberMax);

    console.log(totalSum);
    return totalSum;
};



// Do not edit below this line
module.exports = sumAll;
