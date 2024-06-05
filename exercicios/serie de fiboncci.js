let fib = 1
let n = 1 
let a = 0

for (let i = 1 ; i < 15 ; i ++){
    fib += a;
     a = n;
     n = fib;
     console.log(fib);
}
