function solution1(arr) {
    let answer = arr;
    // reduce 메소드를 통해 배열의 전체 합을 구함
    let sum = answer.reduce((acc, cur) => acc + cur);
    let len = arr.length;

    // 이중 for문을 통해 두 난쟁이를 뺐을 때 합이 100이 되는 경우를 확인
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (sum - (arr[i] + arr[j]) === 100) {
                // 난쟁이 2명을 찾으면, splice 메소드를 통해 배열에서 난쟁이를 제거
                answer.splice(j, 1);
                answer.splice(i, 1);
            }
        }
    }

    return answer;
}

function solution2(arr) {
    const answer = arr.slice();
    let sum = answer.reduce((acc, cur) => acc + cur, 0);
    let len = answer.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (sum - (arr[i] + arr[j]) === 100) {
                answer.splice(j, 1);
                answer.splice(i, 1);
            }
        }
    }

    return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
let heightList = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution1(arr));
console.log(solution2(heightList));