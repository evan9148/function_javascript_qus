var addTwoNumbers = function(l1, l2) {
    for (var i=0; i<l1.length; i++){
        var a=[];
        for (var j=0; j<l2.length; j++){
            sum = l1[i] + l2[j]
            a.push(sum)
        }
        
    }
    console.log(a)
};
addTwoNumbers([3,4,2],[4,6,5])