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

/?date=\[연도]

\[연도]에 넣을 수 있는 값: year(2017)

옵션 미사용: 모든 연도의 데이터 요청

값(year)   | 설명
---------- | -----------------------
연도(year) | 해당 연도의 데이터 요청
