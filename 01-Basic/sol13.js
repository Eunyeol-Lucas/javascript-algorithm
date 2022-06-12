function solution1(str) {
    let answer = "";
    // for 문을 통해 문자열을 탐색
    for (let x of str) {
        // 문자열이 대문자일 경우 출력 변수에 toLowerCase() 메소드를 통해 소문자를 추가
        if (x === x.toUpperCase()) answer += x.toLowerCase();
        // 소문자일 경우 toUpperCase() 메소드로 대문자로 변환하여 출력 문자에 추가
        else answer += x.toUpperCase();
    }

    return answer;
}

function solution2(str) {
    let answer = "";
    answer = [...str]
        .map((x) => {
            if (x === x.toUpperCase()) return x.toLowerCase();
            return x.toUpperCase();
        })
        .join("");

    return answer;
}

let str = "StuDY";

console.log(solution1(str));
console.log(solution2(str));