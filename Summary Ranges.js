Summary Ranges:
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let output=[];
    let start=nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i+1]!=nums[i]+1){
            if(nums[i]==start){
                output.push(String(nums[i]));
            }else{
                output.push(start+"->"+nums[i]);
            }
            start=nums[i+1];
        }
    }return output;
};