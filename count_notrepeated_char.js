var lengthOfLongestSubstring = function(s) {
    var b=[];
    var count1=0;
    for (var i=0; i<s.length; i++){
        var count=0;
        var a=[];
        for (var j=i+1; j<s.length; j++){
            if (s[i] == s[j]){
                count=count+1
            }
        }
        a.push(s[i])
        if (!(a in b)){
            b.push(a)
            count1=count1+1
        }
    }
    console.log(count1)
    console.log(b)
};
lengthOfLongestSubstring("abcabcbb")



// def Substring(s):
//     i=0
//     b=[]
//     count=0
//     while i<len(s):
//         j=0
//         count1=0
//         a=[]
//         while j<len(s):
//             if s[i] == s[j]:
//                 count1=count1+1
//             j=j+1
//         a.append(s[i])
//         # a.append(count1)
//         i=i+1
//         if a not in b:
//             b.append(a)
//             count=count+1
//     print(b)
//     print(count)
// Substring("abcabcbbc")