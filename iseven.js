function iseven(num){
    if (num%2==0){
        return "even",num;
    }else{
        return "odd",num;
    }
}
var even_odd = iseven(5);
console.log(even_odd)