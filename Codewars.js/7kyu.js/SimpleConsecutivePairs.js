// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.


function pairs(ar){
let arry = 0
  
    for(let i = 0; i <= ar.length; i+=2){
        if (ar[i] == ar[i+1] +1 || ar[i] == ar[i+1]-1){
            arry += 1 
            console.log(arry)

        }
    }
    return arry
}

console.log(pairs([1,2,5,8,-4,-3,7,6,5]))
// console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]))
// console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]))
