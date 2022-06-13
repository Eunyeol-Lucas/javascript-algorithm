function solution1(arr) {
    // 배열의 길이를 n 변수에 선언
    let n = arr.length;
    // 인자로 전달받은 배열의 길이 만큼 1로 구성된 새로운 배열을 생성
    let answer = Array.from({ length: n }, () => 1);
    // for 문을 돌면서 인자로 전달받은 배열의 요소를 탐색
    for (let i = 0; i < n; i++) {
        // 2중 for문을 통해 해당 인덱스의 점수가 인자로 전달받은 배열에서 순위를 탐색
        for (let j = 0; j < n; j++) {
            // 비교되는 값보다 작을 경우 answer에 선언한 배열의 해당 인덱스 요소를 1씩 증가
            if (arr[j] > arr[i]) answer[i]++;
        }
    }

    return answer;
}

function solution2(arr) {
    const n = arr.length;
    const answer = Array.from({ length: n }, () => 1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i] < arr[j]) answer[i]++;
        }
    }

    return answer;
}

let arr = [87, 89, 92, 92, 76, 72];

console.log(solution1(arr));
console.log(solution2(arr));