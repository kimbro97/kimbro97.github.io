---
emoji: 💻
title: TIL 32일차,https://media.vlpt.us/images/rlagudwog/post/aea0bbda-ed17-47ef-801d-3953fdfa8240/TIL%20Thumbnail.png
date: '2021-12-31 23:00:00'
author: 김브로
tags: TIL
categories: TIL
---

## 리팩토링

오늘은 멀터를 이용해서 이미지를 S3에 저장하는 기능을 추가하려고 했는데 적용하기가 쉽지가 않았다. express에서 구현할때는 그냥 multer를 모듈로 만들어줘서 필요한곳에 가져다가 사용을 했는데 nestjs에서는 어떻게 구현을 해야할지 감이 잡히지 않았다. user.service 로직에 multer코드를 다 집어 넣자니 코드의 재사용성이 떨어질거 같았다. 그래서 이 부분은 조금더 연구를해서 구현을 해야할거 같다. multer.service와 multer.repository를 만들어서 멀터를 사용하는 로직은 multer부분에서만 구현을 하고 user.controller에 주입해서 사용하는 방식으로 구현해야할거 같다. 이런것들이 협업의 역할과 책임을 나누는 일인거같다. 
내일도 화이팅 하자 형재야🔥🔥🔥🔥  

## Today’s Key 🔑

- test 코드작성

- nestJS

## To Do Tomorrow 🔥

- test 코드작성

- nestJS

```toc

```