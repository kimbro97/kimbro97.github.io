---
emoji: 💻
title: Toy 1,https://media.vlpt.us/images/rlagudwog/post/fb5c681f-4797-471a-b46a-448b32259993/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7%20%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%A8.png
date: '2022-01-20 20:00:00'
author: 김브로
tags: Algorithm
categories: Algorithm
---

## 문제  

>말썽꾸러기 김코딩은 오늘도 장난을 치다가 조별 발표 순서가 담긴 통을 쏟고 말았습니다.  
선생님께서는 미리 모든 발표 순서의 경우의 수를 저장해 놓았지만 김코딩의 버릇을 고치기 위해 문제를 내겠다고 말씀하셨습니다.  
김코딩은 모든 조별 발표 순서에 대한 경우의 수를 차례대로 구한 뒤 발표 순서를 말하면 이 발표 순서가 몇 번째 경우의 수인지를 대답해야 합니다.  
총 조의 수 N과 선생님이 말씀하시는 발표 순서 k가 주어질 때, 김코딩이 정답을 말 할 수 있게 올바른 리턴 값을 구하세요.  
모든 경우의 수가 담긴 배열은 번호가 작을수록 앞에 위치한다고 가정합니다.  
ex) N = 3일경우, [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

## 입력  
### 인자 1: N  
>- Number 타입의 1 <= N <= 12인 조의 개수  
### 인자 2: K  
>- Number타입의 Array (0 <= index)

>모든 경우의 수를 2차원 배열에 담는다면 [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]이 되고,  
반환하는 값은 3이 됩니다.

## 주의사항
>- k내에 중복되는 요소는 없다고 가정합니다.

## 입출력 예시

```js
let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

output = orderOfPresentation(5, [1, 3, 2, 4, 5])
console.log(output); // 6
```

## 수도 코드
```js
함수의 첫 번째 인자 N = 3, 두 번째 인자 K = [2, 3, 1] 출력값은 3이였다. 이 문제의 의미는 3개의 조가있고 이 조의 발표 순서를 중복되는 요소가 없이 2차원의 배열에 담고 K랑 같은 값이 배열의 몇번째 INDEX인지 찾는 문제 같았다. 

그럼 3개의 조가 있다면 1조, 2조, 3조 이렇게 있을것이고 3개조의 순서를 중복없이 뽑아본다면, [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]란 결과값이 나오고 [2,3,1]은 3번째 INDEX인것을 볼 수 있다.

그럼 일단 N의 개수 만큼 중복없이 조의 순서를 2차원 배열로 만들어준다음에 K가 몇번째 INDEX에 있는지 찾아보면 될거같다.

1. N개의 조만큼 중복없이 2차원의 배열을 만들어준다.
2. 만들어준 배열에서 K를 찾아서 인덱스 값을 리턴해준다.
3. 이렇게하면 너무 많은 경우의 수를 일일이 만들어줘야하기때문에 비효율적이고 너무 많은시간이 걸려서 통과하지 못했다.
    //  * 만약 K가 [2, 3, 1]이라고 가정했을 때, 첫 번째 num은 2가 될 것입니다.
    //  * 2가 제일 앞에 있다고 가정한다면, 앞자리가 2의 차례가 오기 전에 1의 모든 경우의 수를 구했을 것이고,
    //  * 1의 모든 경우의 수를 지금부터 구하게 됩니다.
    //  * 
    //  * 그렇다면, IsUsed 배열은 이렇게 됩니다. [false(더미), false, true, false]
    //  * candidates 배열은 이렇게 됩니다. => [false]
    //  * validCnt는 이렇게 됩니다. => 1
    //  * formerCnt는 이렇게 됩니다. => 1 * factorial(3 - 0 - 1) // i는 0부터 시작하기 때문에 N에서 남아 있는 수를 구할 때 - 1이 추가로 필요합니다.
    //  * order는 2를 추가합니다.
    //  * 
    //  * 두 번째를 순회했을 땐, num이 3이 됩니다.
    //  * 그렇다면, IsUsed 배열은 이렇게 됩니다. [false(더미), false, true, true]
    //  * candidates 배열은 이렇게 됩니다. => [false]
    //  * validCnt는 이렇게 됩니다 => 1
    //  * formerCnt는 이렇게 됩니다 => 1 * factorial(3 - 1 - 1)
    //  * order는 1을 추가합니다. (3)
    //  * 
    //  * 세 번째를 순회했을 땐, num이 1이 됩니다.
    //  * IsUsed 배열은 이렇게 됩니다. [false, true, true, true]
    //  * candidates 배열은 []이고, validCnt는 0이 되어, formerCnt는 0이 됩니다.
    //  * 
    //  * 발표 순서는 0부터 시작하기 때문에 0, 1, 2, 3으로
    //  * 결과적으로, 값은 3이 됩니다.
     */
```
## 해결책
```js
function orderOfPresentation(N, K) {
  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  let order = 0;

  const isUsed = Array(N + 1).fill(false);
  
  for (let i = 0; i < K.length; i++) {

    const num = K[i];

    isUsed[num] = true;

    const candidates = isUsed.slice(1, num);

    const validCnt = candidates.filter((el) => el === false).length;

    const formerCnt = validCnt * factorial(N - i - 1);

    order = order + formerCnt;
  }
  
  return order;
}
```

## 느낀점
> 손코딩을 통해서 왜 이런답이 나오는지는 알겠는데 완전히 이해하지 못했다..  
알고리즘 문제를 푼지도 오래되었고 나중에 다시한번 봐야겠다.

```toc

```