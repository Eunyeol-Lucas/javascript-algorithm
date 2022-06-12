function solution(N) {
    let answer = 0;
    let dy = Array.from({ length: N + 1 }, () => 0);
    dy[1] = 2;
    dy[2] = 3;
    for (let i = 3; i <= N; i++) {
        dy[i] = dy[i - 2] + dy[i - 1];
    }
    answer = dy[N];
    return answer;
}

const n = 7;
console.log(solution(n));