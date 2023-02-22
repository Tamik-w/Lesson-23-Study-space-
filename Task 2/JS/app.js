function deepCount(arr) {
let count = 0;
        for (let i = 0; i < arr.length; i++) {
                
                // 1ST WAY(using if else)--
                // if (Array.isArray(arr[i])) {
                //         count += deepCount(arr[i]);
                // } else {
                //         count++;
                // }

                // 2ND WAY(using ? :)--
                Array.isArray(arr[i]) ? count += deepCount(arr[i]) : count++;
        }
return count;
}
const arr = [1,[2,3],2,3,[23,[23,43]]];
const count = deepCount(arr);
console.log(count);