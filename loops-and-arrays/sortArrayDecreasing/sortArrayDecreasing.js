function sortArrayDecreasing (arr) {
    return arr.sort((a,b) => b - a);
}

// A negative value indicates that a should come before b.
// A positive value indicates that a should come after b.
// Zero or NaN indicates that a and b are considered equal

module.exports = {
    sortArrayDecreasing
};