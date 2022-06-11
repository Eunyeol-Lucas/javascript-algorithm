function solution1(arr, M) {
    let answer = 0;
    for (let i = 1; i <= arr.length; i++) {
        while (M - arr[arr.length - i] >= 0) {
            M -= arr[arr.length - i];
            answer++;
        }
    }

    return answer;
}

function solution2(arr, M) {
    let answer = 0;
    const dy = Array.from({ length: M + 1 }, () => +1e9);
    dy[0] = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i]; j <= M; j++) {
            dy[j] = Math.min(dy[j], dy[j - arr[i]] + 1);
        }
    }
    answer = dy[M];

    return answer;
}

const N = 3,
    arr = [1, 2, 5],
    M = 15;
console.log(solution1(arr, M));
console.log(solution2(arr, M));