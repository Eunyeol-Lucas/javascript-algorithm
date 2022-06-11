function solution(N, arr) {
    let answer = 0;
    const dy = Array.from({ length: N + 1 }, () => 0);
    dy[0] = 1;
    for (let i = 0; i < arr.length; i++) {
        let max = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] < arr[i] && dy[j] > max) max = dy[j];
        }
        dy[i] = max + 1;
        answer = Math.max(answer, dy[i]);
    }
    return answer;
}
const n = 8;
const arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(n, arr));