function solution1(str, alp) {
    let answer = 0;
    for (let x of str) {
        if (x === alp) {
            answer++;
        }
    }

    return answer;
}

function solution2(str, alp) {
    let answer = 0;
    const re = new RegExp(alp, "g");
    let a = (str.match(re) || []).length;
    return a;

    return answer;
}

let str = "COMPUTERPROGRAMMING",
    alp = "R";

console.log(solution1(str, alp));
console.log(solution2(str, alp));