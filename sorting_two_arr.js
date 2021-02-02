var mergeTwoLists = function(l1, l2) {
    var a=[];
    for (var i=0; i<l1.length; i++){
        if (l1[i] > l2[i]){
            swap = l1[i]
            l1[i] = l2[i]
            l2[i] = swap
        }
        a.push(l1[i])
        a.push(l2[i])
    }
    return a;
};
var addarray = mergeTwoLists([1,2,4],[1,3,4])
console.log(addarray)