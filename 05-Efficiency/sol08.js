function compareMaps(map1, map2) {
  // Map() 객체를 비교하는 함수
  // 두 Map 객체의 사이즈가 다를 경우 false 반환
  if (map1.size !== map2.size) return false;
  // map2가 map1의 key를 가지고있지 않거나, value를 가지고 있지 않을 경우 false 반환
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  // 모든 경우가 아닐 경우 true 반환
  return true;
}

function solution(s, t) {
  // 아나그램 판별시 참이되는 수를 담기 위한 answer 변수를 선언하고 초기화
  // s 문자열의 왼쪽부터 삭제할 lt 변수 선언 및 초기화
  let answer = 0,
    lt = 0;
  // s 문자열의 객체를 담을 Map 객체, t 문자열의 객체를 담을 Map 객체 생성
  let sH = new Map(),
    tH = new Map();
  // t 문자열의 아나그램 판변을 위해 Map 객체로 만듦
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  // t 문자열의 마지막 문자를 제외하여 Map 객체를 만듦
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  // for문을 통해 sH Map 객체에 s의 문자열을 하나 씩 추가하며 두 Map 객체를 비교
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    // 기존 sH Map() 객체의 해당 key의 value를 1 감소시킴
    sH.set(s[lt], sH.get(s[lt]) - 1);
    // key의 값이 0일 경우 Map() 객체에서 제거
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

let S = "bacaAacba";
let T = "abc";
console.log(solution(S, T));
