# sunrin-portfolio backend

> Sunrin Internet High School Software Division Portfolio Site

서버 빌드 명령어: `npm run build`

서버 실행 명령어: `npm run start` (빌드 없이 실행), `npm run start-with-build` (빌드 후 실행)

---

## API 호출 (목록 요청)

URL: `/api/list`

포트폴리오들을 목록으로 반환

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

`year`(연도)에 넣을 수 있는 값: int(2016~2017)

값(year)   | 설명
---------- | --------------------
2017       | 2017년의 데이터 요청
2016       | 2016년의 데이터 요청

#### `type`

대회 계열

`type`(대회종류)에 넣을 수 있는 값: int(1~3)

값(int) | 설명
------- | ----------------------
1       | 디지털 콘텐츠 경진대회
2       | 모바일 콘텐츠 경진대회
3       | 선린 해커톤

#### `subType`

`type`의 하위 옵션 (세부 계열)

`subtype`(세부 계열)에 넣을 수 있는 값: int(1~3)

값(int) | 설명(모콘, 선린톤) | 설명 (디콘)
------- | -------------------| ----
1       | 게임               | 응용
2       | 생활               | 웹 콘텐츠
3       | -                  | 멀티미디어

#### `rate`

`rate`(상 종류)에 넣을 수 있는 값: int(1~3)

값(int) | 설명 (디콘, 모콘) | 설명 (선린톤)
------- | ----------------- | -------------
1       | 대상              | 금상
2       | 금상              |
3       | 은상

#### `name`

`name`(작품명)에 넣을 수 있는 값: str

#### `developer`

`developer`(참여자이름)에 넣을 수 있는 값: str

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
    "contest": "디지털 콘텐츠 경진대회",
    "field": "응용",
    "rate": "대상"
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
  "id": 1
}
```

---

## API 호출 (작품 개요 (overview) 요청 )

URL: /api/overview?id=[id]

`id` 값: list 요청시 전송된 데이터에 들어있는 id값

---

### 반환 데이터 예시 (작품 개요 요청)

Request `/api/overview?id=1`

Response

```md
작품 개요
```

---

## API 호출 (작품 설명 (description) 요청 )

URL: /api/description?id=[id]

`id` 값: list 요청시 전송된 데이터에 들어있는 id값

### 반환 데이터 예시 (세부설명 요청)

Request `/api/description?id=1`

Response

```md
# 작품명

## 메인 화면

![메인 화면](/api/image/1/1.png)

메인화면입니다.

```

이미지 url은 `/api/image/{작품 id}/{파일명}` 의 규칙으로 되어있음

---
