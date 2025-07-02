const palindromes = function (string) {
    let arr = [];
    for (i=0; i<string.length; i++) {
        if(string[i] == "!" || string [i] == "." || string[i] == "?") {
        continue;
        }
        arr[i] = string[i];
    }
    let reverseArr=[];
    j = 0;
    for (i=(arr.length - 1); i >= 0; i--) {
        reverseArr[j] = arr[i];
        j++;
    }
    
    for(i=0; i<arr.length; i++) {
        if(arr[i] != reverseArr[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
