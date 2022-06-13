function solution1(arr) {
    // 최종 점수를 저장한 출력 변수 answer를 0으로, 추가되는 최소 점수를 1로 선언
    let answer = 0,
        score = 1;
    // for문을 통해 배열 요소 탐색
    for (let x of arr) {
        // if문을 통해 배열의 요소가 1일 경우, 최종 점수에 score를 추가
        if (x === 1) {
            answer += score;
            // 연속 정답일 경우 가산점이 붙으므로 1 추가
            score++;
            // 배열의 요소가 1이 아닐 경우, score를 1로 초기화
        } else score = 1;
    }

    return answer;
}

function solution2(arr) {
    let answer = 0;
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            score++;
            answer += score;
        } else {
            score = 0;
        }
    }
    return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution1(arr));
console.log(solution2(arr));