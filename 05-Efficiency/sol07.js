function makeHash(word, wordHash) {
  // iterable한 문자열의 Map 객체로 만들어주는 함수
  for (let i of word) {
    if (wordHash.has(i)) {
      wordHash.set(i, wordHash.get(i) + 1);
    } else wordHash.set(i, 1);
  }
  return wordHash;
}

function solution1(firstWord, secondWord) {
  let answer = "YES",
    firstHash = new Map(),
    secondHash = new Map();
  // 입력받은 두 문자열의 문자와 개수로 이루어진 Map 객체를 생성
  firstHash = makeHash(firstWord, firstHash);
  secondHash = makeHash(secondWord, secondHash);
  // for 문을 통해 Map 객체를 순회하며 첫 번째 Map 객체의 key에 대한 value가 두 번째 Map 객체의 key에 대한 value가 다를 경우
  // answer에 'No"를 할당
  for (let [key, val] of firstHash) {
    if (val !== secondHash.get(key)) return (answer = "NO");
  }

  return answer;
}
function solution2(firstWord, secondWord) {
  let answer = "YES";
  let hash = new Map();
  // 첫 문자열이 문자와 개수로 이루어진 Map 객체를 생성
  for (let x of firstWord) {
    if (hash.has(x)) hash.set(x, hash.get(x) + 1);
    else hash.set(x, 1);
  }
  // for문을 통해 2번째 문자열을 순회
  for (let x of secondWord) {
    // if 문을 통해 2번째 문자열의 문자가 Map객체에 존재하지 않거나
    // value가 0인 경우 "NO" 반환
    if (!hash.has(x) || hash.get(x) == 0) return "NO";
    // Map 객체에 key가 존재하고, value가 0이 아닌 경우에 value를 1 감소시킴
    hash.set(x, hash.get(x) - 1);
  }
  return answer;
}

function solution3(firstWord, secondWord) {
  let answer = "YES";
  let hash = new Map();
  for (let x of firstWord) {
    if (hash.has(x)) hash.set(x, hash.get(x) + 1);
    else hash.set(x, 1);
  }
  for (let x of secondWord) {
    if (!hash.has(x) || hash.get(x) == 0) return "NO";
    hash.set(x, hash.get(x) - 1);
  }
  return answer;
}

let firstWord = "AbaAeCe";
let secondWord = "baeeACA";

console.log(solution1(firstWord, secondWord));

console.log(solution2(firstWord, secondWord));
console.log(solution3(firstWord, secondWord));
