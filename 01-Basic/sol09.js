function solution1(word) {
    let answer = "";
    // for 문을 통해 문자를 하나씩 탐색
    for (let i of word) {
        // 문자열이 "A"인 경우 "#"으로 변환하여 출력문자에 추가
        if (i === "A") {
            answer += "#";
            // "A"가 아닐 경우 그대로 출력문자에 추가
        } else answer += i;
    }

    return answer;
}

function solution2(word) {
    let answer = "";
    answer = word.replaceAll("A", "#");
    return answer;
}

let word = "BANANA";

console.log(solution1(word));
console.log(solution2(word));