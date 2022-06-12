function solution1(str) {
    let answer = "";
    for (let i of str) {
        if (!answer.includes(i)) {
            answer += i;
        }
    }

    return answer;
}

function solution2(str) {
    let answer = "";
    for (let i of str) {
        if (!answer.includes(i)) {
            answer += i;
        }
    }
    return answer;
}

let str = "ksekkset";

console.log(solution1(str));
console.log(solution2(str));