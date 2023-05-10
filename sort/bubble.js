let arr = [6, -3, 10, 2, -7, 4, 1, 8, -5];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
                swapped = true;
            }
        }

        if (swapped == false) {
            break;
        }
    }

    return arr;
}

console.log(bubbleSort(arr));
