export default [{
    projectName: "KKiro3D",
    teamName: "우리가만든것우리가쓰자",
    developers: ["유덕남"],
    contestInfo: {
      type: {
        main: 1,
        sub: 2
      },
      rate: 1,
      year: 2016
    },
    qualification: [{
      title: "웹호스팅",
      contents: [{
        title: "웹호스팅 서비스 업체",
        content: ""
      }, {
        title: "홈페이지 주소",
        content: ""
      }, {
        title: "Web Server",
        content: ""
      }, {
        title: "Server-side Language",
        content: "Node.js"
      }, {
        title: "DBMS",
        content: ""
      }, {
        title: "기타",
        content: ""
      }]
    }, {
      title: "개발도구",
      contents: [{
        title: "텍스트에디터",
        content: "Atom"
      }, {
        title: "그래픽 프로그램",
        content: "Blender"
      }, {
        title: "게시판, 회원 프로그램",
        content: ""
      }, {
        title: "기타 도구",
        content: "Webpack, Babel, gulp, React, gl-matrix"
      }]
    }],
    overview: "웹에서 동작하는 (3D) 게임 엔진은 몇몇 이썼지만, 구조상 렌더러에 단단히 묶여 있어서 멀티플레이어나 headless 세션이 불가능한 무넺가 있었습니다. 또, 이벤트를 걸기 불편하다는 문제도 있었고 직렬화도 어려워  저장하기 힘든 문제도 있었습니다. kkiro3d의 상태 관리자인 fudge는 엔진과 뷰(렌더러)를 철저하게 분리하고, JSON을 적극적으로 활용하여 직렬화와 네트워크 연동 등이 쉽도록 하였고 mutation을 시그널을 통하도록 하여 함수형 프로그래밍 (pure function)의 장점도 가져올 수 있도록 했습니다. 시그널을 사용하여 이벤트를 걸기 쉽고, 필요하다면 mutation을 취소하거나 변경해서 잘못된 값이 설정되는 일도 막을 수 있습니다. 또 Entity-Component-System 구조를 채택하여 필요한 컴포넌트를 손쉽게 재활용할 수 있게 했습니다.\n유니티나 언리얼 엔진같은 상용 게임 엔진은 사용하기 편리하도록 에디터를 지원합니다. kkiro3d도 마찬가지로 장면을 편집할 수 있는 에디터를 제공하여 손쉽게 맵을 편집할 수 있도록 했습니다. 멀티플레이어도 내장하여 에디터와 실제 게임, 에디터-에디터, 게임-게임 모든 경우에서 멀티 플레이어를 지원할 수 있도록 했습니다. 실제로 게임을 플레이하면서 에디터에서 캐릭터의 위치를 직접 보고 맵을 편집할 수 있고, 에디터 여러 개가 접속해서 여러 사람이 협업하면서 동시에 맵을 편집할 수도 있습니다. 게임에서의 멀티플레이어도 지원되어 여러 플레이어가 동시에 한 맵에서 게임을 즐길 수 있습니다.\n멀티플레이어는 엔진 자체가 headless으로 동작하며 deterministic하고, JSON으로 직렬화되기 쉬운 구조를 가지고 있기 때문에 손쉽게 구현될 수 있습니다. kkiro3d의 동기화 라이브러리인 locksmith는 이런 상태 기계를 동기화해주고, kkiro3d는 이를 이용하여 멀티플레이어 동기화 기능을 내장하고 있습니다. headless로 동작하는 특성상 서버도 간단하게 구현할 수 있습니다. 멀티플레이어가 동작하면 시그널 후크가 활성화되어서 동기화를 수행하는 구조이기 때문에 특별한 처리 없이 멀티플레이어를 사용할 수 있습니다. 후크가 없어도 상관 없기 때문에 싱글 플레이어도 마찬가지로 그냥 지원합니다.\n또, Three.js같은 3D 렌더러는 사용하기에는 편리하지만 렌더러의 효과같은 것들을 확장하기 어렵다는 문제가 있습니다. kkiro3d의 렌더러인 webglue는 Scene graph를 JSON으로 받도록 하고, 이펙트 리스트를 관리하여 WebGL 렌더링 방법을 쉽게 변경할 수 있도록 했습니다. 섀도우 매핑, Depth / Normal / Object Pick, 인스턴싱 등을 이 이펙트를 활용하여 간단하게 추가할 수 있습니다. 마찬가지로 에디터에서 보여지는 각종 위젯들도 이펙트를 사용해 표시되어 원한다면 해당 위젯을 게임 장면에 띄우는 등 유연하게 처리할 수 있게 됩니다.\n웹이라는 특성상 UI는 3D 렌더러에서 그릴 필요가 없이 DOM을 사용하면 간단하게 구현할 수 있어서 엔진에 시그널을 부착해서 DOM을 갱신하면 손쉽게 UI를 구현할 수 있습니다. kkiro3d에는 React 라이브러리와 연동하여 엔진에 시그널을 자동으로 부착하는 react-fudge 라이브러리를 포함하고 있습니다. 이를 사용해서 에디터 UI를 구현할 수 있게 했습니다. 원하지 않는다면 3D 렌더러를 사용하지 않고 DOM만 사용할 수도 있습니다. 이러면 React의 상태 관리자중 하나인 Flux, redux와 비슷하게 사용할 수도 있습니다.\n마지막으로 kkiro3d의 각 구성요소를 따로 라이브러리로 만들어서 원한다면 그 라이브러리만 쓸 수 있도록 했습니다.\n웹에서 동작하는 게임 엔진이라는 특성상 특별한 처리 없이 크로스 플랫폼 지원이 가능하고, 다운로드 하지 않고 플레이 할 수 있는 등 접근성이 높고, 에디터를 내장하고 있다는 특성상 개발이 쉬워져서 유용하게 쓰일 수 있지 않을까 기대해 봅니다."
  },
  {
    projectName: "Pacific.io",
    teamName: "응 니네 안오지구연",
    developers: ["홍종현", "최예찬", "전하연", "박효정"],
    contestInfo: {
      type: {
        main: 1,
        sub: 2
      },
      rate: 2,
      year: 2016
    },
    qualification: [{
      title: "웹호스팅",
      contents: [{
        title: "웹호스팅 서비스 업체",
        content: "Microsoft Azure"
      }, {
        title: "홈페이지 주소",
        content: "http://pacific.applepi.kr"
      }, {
        title: "Web Server",
        content: ""
      }, {
        title: "Server-side Language",
        content: "Node.js / Express"
      }, {
        title: "DBMS",
        content: "MongoDB"
      }, {
        title: "기타",
        content: ""
      }]
    }, {
      title: "개발도구",
      contents: [{
        title: "텍스트에디터",
        content: "JetBrains WebStorm"
      }, {
        title: "그래픽 프로그램",
        content: "HTML / CSS"
      }, {
        title: "게시판, 회원 프로그램",
        content: "직접 작성"
      }, {
        title: "기타 도구",
        content: "JQuery, Animated.css"
      }]
    }]
  },
  {
    projectName: "srNow & srHome",
    teamName: "srDevelopers",
    developers: ["구창림", "진상현", "오준석", "김태윤", "박종운"],
    contestInfo: {
      type: {
        main: 1,
        sub: 2
      },
      rate: 2,
      year: 2016
    },
    qualification: [{
      title: "웹호스팅",
      contents: [{
        title: "웹호스팅 서비스 업체",
        content: "https://www.phps.kr"
      }, {
        title: "홈페이지 주소",
        content: "https://iori.kr"
      }, {
        title: "Web Server",
        content: "Nginx(CentOS 6)"
      }, {
        title: "Server-side Language",
        content: "Node.js"
      }, {
        title: "DBMS",
        content: "MongoDB"
      }, {
        title: "기타",
        content: ""
      }]
    }, {
      title: "개발도구",
      contents: [{
        title: "텍스트에디터",
        content: "Vim"
      }, {
        title: "그래픽 프로그램",
        content: "Adobe Photoshop CC, Adobe Illustrator CC"
      }, {
        title: "게시판, 회원 프로그램",
        content: ""
      }, {
        title: "기타 도구",
        content: "Git, Android Studio"
      }]
    }]
  },
  {
    projectName: "Clothup",
    teamName: "CU(ClothUp) tomorrow",
    developers: ["김주용", "방진형", "방진성", "이예진", "이예림"],
    contestInfo: {
      type: {
        main: 1,
        sub: 2
      },
      rate: 3,
      year: 2016
    },
    qualification: [{
      title: "웹호스팅",
      contents: [{
        title: "웹호스팅 서비스 업체",
        content: "Conoha(Virtual Server)"
      }, {
        title: "홈페이지 주소",
        content: "http://clothup.me"
      }, {
        title: "Web Server",
        content: "Apache"
      }, {
        title: "Server-side Language",
        content: "Python"
      }, {
        title: "DBMS",
        content: "SQLite3"
      }, {
        title: "기타",
        content: ""
      }]
    }, {
      title: "개발도구",
      contents: [{
        title: "텍스트에디터",
        content: "Sublime Text 3"
      }, {
        title: "그래픽 프로그램",
        content: "Adobe Photoshop CC, Adobe Illustrator CC, Adobe Premiere Pro CC"
      }, {
        title: "게시판, 회원 프로그램 (프레임워크 포함)",
        content: "CSS Framework: Materialize / Server Framework: Django / JavaScript Framework: jQuery"
      }, {
        title: "기타 도구",
        content: ""
      }]
    }]
  }
]
