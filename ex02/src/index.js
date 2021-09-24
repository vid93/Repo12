function myCounter(n){
    if(n < 1){
        return [];
    }else{
        const cArr = myCounter(n - 1);
        cArr.unshift(n);
        return cArr;
    }
}

console.log(myCounter(5));
module.exports = myCounter;