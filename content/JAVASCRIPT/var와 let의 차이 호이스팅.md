---
emoji: 💻
title: var, let, const와 호이스팅이란?,https://media.vlpt.us/images/rlagudwog/post/473bc58a-acad-4dfa-b11f-2c014f248799/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-02-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.09.16.png
date: '2022-02-09 15:00:00'
author: 김브로
tags: JAVASCRIPT
categories: JAVASCRIPT
---

## var vs let
### var의 특징
> var 키워드의 특징으로는 함수스코프를 따른다는것이다. 호이스팅이될때 함수를 제외한 변수나 if문, 반복문에 var 키워드를
> 사용할 경우 블록 스코프를 무시하여 많은 오류가 나올 수 잇다.
### let의 특징
> let 키워드는 블록스코프를 따른다는것이다. var와 다르게 블록 단위로 스코프를 구분했을때, 훨씬 더 예측 가능한 코드를 작
> 성할 수 있다. 그리고 let과 비슷한 const는 블록스코프를 따르는것은 같지만 변하지 않는 값을 선언할 떄 쓰인다고 한다. 
> 그래서 var 보다 let과 const의 사용을 권장하고 있다.

## 호이스팅
> 자바스크립트의 호이스팅이란 코드가 실행되기전에 자바스크립트가 선언된 변수들을 먼저 확인하고 스코프안에 변수들을 
> 범위의 최상단에 끌어올리는것을 말한다.
```js
console.log(a) //undefined
var a = 1
console.log(a) // 1

console.log(a) // Uncaught ReferenceError: a is not defined
let a = 1
console.log(a) // Uncaught ReferenceError: a is not defined
```
> 위의 코드를 보면 var와 let의 호이스팅 방식이 틀리다는것을 볼 수 있다. var키워드를 사용하였을때는 console을 선언문 
> 위에 찍어도 var키워드가 호이스팅되면서 undefined가 나올 수 있고 let 키워드를 사용하면 호이스팅은 되지만 선언문에 
> 할당이 될때까지는 변수에 접근할 수 없기 때문에 Uncaught ReferenceError: a is not defined 에러가 나오는것이다.

```toc

```