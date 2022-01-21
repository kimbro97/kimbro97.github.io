---
emoji: 💻
title: Toy 2,https://media.vlpt.us/images/rlagudwog/post/fb5c681f-4797-471a-b46a-448b32259993/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7%20%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%A8.png
date: '2022-01-21 17:00:00'
author: 김브로
tags: Algorithm
categories: Algorithm
---

## 문제  

>아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.  
0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.  
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

## 입력  
### 인자 1: n   
>- number 타입의 n (n은 0 이상의 정수)  
### 출력 
>- number 타입을 리턴해야합니다.


## 주의사항
>- 재귀함수를 이용해 구현해야 합니다.
>- 반복문(for, while) 사용은 금지됩니다.
>- 함수 fibonacci가 반드시 재귀함수일 필요는 없습니다.
## 입출력 예시

```js
let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34
```

## 수도 코드
```js
1. memo라는 배열에 [0, 1]을 할당해준다. n이 0이고 1이면 바로 출력할 수 있게 
2. 재귀함수로 이미있는 값이면 바로 리턴해주고 그게 아니면 -2, -1만큼의 인덱스를 서로 더해서 저장을 해주면서 답이 나올때까지 재귀를 돌려준다.
```
## 해결책
```js
let fibonacci = function (n) {
  const memo = [0, 1];
  const aux = (n) => {
    if (memo[n] !== undefined) {
      return memo[n];
    } 
    memo[n] = aux(n - 1) + aux(n - 2);
    return memo[n];
  };
  return aux(n);
};
```

## 느낀점
> 이번꺼는 조금 쉽게 풀엇다.

```toc

```