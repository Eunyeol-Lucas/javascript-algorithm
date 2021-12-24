function solution(arr) {
  let answer = "";
  // for 문을 통해 배열을 탐색
  for (let x of arr) {
    // 해당 문자의 길이가 출력 변수 뮨저 길이보다 클 경우 출력변수를 변경
    if (x.length > answer.length) answer = x;
  }

  return answer;
}

let n = 5,
  arr = ["teacher", "time", "student", "beautiful", "good"];

console.log(solution(arr));
