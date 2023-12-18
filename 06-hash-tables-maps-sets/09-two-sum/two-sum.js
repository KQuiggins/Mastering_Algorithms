function twoSum(nums, target) {
    const numberSet = new Set;



    for (let idx = 0; idx < nums.length; idx++) {
        const complement = target - nums[idx];
        
        if (numberSet.has(complement)) {
            return [nums.indexOf(complement), idx]
        }

        numberSet.add(nums[idx])
    }

    return []
}

module.exports = twoSum;
