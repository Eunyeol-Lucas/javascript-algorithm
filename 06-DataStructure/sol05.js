function solution(brackets) {
  // 잘린 쇠막대기의 조각의 수를 담을 변수 answer를 생성하고 0으로 초기화
  // 여는 괄호를 담을 stack을 선언
  let answer = 0,
    stack = [];
  //  for문을 통해 인자로 전달받은 괄호 문자열을 순회
  for (let i = 0; i < brackets.length; i++) {
    // if문을 통해 요소가 "(" 일경우 stack에 추가
    if (brackets[i] === "(") {
      stack.push("(");
      // ")"일 경우, 레이저를 발사할 수 있으므로 stack에서 "("를 제거
      // 괄호 문자열의 이전 요소가 "("일 경우, 레이저로 인해 쇠막대가 잘린 조각으로, answer 변수에 개수를 추가
      // 이전 요소가 ')' 일경우, 조각의 끝으로, answer 변수 1 추가
    } else {
      stack.pop();
      if (brackets[i - 1] === "(") {
        answer += stack.length;
      } else answer++;
    }
  }

  return answer;
}

let brackets = "(((()(()()))(())()))(()())";
console.log(solution(brackets));
