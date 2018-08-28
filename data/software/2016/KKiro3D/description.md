# KKiro3D

![img-1](editor.html) 에디터를 켜면 이런 화면이 나타납니다.

좌측 상단에는 장면 로드나 저장, 멀티플레이어 접속/접속 해제를 할 수 있는 메뉴가 나타납니다. 우측 상단에는 게임을 일시 정지하는 버튼과 멀티플레이어 접속이 된 경우 연결 상태와 접속자 수가 나타납니다.
중앙에는 실제 게임 오브젝트들을 편집할 수 있는 3D 뷰가 나타납니다. 우측에는 Outline과 Properties 메뉴가 나타납니다.

![img-2](메인메뉴)

메인 메뉴에는 File과 Network 카테고리가 있습니다. File을 누르면 다음과 같은 항목이 나타납니다.
New - 비어있는 장면을 불러옵니다.\nLoad JSON… - JSON을 직접 입력해서 장면을 불러올 수 있습니다. Upload...를 누르면 파일을 열어 장면을 불러올 수도 있습니다.
Export JSON… - 현재 불러온 장면을 JSON으로 출력합니다. Download...를 누르면 파일로 저장할 수도 있습니다.
Load Entity… - 장면에 엔티티 JSON을 불러옵니다. Upload...를 누르면 파일을 열어 불러올 수도 있습니다.
Load from LocalStorage - 브라우저 쿠키로부터 장면을 불러옵니다.
Save to LocalStorage - 브라우저 쿠키로 장면을 저장합니다. 쿠키를 사용해서 브라우저가 닫혀도 데이터가 계속 남아있습니다. Network를 누르면 다음과 같은 항목이 나타납니다.
Connect… - 서버의 주소를 입력받아서 해당 서버로 접속합니다.
Disconnect - 서버와의 연결을 종료합니다.

![img-3](우측 상단 메뉴)

우측 상단에는 게임을 일시 정지하는 버튼과 멀티플레이어 접속이 된 경우 연결 상태와 접속자 수가 나타납니다. 연결이 실패한 경우 붉은색 X가 표시되며, 싱글플레이어 모드인 경우 표시되지 않습니다.

![img-4](3D 뷰어)

실제로 게임을 편집할 수 있는 화면으로, 게임 오브젝트들이 표시됩니다. 블렌더와 비슷한 단축키와 조작법을 채택하고 있습니다.
우클릭을 통해서 객체를 선택할 수 있습니다. 우클릭 후 드래그를 하면 축에 고정되지 않고 객체를 이동할 수 있습니다.
좌클릭을 통해서 3D 커서를 설정할 수 있습니다. 3D 커서는 객체 위에 고정되며, 엔티티가 추가될 때 기본 위치로 설정됩니다. 좌클릭으로 축 (화살표)를 드래그하면 해당 방향으로 객체를 이동할 수 있습니다.
휠을 돌려서 확대율을 변경할 수 있습니다. 휠을 누르고 마우스를 드래그해서 카메라를 회전합니다.\n키패드의 1, 3, 7 키를 눌러서 해당 방향으로 카메라를 돌릴 수 있습니다.\n키패드의 5키를 눌러서 perspective / orthographic 모드를 전환할 수 있습니다.
스페이스바를 눌러 카메라를 중앙으로 옮길 수 있습니다.

![img-5](3D 커서)![img-6](객체 선택)

객체가 선택되면 오렌지색으로 외곽선이 표시되며, 중앙에 각 축을 나타내는 화살표가 표시됩니다. 이 화살표를 드래그해서 해당 방향으로 움직일 수 있습니다. 다른 플레이어가 선택한 객체는 파란색으로 빛나고, 다른 플레이어의 카메라는 초록색으로 빛납니다.

![img-7](위젯)![img-8](Camera)카메라는 선택하면 Near/ Far 값도 변영되어 카메라의 Frustum 전체가 보이게 됩니다. 이는 섀도우 매핑 영역을 지정할 때 우용합니다.

![img-9](Spot Light)![img-10](Outline)![img-11](Properties)![img-12](index.html)

실제 게임이 실행되는 화면입니다. 테스트용으로 마인크래프트와 비슷하게 블럭을 설치하고 제거할 수 있는 게임을 만들었습니다. WASD키로 이동하고 스페이스바로 점프합니다. 좌클릭으로 블럭을 파괴하고 우클릭으로 설치합니다. 휠을 돌려서 설치할 블럭을 변경할 수 있습니다.\n<b>ECS 프레임워크</b>kkiro3d는 Entity-Compoent-System 구조와 시그널을 사용합니다. \n<link>http://github.com/yoo2001818/fudge</link>\n<b>시그널</b>\n시그널은 데이터 변경과 같이 특정 일이 발생할 때 발동되는 이벤트 리스너입니다. kkiro3d에서는 모든 데이터 변경을 시그널을 사용하도록 하여 시스템 개발을 손쉽게 할 수 있게 합니다. kkiro3d의 시그널은 일반적인 시그널과는 달리 단계와 핸들러와 부모가 존재합니다. 이를 사용해서 명령을 취소하거나 변경하는 걸 손쉽게 구현할 수 있고, 데이터 변경을 시그널을 통해 간편하게 호출할 수 있게 합니다.\n시그널에는 다음과 같은 단계들이 있습니다:\npre - 다른 리스너들이 실행하기 전에 제일 먼저 실행됩니다. 액션을 수정하거나 취소할 수 있습니다.\n(main) - 핸들러가 실행되기 직전에 실행됩니다.\n(handler) - 시그널을 만들 때 함께 지정한 핸들러로 데이터 변경을 수행하는 등의 동작을 수행합니다.\nPost - 핸들러를 실행한 뒤 실행됩니다.\n<b>액션</b>\n액션은 특정 명령을 수행하는 함수입니다. 시그널을 감싸는 함수일수도, 그냥 일반 함수일수도 있습니다. 컴포넌트가 만들어질 때 signal 함수로 감싸져 있으면 시그널을 감싸는 함수가 만들어집니다.\n<b>시스템</b>\n시스템은 엔진에 편리한 기능들을 제공하거나, 캐싱을 수행하거나, 시그널을 수신해 다른 액션을 발생시키는 역할(예: 물리엔진, 영역 제한)을 합니다.\n<b>컴포넌트</b>\n컴포넌트는 엔티티의 한 요소를 나타냅니다. (예: 현재 위치, 가속도) 컴포넌트는 기본 데이터(생성자)와 컴포넌트와 연결된 액션 목록으로 이루어집니다. 컴포넌트 객체는 pure JSON으로 이루어져 있어 직렬화와 네트워킹 처리가 간편합니다.\n<b>렌더링</b>\nkkiro3d는 webglue를 사용해 렌더링을 수행합니다. webglue는 WebGL 렌더링 경로를 JSON으로 작성할 수 있게 하여 개발이 편리하도록 만든 라이브러리입니다. 이를 통해 kkiro3d에서는 이펙트 리스트를 관리하여 WebGL 렌더링 방법을 쉽게 변경할 수 있도록 했습니다.\n<link>http://github.com/yoo2001818/webglue</link>\n[img-12]{}이 이펙트를 사용하여 섀도우 매핑이 구현되어 있습니다.\n<b>멀티플레이어</b>\nkkiro3d는 멀티플레이어 세션을 지원합니다. 특히 에디터와 게임이 동시에 같은 서버에 접속하여 플레이하며 편집할 수 있어서 플레이를 하면서 다른 사람이 실시간으로 게임을 수정하는 일이 가능하고, 에디터 여러개가 접속하여 동시에 게임을 편집하거나 게임 여러개가 접속하여 서로 상호작용을 하는 것도 가능합니다.\n이를 위해 엔진을 deterministic하게 만들고 3D 렌더러와 같은 뷰와 실제 게임 로직을 분리하고, 시그널의 후크를 사용해 시그널 요청을 가로채서 서버와의 동기화를 하도록 만들었습니다. 서버와 클라이언트간의 통신은 WebSocket을 사용합니다. 서버에서는 Node.js를 사용하여 서버용 코드를 따로 작성할 필요 없이 게임 로직을 작성하는 것만으로도 멀티플레이어 동기화가 가능하도록 했습니다. 특히, 게임 전체가 JSON으로 이루어져 있어 직렬화가 쉽고 시그널을 사용한다는 특성상 별다른 처리 없이 컨벤션을 지키며 만들기만 해도 알아서 동기화가 이루어집니다.\n<b>빌트인 컴포넌트</b>\nkkiro3d에서 기본적으로 사용할 수 있는 컴포넌트들을 나열합니다. 컴포넌트의 각 숫자 필드는 드래그해서 간단하게 변경할 수 있습니다.[img-13]{Transform}엔티티의 좌표와 회전 / 크기를 설정합니다. Parent가 설정된 경우 local transform이 parent 기준 좌표로 설정됩니다. 이 경우 transform은 절대 좌표계로 표시됩니다.[img-14]{BlenderController}회전에 따라 가운데 지점과 반지름 기준으로 위치를 재설정합니다. 3D 뷰의 카메라를 구현하는데 사용됩니다.[img-15]{FpsController}1인칭 시점 조작을 구현하기 위한 컴포넌트입니다. Pitch와 Yaw를 받아 Parent의 위치를 바꾸거나 회전할 수 있도록 합니다.[img-16]{Camera}카메라를 나타냅니다. Perspective와 Orthogonal, Near / Far 값과 FOV / Zoom, Aspect(종횡비) 값을 설정할 수 있습니다.\n종횡비 값은 0인 경우 렌더링되는 화면의 비율에 자동으로 맞춰집니다. 그 외의 값은 해당 종횡비로 강제로 설정됩니다.[img-17]{Light}광원을 나타냅니다. 타입, 색상과 Ambient / Diffuse / Specular와 Attenuation(Decay) / 그림자 여부를 설정할 수 있습니다.\nAttenuation은 Point / Spot Light에서만 보여지고, Angle는 Spot Light에서만 보여집니다. Shadow는 체크된 경우 해당 엔티티에 Camera 컴포넌트가 존재하는 경우 해당 카메라를 기반으로 섀도우 매핑을 활성화합니다.[img-18]{Mesh}메시를 렌더링합니다. Geometry와 Material, 보임 여부와 컬링 반전 여부(Mirror)를 설정할 수 있습니다. 머테리얼의 셰이더가 지원하는 경우 인스턴싱이 자동으로 실행됩니다.[img-19]{Skybox}Skybox를 렌더링합니다.[img-20]{Parent}(Transform을 상속받을) 부모 객체를 설정합니다.[img-21]{Collision}충돌 영역을 설정합니다. 중심점, 크기, 활성화 여부를 설정할 수 있습니다.[img-22]{NetworkTemporary}네트워크 동기화로 인해 생성된 임시 객체임을 마킹하는 컴포넌트입니다. Owner가 접속을 종료하면 객체가 삭제됩니다.[img-23]{Animation}키프레임 애니메이션을 설정합니다. 시작, 반복 횟수, 길이 등을 설정할 수 있고 애니메이션 데이터 JSON을 붙여넣을 수 있습니다. 애니메이션 데이터는 COLLADA 포맷과 다소 비슷합니다. 지원되는 interpolation 타입은 다음과 같습니다:\nlinear\neaseIn\neaseOut\neaseInOut\nbezier\n지원되는 channel 타입은 다음과 같습니다:\ntransform.position.x\ntransform.position.y\ntransform.position.z\ntransform.scale.x\ntransform.scale.y\ntransform.scale.z\ntransform.rotation.x\ntransform.rotation.y\ntransform.rotation.z\ntransform.rotation.w\ntransform.rotation.eulerX\ntransform.rotation.eulerY\ntransform.rotation.eulerZ\n이 interpolation과 channel은 시스템을 변경해서 직접 추가할 수도 있습니다.<b>컴포넌트 직접 만들기</b>\n컴포넌트를 직접 만들려면 엔진을 생성할 때 components에 해당 컴포넌트를 삽입하면 됩니다. 컴포넌트 객체에 schema가 지정된 경우 schema를 기반으로 컴포넌트 GUI를 자동으로 생성합니다. actions값에 따라서 액션과 시그널을 자동으로 생성하고, component를 초기 데이터 생성자로 사용합니다.\n<b>빌트인 시스템</b>kkiro3d에서 기본적으로 사용할 수 있는 시스템들을 나열합니다.\n<b>Family</b>\n주어진 컴포넌트들을 가진 엔티티들의 목록을 가져올 수 있게 하는 시스템입니다.\nengine.systems.family.get(‘name’, ‘name2’, …) 꼴로 familyEntry를 반환해서 familyEntry.onAdd, onRemove 시그널에 등록하거나 familyEntry.entities의 엔티티 목록을 참조할 수 있습니다.\n<b>Animation</b>\n애니메이션 동작을 수행하는 시스템입니다.\n<b>BlenderController</b>\nBlenderController 컴포넌트에 따라 회전에 맞춰 위치를 재설정하는 시스템입니다.\n<b>FPSController</b>\nFPSController 컴포넌트에 따라 위치와 회전을 변경하는 시스템입니다.\n<b>CameraMatrix</b>카메라 행렬을 관리하는 시스템입니다. .getProjection, .getView, .getProjectionView등으로 행렬을 받을 수 있습니다.\n<b>Matrix</b>\n객체의 행렬을 관리하는 시스템입니다. .get, .getInverse, .getNormal, .getLocal, .getLocalInverse, .getLocalNormal등으로 행렬을 받을 수 있습니다.\n<b>Collision</b>\n충돌 검사를 수행하는 시스템입니다. 충돌하면 collision.collide 액션이 발생합니다.\n<b>Editor</b>\n에디터 카메라와 UI를 관리하는 시스템입니다.\n<b>Network</b>\n네트워크 동기화를 관리하는 시스템입니다. getData(id), getId()등으로 메타데이터를 불러올 수 있고, connect(endpoint), disconnect()로 서버에 연결을 하거나 끊을 수 있습니다.\n<b>Parent</b>\n엔티티의 부모를 설정할 수 있게 해주는 시스템입니다. 또한 엔티티 계층 생성 / 삭제도 수행합니다. getChildren(entity)로 자식 목록을 가져올 수 있고, getHierarchy(entity)로 직렬화 가능한 엔티티 계층 데이터를 가져올 수도 있습니다. 이 계층 데이터는 parent.createHierarchy(data)로 장면에 불러올 수 있습니다. .root, .orphans 배열에서 루트 엔티티와 고아 엔티티 목록을 가져올 수도 있습니다."
    \n<b>Renderer</b>\n렌더링 정보를 담는 시스템입니다.\n
    <b>Time</b>\n엔진의 현재 시간과 일시정지 / 재생 등을 담당하는 시스템입니다\n<b>시스템 직접 만들기</b>\n시스템은 엔진을 생성할 때 시스템 객체를 systems 안에 넣어서 만들 수 있습니다. 혹은 함수를 넣으면 알아서 초기화됩니다.\n<b>설치 방법 및 엔진 사용법</b>\nkkiro3d-test-project 예제 프로젝트 (http://github.com/yoo2001818/kkiro3d-test-project)는 kkiro3d를 구동하는 기본적인 예제입니다. (구동되는 게임 자체는 간단한 마인크래프트 클론입니다)\nNode.js가 설치되어 있는 상태에서 npm install gulp webpack-dev-server -g를 실행합니다. 프로젝트를 클론한 뒤 npm install을 실행하고, gulp를 실행하면 프로젝트가 빌드되어 dist/와 lib/ 폴더가 만들어집니다.\n`webpack-dev-server --hot --inline`을 실행하면 코드가 변경되면 실시간으로 재시작됩니다. 프로젝트가 빌드된 뒤 node lib/server.js를 실행하면 멀티플레이어 서버를 켤 수 있습니다. 에디터의 경우에는 Network → Connect...를 눌러서 ws://localhost:23482/에 접속하고, 게임의 경우에는 /index.html#ws://localhost:23482/ 와 같이 # 뒤에 서버 URL을 넣으면 접속할 수 있습니다.\nsrc/asset.js\n에셋 데이터를 담는 파일입니다. Shader, geometry, material, texture를 정의할 수 있는 부분입니다. webpack의 require를 통해서 텍스쳐와 OBJ, GLSL 셰이더를 불러올 수 있습니다.\n
    src/component\n컴포넌트들을 담는 폴더입니다. 각 컴포넌트는 다음과 같은 데이터를 가지고 있습니다:\ncomponent - 컴포넌트의 기본값입니다.\nschema – 컴포넌트 필드 데이터와 타입입니다. 동적으로 에디터에서 컴포넌트 뷰를 생성하기 위해 사용됩니다.\nactions - 액션 데이터입니다. signalRaw이나 signal 함수를 사용해서 해당 액션을 시그널로 만들 수 있습니다.\nsrc/system\n시스템들을 담는 폴더입니다. 시스템들은 엔티티 정보와 시그널을 받아서 데이터를 바꾸는 등의 역할을 합니다.\nsrc/renderer\n게임 렌더러를 초기화하는 코드입니다.\nsrc/client.js\n게임을 초기화하는 코드입니다.\nsrc/editor.js\n에디터를 초기화하는 코드입니다.\nsrc/server.js\n서버를 시작하는 코드입니다.\nsrc/util/startUpdate.js\n업데이트를 시작합니다. 배터리를 감지해서 충전중이 아니면 자동으로 30fps로 구동됩니다.