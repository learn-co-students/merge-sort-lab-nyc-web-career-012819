// findMinAndRemoveSorted([2, 3, 4, 5, 6, 7]);
function findMinAndRemoveSorted(array) {
    let minNum = array[0];
    let minIdx = 0;
    for (let i = 1; i < array.length; i++) {
        if (minNum > array[i]) {
            minNum = array[i];
            minIdx = i;
        }
    }
    array.splice(minIdx, 1);
    return minNum;
}
// console.log('final', merge([3,2,4,1], [7,6,8,5]));
function merge(array1, array2) {
    // console.log(array1, array2);
    const sortedArray = [];
    while (array1.length !== 0 && array2.length !== 0) {
        array1[0] < array2[0]
        ? sortedArray.push(findMinAndRemoveSorted(array1))
        : sortedArray.push(findMinAndRemoveSorted(array2))
    }
    
    return sortedArray.concat(array1).concat(array2);
}
// console.log(mergeSort([12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]));
function mergeSort(array) {
    const midPoint = array.length/2;
    const firstHalf = array.slice(0, midPoint);
    const secondHalf = array.slice(midPoint);
    // console.log(array, midPoint, firstHalf, secondHalf);
    // array.length < 2 
    //     ? array
    //     : merge(mergeSort(firstHalf), mergeSort(secondHalf));
    if (array.length < 2) {
        return array;
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}
//