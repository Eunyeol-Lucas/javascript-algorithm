function solution(M, arr) {
    let answer = 0;
    let dy = Array.from({ length: M + 1 }, () => 0);
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i][1]; j <= M; j++) {
            dy[j] = Math.max(dy[j], dy[j - arr[i][1]] + arr[i][0]);
        }
    }
    answer = Math.max(...dy);
    return answer;
}
let arr = [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
];
console.log(solution(20, arr));