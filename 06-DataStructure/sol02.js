function solution1(str) {
  // 제거하고 남은 문자열을 담을 변수 answer를 선언하고 빈문자열로 초기화
  // 문자열을 담을 빈 배열 stack 생성
  let answer = "",
    stack = [];
  // 문자열을 순회하며 문자가 ")"인 경우 stack에 담긴 요소가 "("일 때까지 제거
  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "(");
      // 문자가 "("가 아닌 경우 stack에 추가
    } else stack.push(x);
  }
  // stack에 담긴 요소를 join
  answer = stack.join("");
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution1(str));
