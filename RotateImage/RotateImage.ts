function rotate(matrix: number[][]): void {
    let n = matrix.length

    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {

            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp
        }
    }
    for (let i = 0; i < n; i++) {
        matrix[i].reverse()

    }
};



rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])