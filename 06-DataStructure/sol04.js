function solution(postfix) {
  // 후위식 연산의 결과를 담을 변수 answer를 선언하고 0으로 초기화
  // 연산을 담을 stack을 선언 및 빈배열로 초기화
  let answer = 0,
    stack = [];
  // for문을 통해 인자를 순회
  for (let x of postfix) {
    // 요소가 숫자일 경우 stack에 추가
    if (!isNaN(x)) {
      stack.push(Number(x));
      // 숫자가 아닐 경우 stack의 마지막 두 요소를 제거하고 변수에 저장, switch를 통해 요소의 연산 기호에 맞추어 계산하고 그 결과를 stack에 추가
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      switch (x) {
        case "+":
          console.log("+");
          stack.push(lt + rt);
          break;
        case "-":
          console.log("-");
          stack.push(lt - rt);
          break;
        case "*":
          console.log("*");
          stack.push(lt * rt);
          break;
        case "/":
          console.log("/");
          stack.push(lt / rt);
          break;
      }
    }
  }

  return (answer = stack[0]);
}

let post = "352+*9-";
console.log(solution(post));
