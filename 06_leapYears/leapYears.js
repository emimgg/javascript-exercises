const leapYears = function(year) {
    
    // let isLeapYear = year % 4 === 0 && year % 100 !== 0 ? "is a leap year" : "is not a leap year";

    let isLeapYear = year % 400 === 0 ? true 
    : year % 4 === 0 ? true : false;

    console.log(isLeapYear);
    return isLeapYear;
    

};

leapYears(2000);
// Do not edit below this line
module.exports = leapYears;
