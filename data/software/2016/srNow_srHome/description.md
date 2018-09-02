# srNow & srHome

## 기본 웹페이지 srNow

![기본 웹페이지 srNow](images/1.png)

srNow는 브라우저에서 기본 웹페이지로 설정해 사용하도록 제작한 페이지입니다. 기본적으로 Google 검색을 지원하여 기본 웹페이지 본질의 기능을 수행하며, 학교 인트라넷에서 제공하는 서비스 일부를 srCard라는 정보 카드로 정리해 표시해줍니다. srCard는 급식, 시간표, 학사 일정, 마감이 얼마 남지 않은 대회, 공모전 등의 정보 등 다양한 정보를 실시간으로 업데이트하여 보여줍니다. 이로서 사용자는 그 어떤 인트라넷 서비스보다 더 빠르고 자연스럽게 다양한 학교 정보를 파악 할 수 있죠. 프로필 옆에 있는 집 아이콘을 눌러 메인 서비스인 srHome에 진입할 수 있습니다.

## 메인 서비스 웹페이지 srHome

![메인 서비스 웹페이지 srHome](images/2.png)

주 서비스인 srHome입니다. 공지사항이나 일정 등 학교생활에 필요한 주요 알림들을 가장 먼저 표시해주고, 수많은 인트라넷 서비스를 5가지로 정리하여 쉽고 빠르게 원하는 정보를 탐색할 수 있도록 하였습니다. 뿐만 아니라 학교 주변 날씨와 srNow에서도 있었던 정보 카드인 srCard를 배치하여 추가적으로 학교에 밀접한 알림들을 확인할 수 있습니다.

### 학사정보 페이지

![학사정보 페이지](images/3.png)

학사정보 페이지에서는 학교에서 제공하는 여러 공지사항, 학사일정, 외부대회 안내 그리고 수행평가 안내 등 학교생활과 관련된 여러 학사정보를 제공합니다.

### 성적관리 페이지

![성적관리 페이지](images/4.png)

성적관리 페이지에서는 자신이 받은 수행평가 정보를 과목별로 자세히 확인할 수 있도록 했으며, 출결 관리 또한 대시보드 형식으로 제공하여 정확한 수치를 인지할 수 있도록 하였습니다.

### 커뮤니티 페이지

![커뮤니티 페이지](images/5.png)

커뮤니티에서는 내가 가진 의견을 자유롭게 쓸 수 있는 자유게시판과 선린 주변에 있는 맛집 정보를 공유하고 소통할 수 있는 선린 맛집 공유, 학교생활을 하면서 제안하고 싶은 점이나 불편한 점을 쓸 수 있는 건의 사항, 학습이나 개발, 전공에 대해 궁금한 점을 질문하고 내가 가진 지식을 공유하며 답변할 수 있는 선린 지식인 기능이 있습니다.

## Android 앱

![Android 앱](images/6.png)

안드로이드에서는 대부분의 srNow와 srHome 서비스를 네이티브 앱으로 사용할 수 있습니다.

삼성 갤럭시 스마트폰에서는 기존의 서비스와 함께 Mobeam 솔루션을 적용하여 현재 학교 급식실 등에서 사용하는 바코드 인식 시스템에 대응하도록 적용하였습니다.

### Android 앱에서 사용한 기능

Android 앱에서는 Retrofit을 이용한 서버와의 세션 유지와 HTTP 통신을 이용하였으며, BeamingAPI를 이용하여 바코드를 읽어와 모바일 학생증을 구현하였습니다.