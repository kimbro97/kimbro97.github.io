---
emoji: ๐ป
title: var let const์ ํธ์ด์คํ์ด๋?,https://media.vlpt.us/images/rlagudwog/post/473bc58a-acad-4dfa-b11f-2c014f248799/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-02-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.09.16.png
date: '2022-02-09 15:00:00'
author: ๊น๋ธ๋ก
tags: JAVASCRIPT
categories: JAVASCRIPT
---

## var vs let
### var์ ํน์ง
> var ํค์๋์ ํน์ง์ผ๋ก๋ ํจ์์ค์ฝํ๋ฅผ ๋ฐ๋ฅธ๋ค๋๊ฒ์ด๋ค. ํธ์ด์คํ์ด๋ ๋ ํจ์๋ฅผ ์ ์ธํ ๋ณ์๋ if๋ฌธ, ๋ฐ๋ณต๋ฌธ์ var ํค์๋๋ฅผ
> ์ฌ์ฉํ  ๊ฒฝ์ฐ ๋ธ๋ก ์ค์ฝํ๋ฅผ ๋ฌด์ํ์ฌ ๋ง์ ์ค๋ฅ๊ฐ ๋์ฌ ์ ์๋ค.
### let์ ํน์ง
> let ํค์๋๋ ๋ธ๋ก์ค์ฝํ๋ฅผ ๋ฐ๋ฅธ๋ค๋๊ฒ์ด๋ค. var์ ๋ค๋ฅด๊ฒ ๋ธ๋ก ๋จ์๋ก ์ค์ฝํ๋ฅผ ๊ตฌ๋ถํ์๋, ํจ์ฌ ๋ ์์ธก ๊ฐ๋ฅํ ์ฝ๋๋ฅผ ์
> ์ฑํ  ์ ์๋ค. ๊ทธ๋ฆฌ๊ณ  let๊ณผ ๋น์ทํ const๋ ๋ธ๋ก์ค์ฝํ๋ฅผ ๋ฐ๋ฅด๋๊ฒ์ ๊ฐ์ง๋ง ๋ณํ์ง ์๋ ๊ฐ์ ์ ์ธํ  ๋ ์ฐ์ธ๋ค๊ณ  ํ๋ค. 
> ๊ทธ๋์ var ๋ณด๋ค let๊ณผ const์ ์ฌ์ฉ์ ๊ถ์ฅํ๊ณ  ์๋ค.

## ํธ์ด์คํ
> ์๋ฐ์คํฌ๋ฆฝํธ์ ํธ์ด์คํ์ด๋ ์ฝ๋๊ฐ ์คํ๋๊ธฐ์ ์ ์๋ฐ์คํฌ๋ฆฝํธ๊ฐ ์ ์ธ๋ ๋ณ์๋ค์ ๋จผ์  ํ์ธํ๊ณ  ์ค์ฝํ์์ ๋ณ์๋ค์ 
> ๋ฒ์์ ์ต์๋จ์ ๋์ด์ฌ๋ฆฌ๋๊ฒ์ ๋งํ๋ค.
```js
console.log(a) //undefined
var a = 1
console.log(a) // 1

console.log(a) // Uncaught ReferenceError: a is not defined
let a = 1
console.log(a) // Uncaught ReferenceError: a is not defined
```
> ์์ ์ฝ๋๋ฅผ ๋ณด๋ฉด var์ let์ ํธ์ด์คํ ๋ฐฉ์์ด ํ๋ฆฌ๋ค๋๊ฒ์ ๋ณผ ์ ์๋ค. varํค์๋๋ฅผ ์ฌ์ฉํ์์๋๋ console์ ์ ์ธ๋ฌธ 
> ์์ ์ฐ์ด๋ varํค์๋๊ฐ ํธ์ด์คํ๋๋ฉด์ undefined๊ฐ ๋์ฌ ์ ์๊ณ  let ํค์๋๋ฅผ ์ฌ์ฉํ๋ฉด ํธ์ด์คํ์ ๋์ง๋ง ์ ์ธ๋ฌธ์ 
> ํ ๋น์ด ๋ ๋๊น์ง๋ ๋ณ์์ ์ ๊ทผํ  ์ ์๊ธฐ ๋๋ฌธ์ Uncaught ReferenceError: a is not defined ์๋ฌ๊ฐ ๋์ค๋๊ฒ์ด๋ค.

```toc

```