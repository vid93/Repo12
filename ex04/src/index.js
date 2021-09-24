function sumFibonacci(num){
    var prev = 1;
    var curr = 1;
    var sum = 0
    if(num <= 0){
        return 0;
    }else{
        for(curr; curr <= num; curr += prev){
            if(curr % 2 !== 0){
                sum += curr;
            }
            prev = curr - prev;
        }
    }
    return sum;
}

console.log(sumFibonacci(20));
module.exports = sumFibonacci;