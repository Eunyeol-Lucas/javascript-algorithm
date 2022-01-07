function solution(str) {
  // 전달받은 인자를 소문자로 변환
  let answer = "YES",
    word = str.toLowerCase();
  // 문자열의 길이를 구함
  let n = word.length;
  // for문을 통해 문자열을 탐색
    for (let i = 0; i < Math.floor(n); i++) {
      // 문자열의 앞과 뒤의 문자가 다를 경우 출력 변수를 NO로 저장하고 for문을 탈출
    if (word[i] !== word[n - i - 1]) {
      answer = "NO";
      break;
    }
  }

  return answer;
}

let str = "gooG";
console.log(solution(str));
