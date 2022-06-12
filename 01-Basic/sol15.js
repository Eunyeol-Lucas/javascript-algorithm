function solution1(str) {
    let answer,
        num = str.length,
        mid = Math.floor(num / 2);
    // 문자의 길이가 홀수일 경우
    if (num % 2 === 1) {
        // 가운데 문자열을 출력 변수에 입력
        answer = str[mid];
        // 짝수일 경우 가운데 두개의 문자를 출력 변수에 입력
    } else answer = str[mid - 1] + str[mid];

    return answer;
}

function solution2(str) {
    let num = str.length,
        mid = Math.floor(num / 2);

    switch (str) {
        case num % 2:
            return str[mid];
        default:
            return str[mid - 1] + str[mid];
    }
}

let str = "beautifulGirls";

console.log(solution1(str));
console.log(solution2(str));