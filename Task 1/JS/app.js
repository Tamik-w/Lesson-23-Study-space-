const arr = [1,2,3,4,5,6,7,8,9,10];
function countSum(number) {
    if(number === 0){
        return number
    }else {
        return number + countSum(--number)
    };
}
console.log(countSum(arr[arr.length - 1]))



const arr2 = [1,2,3,4,5,6,7,8,9,10];
function countSum(number) {
    return number === 0 ? number : number + countSum(--number);
}
console.log(countSum(arr2[arr2.length - 1]))