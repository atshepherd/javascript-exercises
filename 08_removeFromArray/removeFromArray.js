const removeFromArray = function(array = []) {
        
    for(j=1; j<arguments.length; j++) {
        for (let i=0; i<array.length; i++) {
            if (array[i] == arguments[j]) {
                array.splice(i,1);
            }
            else if(array[i] != arguments[j]) {
                continue;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
