const removeFromArray = function(array, ...args) {


const toRemove = Array.from(arguments).slice(1);
const newArray = array.filter(function(words) {
    return !toRemove.includes(words);
});
return newArray;

}

// Do not edit below this line
module.exports = removeFromArray;
