function camelize(str) {
    // split the string into an array, separated by dashes
    let splitArr = str.split("-");
    // loop through the array, starting at the second word onwards
    for (let i = 1; i < splitArr.length; i++) {
        // take the first letter of the second word, make it uppercase, then add the rest of the word
        splitArr[i] = splitArr[i].charAt(0).toUpperCase() + splitArr[i].slice(1);
    }
    // join the array into a string and return it
    return splitArr.join("");
}