var reverse = function(x) {
    var store = x
    var rev = 0
    do {
        var remind = x%10;
        rev = (rev*10)+remind;
        var x = ~~(x/10);
        if (store == rev){
            console.log("palindrome",rev)
        }else{
            console.log("not a palindrome",rev)
        }
    }
    while (x>0){
    }
    return rev
}
reverse(121);
