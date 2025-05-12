const removeFromArray = function(array = [], number) {
    const newArray = [];
    for (let i=0; i< array.length; i++) {
        if (array[i] == number) {
            continue;
        }
        else if(array[i] != number) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
