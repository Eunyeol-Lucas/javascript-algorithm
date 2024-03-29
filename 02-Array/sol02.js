function solution1(arr) {
    // 가장 첫 번째 학생은 무조건 선생님이 볼 수 있으므로, 출력변수를 1부터 시작
    let answer = 1,
        // 앞 사람보다 키가 작을 경우 선생님이 볼 수 없으므로, 앞에서 부터 차례대로 상대적으로 큰 키를 확인
        // 첫 번째 학생보다 큰 키를 가진 학생이 앞에 없으므로 첫 번째 학생의 키부터 시작
        max = arr[0];
    // for 문을 통해 배열에 있는 학생들의 키를 탐색
    for (let i = 1; i < arr.length; i++) {
        // if 문을 통해 현재까지 가장 큰 키긔 값보다 더 큰 키가 있는 지 확인
        if (arr[i] > max) {
            // 키가 큰 학생이 있다면 출력 변수를 1 증가하고, 가장 큰 키를 현재 값으로 교체
            max = arr[i];
            answer++;
        }
    }
    return answer;
}

function solution2(arr) {
    let answer = 0,
        tmp;
    if (arr.length) {
        answer++;
        tmp = arr[0];
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > tmp) {
            answer++;
            tmp = arr[i];
        }
    }

    return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153, 155, 156, 153, 148, 162];

console.log(solution1(arr));
console.log(solution2(arr));