function divideAndConquerSum(arr) {
    
    function helper(start, end) {
        if (start > end) return 0;
        if (start === end) return arr [start];

        const third = Math.floor((end - start + 1) / 3);
        const mid1 = start + third;
        const mid2 = start + 2 * third + 1;

        return (
            helper(start, mid1 - 1) +
            helper(mid1, mid2 - 1) +
            helper(mid2, end)
        );

    }
    return helper(0, arr.length - 1);
}


