function solution1(str) {
    let answer = str;
    // toUpperCase() 메서드를 통해 모든 문자열을 대문자로 변환
    answer = answer.toUpperCase();

    return answer;
}

function solution2(str) {
    let answer = str.toUpperCase();
    return answer;
}

let str = "ItisTimeToStudy";

console.log(solution1(str));
console.log(solution2(str));