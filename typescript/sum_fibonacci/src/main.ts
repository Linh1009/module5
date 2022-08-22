
// @ts-ignore
function Fibonacci(n: number) {
    if (n < 0) {
        return -1;
    }
    else if (n ==0 || n ==1){
        return n;
    }else {
          return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}
let n: number = 10;
let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += Fibonacci(i)
    }

console.log("Tổng của dãy số fibonacci là " + sum )

