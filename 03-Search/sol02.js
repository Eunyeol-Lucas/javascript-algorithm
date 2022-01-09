function solution(str) {
  // 출력변수 값을 "YES"로 선언
  let answer = "YES",
    // word 변수에 인자를 소문자로 변환하고 알파벳을 제외한 문자를 빈 문자로 치환한 값을 저장
    word = str.toLowerCase().replace(/[^a-z]/g, "");
  // if문을 통해 word 변수에 저장된 문자열을 반대로 뒤집은 문자열과 word 변수에 저장된 문자열이 다를 경우 answer 변수에 "NO"를 저장
  if (word.split("").reverse().join("") != word) answer = "NO";

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str)); 
