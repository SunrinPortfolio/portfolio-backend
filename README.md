# sunrin-portfolio backend

> Sunrin Internet High School Software Division Portfolio Site

서버 실행 명령어: `npm start`

## API 호출

기본 URL: /api/list/\[학과]

\[학과]에 넣을 수 있는 값: int(1~4)

값(int) | 설명
------- | ------------
1       | 정보보호과
2       | 소프트웨어과
3       | 테크노경영과
4       | 멀티미디어과

### 옵션

기본적으로 옵션 미사용시 전체 데이터 반환

`/?date=\[연도]`

해당 연도의 포트폴리오들을 반환함.

\[연도]에 넣을 수 있는 값: year(2017)

값(year)   | 설명
---------- | --------------------
2017       | 2017년의 데이터 요청

---

`/?type=[대회종류]`

해당 대회의 포트폴리오들을 반환함

\[대회종류]에 넣을 수 있는 값: int(1~2)

값(int) | 설명
------- | ----------------------
1       | 디지털 콘텐츠 경진대회
2       | 모바일 콘텐츠 경진대회

---

`/?subType=[계열]`

해당 계열의 포트폴리오들을 반환함

[계열]에 넣을 수 있는 값: int(1~2)

값(int) | 설명
------- | ----
1       | 게임
2       | 생활

type 옵션이 있어야만 작동함.

---

`/?rate=[상종류]`

해당 상을 수상한 포트폴리오들을 반환함

[상종류]에 넣을 수 있는 값: int(1~4)

값(int) | 설명
------- | ----
1       | 대상
2       | 금상
3       | 은상
4       | 동상

---

`/?name=[작품명]`

해당 작품의 데이터를 반환함

\[작품명]에 넣을 수 있는 값: str

---

`/?developer=[참여자이름]`

해당 참여자가 참여한 포트폴리오들을 반환함

\[참여자이름]에 넣을 수 있는 값: str

### 반환 데이터 예시

```json
{
  "projectName": "Ten Daze",
  "teamName": "담다디담다디담다디담 담다디다담 다다담",
  "developers": ["양준석", "백승훈", "김민규", "고동연"],
  "contestInfo": {
    "type": {
      "main": 1,
      "sub": 1
    },
    "rate": 1,
    "year": 2017
  },
  "qualification": [{
    "title": "개발 환경",
    "contents": [{
      "title": "OS",
      "content": "Microsoft Windows 10"
    }, {
      "title": "플랫폼",
      "content": "Intel(R) Core(TM) i5-5257U CPU 2.70GHz / RAM 8G"
    }, {
      "title": "프로그래밍 제작 툴",
      "content": "Microsoft Visual Studio C++ 2015"
    }, {
      "title": "그래픽 프로그램",
      "content": "Adobe Photoshop CC"
    }, {
      "title": "기타 도구",
      "content": "RGEngine_2016_1.1.1 (동아리 프레임워크)"
    }]
  }, {
    "title": "사용환경",
    "contents": [{
      "title": "OS",
      "content": "Microsoft Windows 7, Windows 10"
    }, {
      "title": "플랫폼",
      "content": "I5 3세대, 4GB"
    }, {
      "title": "기타",
      "content": "DirectX SDK June 2010"
    }]
  }],
  "overview": "2016년 11월 디지털 콘텐츠 경진대회 당시, 어느 한 팀의 기획자 밑에서 프로그래머로 ~",
  "description": "[img-1]{메인 화면}게임시작, 게임방법, 수집품 3개의 버튼을 ~"
}
```
