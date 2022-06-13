function solution1(arr) {
    // 출력될 배열을 담을 새 빈 배열을 생성
    let answer = [];
    // 입력된 배열의 첫 요소를 출력될 배열에 추가
    answer.push(arr[0]);
    // for문을 통해 배열의 인덱스 1부터 탐색
    for (let i = 1; i < arr.length; i++) {
        // if 문을 통해 배열의 앞 수 보다 클 경우 출력될 배열에 추가
        if (arr[i] > arr[i - 1]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

function solution2(arr) {
    const answer = [];
    answer.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) answer.push(arr[i]);
    }

    return answer;
}

let arr = [7, 3, 9, 5, 6, 12];

console.log(solution1(arr));
console.log(solution2(arr));