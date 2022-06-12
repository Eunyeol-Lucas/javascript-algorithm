function solution1(arr) {
    let answer = [];
    for (let x of arr) {
        if (!answer.includes(x)) {
            answer.push(x);
        }
    }
    return answer;
}

function solution2(arr) {
    const answer = [];
    for (const x of arr) {
        if (!answer.includes(x)) {
            answer.push(x);
        }
    }
    return answer;
}

let num = 5;
let arr = ["good", "time", "good", "time", "student"];

console.log(solution1(arr));
console.log(solution2(arr));