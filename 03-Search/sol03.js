function solution1(str) {
    // 입력받은 문자열의 알파벳을 모두 소문자로 치환하고 알파벳을 모두 빈 문자로 치환하여 answer 변수에 return
    let answer = parseInt(str.toLowerCase().replace(/[a-z]/g, ""));
    return answer;
}

function solution2(str) {
    let answer = +str.replace(/[A-Z|a-z]/g, "");

    return answer;
}

let str = "g0en2T0s8eSoft";

console.log(solution1(str));
console.log(solution2(str));