// The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

// Example:

function fibonacci(n) {
    let Fib = [0,1,1]
  if (n <= 0 )
  return []
  
  else{
  
  for(let i = 3; i< n; i++){
  Fib.push(Fib[i-1] + Fib[i-2])
  }
}
  return Fib
}

console.log(fibonacci(5).length===5, "Expected 5 elements");
