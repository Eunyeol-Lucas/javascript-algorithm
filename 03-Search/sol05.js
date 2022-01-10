function solution(str) {
  // 압축된 문자열을 담을 변수 answer를 선언하고, 반복횟수를 확인할 변수 count를 1로 선언
  let answer = "",
    count = 1;
  // for문을 돌며 해당 인덱스의 뒤의 문자와 비교하기 위해 공백 문자를 추가
  str += " ";
  // for 문을 통해 str 문자열 탐색
  for (let i = 0; i < str.length - 1; i++) {
    // if문을 통해 해당 문자열의 인덱스의 문자와 다음 문자가 같을 경우 count를 1 추가
    if (str[i] === str[i + 1]) count++;
    // 문자가 다를 경우, 해당 문자를 answer 변수에 추가하고, count가 1보다 클 경우 answer에 추가
    else {
      answer += str[i];
      if (count > 1) answer += String(count);
      // count를 1로 초기화
      count = 1;
    }
  }
  return answer;
}

const str = "KKHSSSSSSSE";

console.log(solution(str));
