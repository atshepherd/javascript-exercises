// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.


function unique(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
            if (!uniqueArray.includes(arr[i])) {
                uniqueArray.push(arr[i]);
            }
    }
    return uniqueArray;
}

module.exports = {
    unique
}

/* modifies the original array:
function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j,1);
            }
        }
    }
  return arr;
} 
*/

/* does not use .includes
function unique(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] !== arr[j] && uniqueArray.every(val => val !== arr[i])) {
                uniqueArray.push(arr[i]);
            }
        }
    }
    return uniqueArray;
}
 */