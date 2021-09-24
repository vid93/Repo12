function rangeOfNumbers(startN, endN){
    if(startN > endN){
        return "The starting number will always be less than or equal to the ending number"
    }else if(startN === endN){
        return [startN];
    }
    else{
        var arr = rangeOfNumbers(startN, endN - 1);
        arr.push(endN)
        return arr;
    }
}

console.log(rangeOfNumbers(3, 8));
module.exports = rangeOfNumbers;