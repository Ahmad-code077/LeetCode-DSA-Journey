function generatePascalTriangle(numRows: number): number[][] {
    let mainArray: number[][] = [];
    for (let i = 0; i < numRows; i++) {
        let rows: number[] = []
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                rows.push(1)
            } else {
                let leftValue: number = mainArray[i - 1][j - 1];
                let rightValue: number = mainArray[i - 1][j]
                let sum = leftValue + rightValue
                rows.push(sum)
            }
        }
        mainArray.push(rows)
    }
    return mainArray
};


console.log(generatePascalTriangle(5));

