function reverse(num){
    var rev = 0
    do {
        var remind = num%10;
        var rev = (rev*10)+remind;
        var num = ~~(num/10);
    }
    while (num>0){
    }
    return rev; 
    
}
var reverse_num = reverse(32243);
console.log(reverse_num)

