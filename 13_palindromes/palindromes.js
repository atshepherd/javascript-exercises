const palindromes = function (string) {
    let arr = [];
    let spliceString = string.replace(/[,.!\s]/g, "");
    console.log(spliceString);
    let newString = spliceString.toLowerCase();
    for (i=0; i<newString.length; i++) {
        arr[i] = newString[i];
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
