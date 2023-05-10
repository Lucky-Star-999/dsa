let arr = [6, -3, 10, 2, -7, 4, 1, 8, -5];

function insertionSort(arr) {
	// Insertion sort code here
	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			arr[j] = key;
			j--;
		}
	}

	return arr;
}

console.log(insertionSort(arr));
