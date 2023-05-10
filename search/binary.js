// Maybe, you wonder why we are calculating the middle index this way,
//     we can simply add the lower and higher index and divide it by 2 like
//      mid = (low + high)/2;
// But if we calculate the middle index like this, it fails for larger values of int variables.
// Specifically, it fails if the sum of low and high is greater than the maximum positive int value(2^31 - 1 ).
// The sum overflows to a negative value and the value stays negative when divided by 2. 
// Here to calculate “mid” we are doing the following:
//      mid = low + (high - low)/2;

let arr = [-7, -5, -3, 1, 2, 4, 6, 8, 10];

function binarySearch(arr, searchVal) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (arr[mid] == searchVal) {
            return mid;
        }

        if (arr[mid] > searchVal) {
            high = mid - 1;
        }

        if (arr[mid] < searchVal) {
            low = mid + 1;
        }
    }

    return -1;
}

console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(`value: ${arr[i]}, Index: ${binarySearch(arr, arr[i])}`);
}
