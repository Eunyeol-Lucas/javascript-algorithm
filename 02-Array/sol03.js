function solution1(a, b) {
    let answer = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) answer += "D ";
        else if (a[i] === 1 && b[i] === 3) answer += "A ";
        else if (a[i] === 2 && b[i] === 1) answer += "A ";
        else if (a[i] === 3 && b[i] === 2) answer += "A ";
        else answer += "B ";
    }

    return answer;
}

function solution2(N, a, b) {
    const answer = [];
    for (let i = 0; i < N; i++) {
        if (a[i] - b[i] === 1) answer.push("A");
        else if (a[i] - b[i] === 0) answer.push("D");
        else answer.push("B");
    }
    return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution1(5, a, b));
console.log(solution2(5, a, b));