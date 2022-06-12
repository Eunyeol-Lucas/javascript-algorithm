function solution1(a, b, c) {
    let answer = "YES",
        max;
    let total = a + b + c;
    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;
    if (total - max <= max) answer = "NO";

    return answer;
}

function solution2(a, b, c) {
    let answer = "YES",
        max;

    const total = a + b + c;
    max = Math.max(a, b, c);
    if (total - max <= max) answer = "NO";
    return answer;
}

console.log(solution1(3, 33, 17));
console.log(solution2(3, 33, 17));