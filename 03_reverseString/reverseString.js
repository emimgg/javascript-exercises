const reverseString = function(word) {
    if (word === "") return "";

    let reversedString = "";

    let i = 1;
    while (reversedString.length != word.length) {
    let lastLetter = word[word.length - i];
    reversedString += lastLetter;
    i++;
    }
    
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
