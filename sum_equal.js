var twoSum = function(nums, target) {
    for (var i=0; i<nums.length; i++){
        var a=[];
        for (var j=i+1; j<nums.length; j++){
            var sum=nums[i]+nums[j]
            if (sum == target){
                a.push(i)
                a.push(j)
            }
        }
    return(a);
    }
};
var num = twoSum([2,7,11,15],9)
console.log(num)
    