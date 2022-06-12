function solution1(str) {
    let answer = 0;
    // for 문을 통해 문자열을 탐색
    for (let x of str) {
        // 문자열이 toUpperCase 함수를 통해 대문자로 변환한 문자열과 일치할 경우
        if (x === x.toUpperCase()) {
            // 출력변수를 1씩 추가
            answer++;
        }
    }

    return answer;
}

function solution2(str) {
    let answer = 0;
    answer = [...str].filter((x) => x === x.toUpperCase()).length;

    return answer;
}

let str = "KoreaTimeGoodD";
console.log(solution1(str));
console.log(solution2(str));