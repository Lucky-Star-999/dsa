let arr = [6, -3, 10, 2, -7, 4, 1, 8, -5];

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // Find min index
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }

            // Swap
            if (minIdx != i) {
                let tmp = arr[i];
                arr[i] = arr[minIdx];
                arr[minIdx] = tmp;
            }
        }
    }

    return arr;
}

console.log(selectionSort(arr));