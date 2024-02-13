const divide = (arr, n) => {
    const subarrays = [];
    let currentSubarray = [];
    let currentSum = 0;
    
    for (const num of arr) {
        if (currentSum + num <= n) {
            currentSubarray.push(num);
            currentSum += num;
        } else {
            subarrays.push(currentSubarray);
            currentSubarray = [num];
            currentSum = num;
        }
    }
    
    if (currentSubarray.length > 0) {
        subarrays.push(currentSubarray);
    }
    
    return subarrays;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
