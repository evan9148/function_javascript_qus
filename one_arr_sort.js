var mergeKLists = function(lists) {
    var a=[];
    for (var i=0; i<lists.length; i++){
        for (var j=0; j<lists.length; j++){
            if (lists[i][j]>lists[i][j]){
                swap = lists[i][j]
                lists[i][j] = lists[i+1][j]
                lists[i+1][j] = swap
            }
        a.push(lists[i][j])
        }
    }
    return a;
};
var onearrsort = mergeKLists([[1,4,5],[1,3,4],[2,6]])
console.log(onearrsort)