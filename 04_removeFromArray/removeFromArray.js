const removeFromArray = function(array, ...args) {

    const itemsToRemove = Array.from(arguments).slice(1);
    console.log(itemsToRemove);

    for (let item of itemsToRemove) {
        let index = array.indexOf(item);
        let remove = array.splice(index, 1);
    }

    console.log(array + "array");
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
