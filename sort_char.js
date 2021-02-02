var a = "evanjaline";
var empty_arr = [];
for (var i=0; i<a.length; i++){
    empty_arr.push(a[i])
}
console.log(empty_arr)

for (var n=0; n<empty_arr.length; n++){
    var s="";
    for (var m=n+1; m<empty_arr.length; m++){
        if (empty_arr[n]>empty_arr[m]){
            var swap = empty_arr[n];
            empty_arr[n] = empty_arr[m]
            empty_arr[m] = swap;
        }
    }
    s += " " + empty_arr[n];
    console.log(s)
}
