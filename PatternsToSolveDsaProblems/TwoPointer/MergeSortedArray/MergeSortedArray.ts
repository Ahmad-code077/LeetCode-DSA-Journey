
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let p = m + n - 1;
    let p1 = m - 1;
    let p2 = n - 1
    while (p1 >= 0 && p2 >= 0) {

        let firstArrayNum = nums1[p1], secondArrayNum = nums2[p2];
        if (secondArrayNum > firstArrayNum) {
            nums1[p] = secondArrayNum
            p2--
        } else {
            nums1[p] = firstArrayNum
            p1--
        }
        p--
    }
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}

let nums1 = [2, 5, 6, 0, 0, 0], m = 3
let nums2 = [1, 3, 4], n = 3




merge(nums1, m, nums2, n)
console.log(nums1) // [1,2,2,3,5,6]
