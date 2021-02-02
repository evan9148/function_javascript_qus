var isMatch = function(s, p) {
    for (var i=0; i<s.length; i++){
        if (p == s){
            var a = s+""
            console.log(true,a)
            break
        }else {
            console.log(false,a)
            break
        }
    }
};
isMatch("aab","c*a*b")