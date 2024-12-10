function fibonacci (n) {
    let fibo = [0,1];
    for(i=2; i<=n; i++){
        let nextValue = fibo[i-2] + fibo[i-1]
        fibo.push(nextValue)
    }
    console.log(fibo)
}

fibonacci(10)