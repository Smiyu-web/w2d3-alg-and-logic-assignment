// Miyu, Yuri

let nums = [5, 7, 9, 4, 1, 8, 25, 3];

let otherNums = [46, 2, 34, 90, 56, 27];

let finalTest = [5, 7, 98, 36, 47, 45, 5, 2]



const sortedNum = function (arr) {
    for ( let i = 0; i < arr.length; i++ ){
        for ( let j = arr.length-1; j > i; j-- ) {
            if ( arr[j] < arr[j - 1] ) {
            let third = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = third;
            } 
        }
    }
}
    

sortedNum(nums)
sortedNum(otherNums)
sortedNum(finalTest)


console.log(nums);
console.log(otherNums);
console.log(finalTest);
