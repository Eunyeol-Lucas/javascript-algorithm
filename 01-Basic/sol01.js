function solution1(a, b, c) {
    let answer;
    if (a < b) answer = a;
    else answer = b;
    if (c < answer) answer = c;
    return answer;
}

function solution2(a, b, c) {
    let answer;
    answer = Math.min(a, b, c);
    return answer;
}

console.log(solution1(6, 5, 11));
console.log(solution2(6, 5, 11));