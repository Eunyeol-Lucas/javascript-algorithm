function solution(s, t) {
  // 최소 거리(값)를 담을 빈 배열 result와 t의 인덱스를 담을 빈 빈배열 arr을 선언 및 할당
  let answer = [];
  let arr = [];
  // for문을 통해 입력받은 문자열에 t의 인덱스를 arr 배열에 저장
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      arr.push(i);
    }
  }
  // for문을 통해 s 문자열을 탐색하며 s 문자열에서 t 문자까지의 최소 거리를 구함
  for (let j = 0; j < s.length; j++) {
    min = Number.MAX_SAFE_INTEGER;
    for (const x of arr) {
      result = Math.abs(j - x);
      // if 문을 통해 최소값을 min에 재할당
      if (min > result) {
        min = result;
      }
    }
    // 해당 인덱스의 최소값을 answer 변수의 배열에 저장
    answer[j] = min;
  }

  return answer;
}

let s = "teachermode",
  t = "e";
console.log(solution(s, t));
