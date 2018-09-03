# sunrin-portfolio backend

> Sunrin Internet High School Software Division Portfolio Site

서버 빌드 명령어: `npm run build`

서버 실행 명령어: `npm run start` (빌드 없이 실행), `npm run start-with-build` (빌드 후 실행)

---

## API 호출 (목록 요청)

URL: `/api/list`

포트폴리오들을 목록으로 반환

`name` 을 제외한 모든 옵션은 +를 이용해 여러개의 사용이 가능

ex)

```text
/api/list/?
division=software // 여러 옵션이 가능하지만, 현재 software 하나밖에 존재하지 않음
&year=2016+2017 // 2016년과 2017년의 작품을 선택
&type=digital-contents+sunrin-thon // 디지털 콘텐츠 경진대회나 선린 해커톤 대회의 작품들을 선택
&field=game+life // 게임과 생활 분야의 작품들 선택
&rate=1+2 // 대상과 금상 선택
```

단, 옵션은 필터링 용이라는건 변함이 없기에
`/api/list/?division=software&type=digital-contents+sunrin-thon&field=game+life` 대로 요청 시, 응답 데이터는 아래의 조건을 모두 만족한다.

- 소프트웨어과의 작품이다.
- 디지털 콘텐츠 경진대회나 선린 해커톤의 결과물이다.
- 분야는 게임이나 생활이다.

### 옵션

기본적으로 옵션 미사용시 전체 데이터 반환

#### `division`

`division`(학과)에 넣을 수 있는 값: String

학과         | 값
------------ | ------------
정보보호과   |
소프트웨어과 | software
테크노경영과 |
멀티미디어과 |

#### `year`

해당 연도의 포트폴리오들을 반환함.

`year`(연도)에 넣을 수 있는 값: String

값(year)   | 설명
---------- | --------------------
2017       | 2017년의 데이터 요청
2016       | 2016년의 데이터 요청

#### `type`

대회 계열

`type`(대회종류)에 넣을 수 있는 값: String

값(int)          | 설명
---------------- | ----------------------
digital-contents | 디지털 콘텐츠 경진대회
mobile-contents  | 모바일 콘텐츠 경진대회
sunrin-thon      | 선린 해커톤

#### `field`

`field`(분야)에 넣을 수 있는 값: String

값(int)     | 설명       | 디콘 | 모콘 | 선린톤
-------     | ---------- | ---- | ---- | ------
game        | 게임       | X    | O    | O
life        | 생활       | X    | O    | O
application | 응용       | O    | X    | X
web         | 웹 콘텐츠  | O    | X    | X
multimedia  | 멀티미디어 | O    | X    | X

#### `rate`

`rate`(상 종류)에 넣을 수 있는 값: String

값(int) | 설명 |
------- | ---- |
1       | 대상 |
2       | 금상 |
3       | 은상 |
4       | 동상 |

#### `name`

`name`(작품명)에 넣을 수 있는 값: String

#### `developer`

`developer`(참여자이름)에 넣을 수 있는 값: String

---

### 반환 데이터 예시 (작품 목록)

Request `/api/list`

Response

```json
{
  "projectName": "작품명",
  "teamName": "팀명",
  "developers": ["홍길동", "철수", "영희"],
  "contestInfo": {
    "contest": "digital-contents",
    "field": "game",
    "rate": "1"
  },
  "qualification": [
    {
      "title": "개발 환경",
      "contents": [
        {
          "title": "OS",
          "contents": "Microsoft Windows 10"
        },
        {
          "title": "플랫폼",
          "contents": "Intel(R) Core(TM) i5-5257U CPU 2.70GHz / RAM 8G"
        }
      ]
    }
  ],
  "year": 2017,
  "division": "software",
  "id": "id"
}
```

---

## API 호출 (작품 개요 (overview) 요청 )

URL: /api/overview?id=[id]

`id` 값: list 요청시 전송된 데이터에 들어있는 id값

---

### 반환 데이터 예시 (작품 개요 요청)

Request `/api/overview?id=[id]`

Response

```md
작품 개요
```

---

## API 호출 (작품 설명 (description) 요청 )

URL: /api/description?id=[id]

`id` 값: list 요청시 전송된 데이터에 들어있는 id값

### 반환 데이터 예시 (세부설명 요청)

Request `/api/description?id=[id]`

Response

```md
# 작품명

## 메인 화면

![메인 화면](/api/image/[id]/1.png)

메인화면입니다.

```

이미지 url은 `/api/image/{작품 id}/{파일명}` 의 규칙으로 되어있음

---
