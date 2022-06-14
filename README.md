<div align="center">
  <br />
  <img src="./readme_assets/js_algorithm_logo.jpeg" alt="JavaScript Algorithm" width="300px" />
  <br />
  <h1>자바스크립트 알고리즘 문제풀이</h1>
  <br />
</div>

## 목차

1. [**기본문제 풀이**](#1)
2. [**1, 2차원 배열 탐색**](#2)
3. [**문자열 탐색**](#3)
4. [**완전탐색(블루투포스)**](#4)
5. [**효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)**](#5)
6. [**자료구조(스택 & 큐)**](#6)
7. [**정렬과 그리디, 결정알고리즘**](#7)
8. [**재귀함수와 완전탐색(DFS:깊이우선탐색)**](#8)
9. [**그래프와 탐색(DFS, BFS:넓이 우선탐색)**](#9)
10. [**Dynamic programming(동적계획법)**](#10)

<br />

<div id="1"></div>

## 기본 문제 풀이

| 번호 |       문제       |                                       JS 풀이 코드                                        | 1차 풀이 | 2차 풀이  |
| :--: | :--------------: | :---------------------------------------------------------------------------------------: | :------: | :-------: |
|  1   | 세 수 중 최소값  | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol01.js) | 21.12.18 | 22.06.12  |
|  2   | 삼각형 판별하기  | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol02.js) | 21.12.18 | 22.06.12  |
|  3   |    연필 개수     | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol03.js) | 21.12.18 | 22.06.12  |
|  4   | 1부터 N까지의 합 | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol04.js) | 21.12.18 | 22.06.12  |
|  5   |  최소값 구하기   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol05.js) | 21.12.20 | 21.12.24. |
|  6   |       홀수       | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol06.js) | 21.12.22 | 22.06.12  |
|  7   |      10부제      | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol07.js) | 21.12.23 | 22.06.13  |
|  8   |    일곱난쟁이    | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol08.js) | 21.12.24 | 22.06.13  |
|  9   |    A를 #으로     | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol09.js) | 21.12.24 | 22.06.13  |
|  10  |    문자 찾기     | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol10.js) | 21.12.24 | 22.06.13  |
|  11  |   대문자 찾기    | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol11.js) | 21.12.24 | 22.06.13  |
|  12  |   대문자 통일    | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol12.js) | 21.12.24 | 22.06.13  |
|  13  |  대소문자 변환   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol13.js) | 21.12.24 | 22.06.13  |
|  14  |  가장 긴 문자열  | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol14.js) | 21.12.24 | 22.06.13  |
|  15  | 가운데 문자 출력 | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol15.js) | 21.12.25 | 22.06.13  |
|  16  |  중복 문자 제거  | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol16.js) | 21.12.28 | 22.06.13  |
|  17  |  중복 단어 제거  | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/01-Basic/sol17.js) | 21.12.28 |     -     |

<br />

<div id="2"></div>

## 1, 2차원 배열 탐색

| 번호 |      문제      |                                       JS 풀이 코드                                        | 1차 풀이 | 2차 풀이 |
| :--: | :------------: | :---------------------------------------------------------------------------------------: | :------: | :------: |
|  1   | 큰 수 출력하기 | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/02-Array/sol01.js) | 22.01.01 | 22.06.13 |
|  2   |  보이는 학생   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/02-Array/sol02.js) | 22.01.01 | 22.06.13 |
|  3   |   가위바위보   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/02-Array/sol03.js) | 22.01.02 | 22.06.13 |
|  4   |   점수 계산    | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/02-Array/sol04.js) | 22.01.03 | 22.06.13 |
|  5   |  등수 구하기   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/02-Array/sol05.js) | 22.01.04 | 22.06.14 |
|  6   | 격자판 최대합  | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/02-Array/sol06.js) | 22.01.05 | 22.06.14 |
|  7   |     봉우리     | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/02-Array/sol07.js) | 22.01.06 | 22.06.14 |

<br />

<div id="3"></div>

## 문자열 탐색

| 번호 |        문제        |                                        JS 풀이 코드                                        | 1차 풀이 | 2차 풀이 |
| :--: | :----------------: | :----------------------------------------------------------------------------------------: | :------: | :------: |
|  1   |     회문문자열     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol01.js) | 22.01.07 | 22.06.14 |
|  2   |  유효한 팰린드롬   | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol02.js) | 22.01.08 |    -     |
|  3   |    숫자만 추출     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol03.js) | 22.01.08 |    -     |
|  4   | 가장 짧은 문자거리 | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol04.js) | 22.01.09 |    -     |
|  5   |    문자열 압축     | [JS](https://github.com/JeongHwan-dev/javascript-algorithm/blob/master/03-search/sol05.js) | 22.01.10 |    -     |

<br />

<div id="4"></div>

## 완전탐색(블루투포스)

| 번호 |    문제     |                                          JS 풀이 코드                                          | 1차 풀이 | 2차 풀이 |
| :--: | :---------: | :--------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   | 자리수의 합 | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/04-BruteForce/sol01.js) | 22.01.11 |    -     |
|  2   | 뒤집은 소수 | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/04-BruteForce/sol02.js) | 22.01.12 |    -     |
|  3   |   멘토링    | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/04-BruteForce/sol03.js) | 22.01.13 |    -     |
|  4   |  졸업선물   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/04-BruteForce/sol04.js) | 22.01.15 |    -     |
|  5   | K번째 큰 수 | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/04-BruteForce/sol05.js) | 22.01.17 |    -     |

<br />

<div id="5"></div>

## 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

| 번호 |        문제        |                                          JS 풀이 코드                                          | 1차 풀이 | 2차 풀이 |
| :--: | :----------------: | :--------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   |   두 배열 합치기   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/05-Efficiency/sol01.js) | 22.01.17 |    -     |
|  2   |  공통원소 구하기   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/05-Efficiency/sol02.js) | 22.01.17 |    -     |
|  3   |   연속 부분수열1   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/05-Efficiency/sol03.js) | 22.01.18 |    -     |
|  4   |   연속 부분수열2   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/05-Efficiency/sol04.js) | 22.01.19 |    -     |
|  5   |     최대 매출      | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/05-Efficiency/sol05.js) | 22.01.20 |    -     |
|  6   |     학급 회장      | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/05-Efficiency/sol06.js) | 22.01.20 |    -     |
|  7   |      아나그램      | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/05-Efficiency/sol07.js) | 22.01.20 |    -     |
|  8   | 모든 아나그램 찾기 | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/05-Efficiency/sol08.js) | 22.01.21 |    -     |

<br />

<div id="6"></div>

## 자료구조(스택, 큐)

| 번호 |        문제         |                                           JS 풀이 코드                                            | 1차 풀이 | 2차 풀이 |
| :--: | :-----------------: | :-----------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   |     올바른 괄호     | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/06-DataStructure/sol01.js) | 22.01.22 |    -     |
|  2   |   괄호 문자 제거    | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/06-DataStructure/sol02.js) | 22.01.22 |    -     |
|  3   |   크레인 인형뽑기   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/06-DataStructure/sol03.js) | 22.01.23 |    -     |
|  4   | 후위식(postfix)연산 | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/06-DataStructure/sol04.js) | 22.01.23 |    -     |
|  5   |      쇠막대기       | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/06-DataStructure/sol05.js) | 22.01.24 |    -     |
|  6   |     공주 구하기     | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/06-DataStructure/sol06.js) | 22.01.25 |    -     |
|  7   |    교육과정 설계    | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/06-DataStructure/sol07.js) | 22.01.25 |    -     |

<div id="7"></div>

## 정렬과 그리디, 결정알고리즘

| 번호 |            문제             |                                       JS 풀이 코드                                       | 1차 풀이 | 2차 풀이 |
| :--: | :-------------------------: | :--------------------------------------------------------------------------------------: | :------: | :------: |
|  1   |          선택 정렬          | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/07-Sort/sol01.js) | 22.01.25 |    -     |
|  2   |          버블 정렬          | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/07-Sort/sol02.js) | 22.01.26 |    -     |
|  3   | Special Sort(버블 정렬응용) | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/07-Sort/sol03.js) | 22.01.27 |    -     |
|  4   |          삽입 정렬          | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/07-Sort/sol04.js) | 22.01.27 |    -     |
|  5   |       LRU(캐시 변형)        | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/07-Sort/sol05.js) | 22.01.28 |    -     |
|  6   |       장난꾸러기 현수       | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/07-Sort/sol06.js) | 22.01.29 |    -     |
|  7   |          좌표 정렬          | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/07-Sort/sol07.js) | 22.01.30 |    -     |
|  8   |         회의실 배정         | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/07-Sort/sol08.js) | 22.01.30 |    -     |
|  9   |           결혼식            | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/07-Sort/sol09.js) | 22.01.30 |    -     |
|  10  |          이분 검색          | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/07-Sort/sol10.js) | 22.01.31 |    -     |
|  11  |         뮤직비디오          | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/07-Sort/sol11.js) | 22.02.01 |    -     |
|  12  |        마구간 정하기        | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/07-Sort/sol12.js) | 22.02.02 |    -     |

<br />

<div id="8"></div>

## 재귀함수와 완전탐색(DFS:깊이우선탐색)

| 번호 |         문제         |                                           JS 풀이 코드                                            | 1차 풀이 | 2차 풀이 |
| :--: | :------------------: | :-----------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   |       재귀함수       | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol01.js) | 22.02.02 |    -     |
|  2   |     이진수 출력      | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol02.js) | 22.02.02 |    -     |
|  3   |    이진 트리 순회    | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol03.js) | 22.02.02 |    -     |
|  4   |   부분집합 구하기    | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol04.js) | 22.02.02 |    -     |
|  5   |  합이 같은 부분집합  | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol05.js) | 22.02.03 |    -     |
|  6   |     바둑이 승차      | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol06.js) | 22.02.04 |    -     |
|  7   |   최대 점수 구하기   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol07.js) | 22.02.05 |    -     |
|  8   |   중복순열 구하기    | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol08.js) | 22.02.05 |    -     |
|  9   |       동전교환       | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol09.js) | 22.02.06 |    -     |
|  10  |     순열 구하기      | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol10.js) | 22.02.07 |    -     |
|  11  |       팩토리얼       | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol11.js) | 22.02.07 |    -     |
|  12  | 조합수(메모이제이션) | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol12.js) | 22.02.07 |    -     |
|  13  |    순열 추측하기     | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol13.js) | 22.02.09 |    -     |
|  14  |     조합 구하기      | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol14.js) | 22.02.10 |    -     |
|  15  |     수들의 조합      | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/08-Recursive&DFS/sol15.js) | 22.02.10 |    -     |

<br />

<div id="9"></div>

## 그래프와 탐색(DFS, BFS:넓이 우선탐색)

| 번호 |           문제           |                                            JS 풀이 코드                                            | 1차 풀이 | 2차 풀이 |
| :--: | :----------------------: | :------------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   |  경로탐색(DFS-인접행렬)  | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/09-Graph%26search/sol01.js) | 22.02.15 | 22.05.08 |
|  2   | 경로탐색(DFS-인접리스트) | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/09-Graph%26search/sol02.js) | 22.03.04 | 22.05.08 |
|  3   |         미로탐색         | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/09-Graph%26search/sol03.js) | 22.05.08 |    -     |
|  4   | 이진트리 넓이 우선 탐색  | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/09-Graph%26search/sol04.js) | 22.05.09 |    -     |
|  4   |       송아지 찾기        | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/09-Graph%26search/sol05.js) | 22.05.11 |    -     |
|  5   |   섬나라 아일랜드(DFS)   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/09-Graph%26search/sol06.js) | 22.05.11 |    -     |
|  6   |   섬나라 아일랜드(BFS)   | [JS](https://github.com/Eunyeol-Lucas/javascript-algorithm/blob/master/09-Graph%26search/sol07.js) | 22.05.11 |    -     |

<div id="10"></div>

## Dynamic programming(동적계획법)

| 번호 |        문제        | JS 풀이 코드 | 1차 풀이 | 2차 풀이 |
| :--: | :----------------: | :----------: | :------: | :------: |
|  1   |    계단 오르기     |    [JS]()    | 22.06.09 |          |
|  2   |   돌다리 건너기    |    [JS]()    | 22.06.09 |          |
|  3   | 최대 부분 증가수열 |    [JS]()    | 22.06.10 |          |
|  4   |      동전교환      |    [JS]()    | 22.06.11 |          |
|  5   |  최대점수 구하기   |    [JS]()    | 22.06.11 |          |
