function solution1(str) {
  // stack을 이용하기 위해 stack 변수에 빈 배여을 할당
  let stack = [];
  // for 문을 통해 문자열을 순회
  for (let x of str) {
    // if 문을 통해 stack의 마지막 요소가 "("이고 for 문의 요소가 ")"일경우
    if (stack.slice(-1)[0] === "(" && x === ")") {
      // 배열의 마지막 요소를 제거
      stack.pop();
      // "(" 인 경우 stack에 추가
    } else stack.push(x);
  }
  // stack이 빈배열이 아닐 경우 "NO"를 빈 배열이 경우 "YES"를 반환
  return (answer = stack[0] ? "NO" : "YES");
}

function solution2(s) {
  // 올바른 괄호일지 판단을 위해 answer 변수에 "YES"를 기본 값을 할당
  // stack을 활용하기 위한 빈 배열 생성
  let answer = "YES";
  stack = [];
  // 인자를 순회하며 요소가 '('일 경우 stack에 추가
  for (let x of s) {
    if (x === "(") stack.push(x);
    // ')'일 경우 배열의 길이가 0이면 올바른 괄호 쌍이 아니므로 "NO" 반환
    // 빈 배열이 아닐 경우 stack의 마지막 요소 제거
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  // stack의 길이가 0 이상일 경우 배열에 괄호가 존재하므로 "NO" 반환
  if (stack.length > 0) return "NO";
  return answer;
}
let str = "(()(()))(()";

console.log(solution1(str));
console.log(solution2(str));
