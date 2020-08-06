function print1(n){
    let i = 1
    while(i<=n){
        console.log(i)
        i = i+1
    }
}
function print2(n){
    
    if(n){
        print2(n-1)
        console.log(n)
    }
}

// print1(100000)
print2(100000)