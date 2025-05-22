// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

let arr = [1, 2, 3];

function shuffle(arr) {
for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i  + 1))
        let tempNum = arr[i];
        arr[i] = arr[j];
        arr[j] = tempNum;
    }
}

shuffle(arr);