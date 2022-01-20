function solution1(vote) {
  // 가장 많은 득표를 받은 학생을 담을 변수 answer를 선언하고 초기화
  // 가장 많은 득표를 구하기 위한 변수 max를 선언하고 초기화
  let answer = "",
    max = 0;
  // 입력받은 기호 문자열을 쪼개어 배열을 만듦
  let vote_arr = vote.split("");
  // reduce 메서드를 통해 각각 후보의 기호에 따른 득표수를 알기 위해여 key를 기호, value를 득표수로 하는 객체를 생성
  let vote_obj = vote_arr.reduce((x, y) => {
    x[y] = ++x[y] || 1;
    return x;
  }, {});
  // 객체의 키만 담은 배열을 생성
  const keys = Object.keys(vote_obj);
  // for문을 통해 객체의 key를 통해 value를 탐색
  for (let i = 0; i < keys.length; i++) {
    // if 문을 톨해 해당 객체의 key의 값이 max보다 클 경우 max에 해당 key의 value를 재할당하고, answer 변수에 해당 key를 재할당
    if (max < vote_obj[keys[i]]) {
      max = vote_obj[keys[i]];
      answer = keys[i];
    }
  }
  return answer;
}

function solution2(vote) {
  let answer;
  // 후보의 기호와 기호의 수를 저장하기 위해 Map 객체를 생성
  let hash = new Map();
  // 발표한 기호 문자열을 순회하며 Map 객체에 기호를 key로, 득표 수를 value에 저장
  for (let x of vote) {
    if (hash.has(x)) {
      hash.set(x, hash.get(x) + 1);
    } else hash.set(x, 1);
    let max = Number.MIN_SAFE_INTEGER;
    // for문을 통해 Map 객체의 key와 value를 비교하여 value가 최대 값일 때의 key를 answer에 할당
    for (let [key, val] of hash) {
      if (val > max) {
        max = val;
        answer = key;
      }
    }
  }
  return answer;
}

vote = "BACBACCACCBDEDE";
console.log(solution1(vote));
console.log(solution2(vote));
