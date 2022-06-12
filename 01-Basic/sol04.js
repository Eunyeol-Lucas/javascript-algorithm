// for 문을 통해 1부터 N 까지 합을 도출
function solution1(n) {
    let answer = 0;
    for (let num = 1; num <= n; num++) {
        answer = num + answer;
    }
    return answer;
}

function solution2(n) {
    let answer = 0;

    answer = [...Array(n + 1).keys()].reduce((acc, cur) => acc + cur, 0);

    return answer;
}

let n = 5;
console.log(solution1(n));
console.log(solution2(n));