import dayjs from 'dayjs'

import { v4 } from 'uuid'

export const uuid = v4

export type sampleUserType = { id: number; name: string; phone: string }
export const sampleUserList: sampleUserType[] = [
  { id: 1, name: '구상언', phone: '010-3386-9350' },
  { id: 2, name: '팔상언', phone: '010-3386-9350' },
  { id: 3, name: '칠상언', phone: '010-3386-9350' },
  { id: 4, name: '이진일', phone: '010-1234-5678' },
  { id: 5, name: '이진이', phone: '010-1234-5678' },
  { id: 6, name: '이진삼', phone: '010-1234-5678' },
  { id: 7, name: '윤재범', phone: '010-1234-5678' },
  { id: 8, name: '윤재냥', phone: '010-1234-5678' },
  { id: 9, name: '윤재곰', phone: '010-1234-5678' },
  { id: 10, name: '서원주', phone: '010-1234-5678' },
  { id: 11, name: '서원수', phone: '010-1234-5678' },
  { id: 12, name: '서원해', phone: '010-1234-5678' },
  { id: 13, name: '김경한', phone: '010-1234-5678' },
  { id: 14, name: '김경박', phone: '010-1234-5678' },
  { id: 15, name: '김경멸', phone: '010-1234-5678' },
]

export const example = [
  {
    id: 1,
    code: 'P4523',
    brand: 'LEDARE 레다레',
    createdAt: 1619072306097,
    article:
      '컨테이너의 시대최근 쿠버네티스에 대한 관심이 높아지면서 컨테이너를 사용하는 기업들이 점차 늘어나고 있습니다. 컨테이너는 독립적인 공간을 따로 사용할 수 있고, 이식성이 좋으며, 무엇보다도 재기동이 상당히 빠르다는 장점이 있습니다. 마이크로 서비스를 구성하는 경우에는 컨테이너가 더더욱 좋은 옵션이 될 수 있습니다.그래서 컨테이너를 꼭 배워야 하나요?저는 개인',
    title: '프로덕트 기능의 우선순위는 어떻게 정하는 것이 좋을까?',
    state: 'waiting',
  },
  {
    id: 2,
    code: 'V9213',
    brand: 'STÖTTA 스퇴타',
    createdAt: 1597445427007,
    article:
      '시작하며 안녕하세요. 카카오엔터프라이즈 AI Assistant 팀 Phil(이민철), John(조승우), Eileen(안애림)입니다. AI Assistant 팀은 흔히 ‘AI 비서’라고 불리는 AI 어시스턴트 구현을 위해 필요한 기술을 연구하고, 서비스로 연결시키는 조직입니다. 자연어 처리(NLP, Natural Language Processing) 기술을',
    title: '핫한 이벤트 텍소노미 taxonomy 를 배우고 싶으시다면! - 1편',
    state: 'in-progress',
  },
  {
    id: 3,
    code: 'L5270',
    brand: 'ROLLSBO 롤스보',
    createdAt: 1582982774222,
    article:
      '개발을 진행하다 보면 어느 순간 package.json이 생각지도 못하게 길어진 것을 확인할 수 있습니다. 누군가 꾸준히 package를 관리한다면 좋겠지만 막상 그렇게 하기가 쉽지 않습니다.c 또한 길어진 package.json이 서비스상에서 큰 문제가 있는가라고 물어본다면,번들링 툴들이 tree shaking를 통해 안 쓰는 라이브러리를 제거해주기 때문',
    title: '설명은 잘하는데, 설득이 어려울 때',
    state: 'done',
  },
  {
    id: 4,
    code: 'B1254',
    brand: 'RYET 뤼에트',
    createdAt: 1644184725193,
    article:
      'Push Notification?Javascript로 를 통해 웹과 모바일에 푸쉬 메세지를 발송하는 PWA 기능입니다. 즉 브라우저에서 네이티브와 마찬가지로 사용자에게 알림 메세지를 보낼 수 있습니다. 아직 사파리 계열은 제대로 지원되고 있지 않지만 크롬, 안드로이드 에서는 네이티브와 같은 알림 메세지를 받아보실 수 있습니다. 이제 PWA의 푸쉬 메',
    title: '투자자는 어떤 스타트업에게 주목하고 있을까?',
    state: 'done',
  },
  {
    id: 5,
    code: 'S8301',
    brand: 'GODAFTON 고다프톤',
    createdAt: 1599642177896,
    article:
      '표준프레임워크는 웹기반 정보화시스템 구축시 필요로 하는 어플리케이션 아키텍처, 기본기능 및 공통 컴포넌트를 제공하는 프레임워크로서 다음과 같이 실행환경, 개발환경, 운영환경, 관리환경과 공통컴포넌트 로 구성되어 있습니다. 실행환경은 본인이 만드는 시스템의 실행의 기반이 되는 프레임워크 개발환경은 개발에 필요한 구현도구 IDE(표준프레임워크는 이클립스 기반으',
    title: '뉴욕타임즈의 과거, 현재, 미래',
    state: 'waiting',
  },
  {
    id: 6,
    code: 'L3010',
    brand: 'FUBBLA 푸블라',
    createdAt: 1593581733245,
    article:
      '순수함수란 무엇일까? 두 가지 특징이 있다. 입력이 같으면 결과도 같다. (the function return values are identical for identical arguments) 부작용(side effects)이 없다 (the function application has no side effect) 함수를 몇 번 호출하던지 관계없이 같은 값',
    title: '5개의 사업 중 성공한 사업과 실패한 사업의 차이 [박재욱] 1편',
    state: 'done',
  },
  {
    id: 7,
    code: 'B6922',
    brand: 'NÄVLINGE 네블링에',
    createdAt: 1626084944143,
    article:
      'GitHub Actions를 활용해서 master/main에 코드가 merge될때알아서 Release/Tag 를 만들어주도록 하는 방법입니다.- 단 1분만에 설정할 수 있습니다.안녕하세요.헤이딜러 안드로이드팀의 박상권입니다.GitHub을 사용하고 계신다면앱이나 웹 등의 서비스를 배포하고 난 뒤에 Release / Tag를 만드시고 계실겁니다.Git Flow',
    title: '5년만 매출 700억, 오늘식탁의 비결',
    state: 'in-progress',
  },
  {
    id: 8,
    code: 'Q8468',
    brand: 'UPPLYST 우플뤼스트',
    createdAt: 1658434997368,
    article:
      '리액트는 파일/디렉터리 구조에 관해 정해진 틀이 없는것으로 유명합니다. 당신은 어떻게 파일/디렉터리 구조를 만들고 있나요?글쎄요. “올바른” 방법은 없지만 저는 리액트를 사용한 7년 이상의 시간 동안 다양한 접근 방식을 시도했고, 만족스러운 솔루션을 찾기 위해 노력했습니다.이 글에서 저는 블로그와 교육 과정 플랫폼을 포함한 제가 하고 있는 모든 프로젝트에서',
    title: '[Storybook] Storybook 200% 활용하기',
    state: 'waiting',
  },
  {
    id: 9,
    code: 'T8635',
    brand: 'KRUX 크룩스',
    createdAt: 1629200196187,
    article:
      '안녕하세요. 빅데이터센터 AI Lab 박호림입니다. 저희 AI Lab에서는 리멤버 유저들에게 WoW한 경험을 주기 위해 Recommendation System, Ranking Model, Document Understanding, NLP, GNN 등 다양한 연구를 진행하고 있습니다. 오늘은 지식그래프 기반의 모델인 KGAT(Knowledge gr',
    title: '조직 개편, 어떻게 해야할까?',
    state: 'done',
  },
  {
    id: 10,
    code: 'X5063',
    brand: 'NÄVLINGE 네블링에',
    createdAt: 1630478673815,
    article:
      'LCP를 최적화 하기전에, 먼저 그 정의를 살펴보자. 최대 콘텐츠풀 페인트(LCP) 메트릭은 페이지가 처음으로 로드를 시작한 시점을 기준으로 뷰포트 내에 있는 가장 큰 이미지 또는 텍스트 블록의 렌더링 시간을 보고합니다. 최대 콘텐츠풀 페인트(LCP)는 페이지의 메인 콘텐츠가 로드되었을 가능성이 있을 때 페이지 로드 타임라인에 해당 시점을 표시하므로',
    title: '테라폼 모듈 구조잡기 - feat with GCP',
    state: 'done',
  },
  {
    id: 11,
    code: 'H1213',
    brand: 'KRUX 크룩스',
    createdAt: 1591875918666,
    article:
      '도커 빌드 속도에 영향을 미치는 레이어(layer)와 캐시(cache)에 대해 알아보겠습니다. 도커 이미지는 빌드시 Dockerfile 의 명령어들을 차례로 실행하면서 레이어를 생성합니다. 이때 특정 명령어들(RUN, ADD, COPY)로 생성된 레이어는 파일 용량을 커지게 만들고, 이미지를 생성하는 시간도 길어지게 하죠. FROM ubuntu RUN',
    title: 'PostCSS, IE 그리고 함수형 프로그래밍',
    state: 'waiting',
  },
  {
    id: 12,
    code: 'J2631',
    brand: 'ÅRSTID 오르스티드',
    createdAt: 1604228879659,
    article:
      '- atom, selector - react 자체 라이브러리recoil 은 기존의 redux, mobx 와 달리 react를 지원하는 전용 상태관리 이기 때문에 react 내부에 대한 접근이 가능하여 React의 동시성 모드, Suspense 등을 손쉽게 지원 가능 하다는 장점이 존재합니다. 또한 러닝커브가 상당히 적고 hook 을 사용하는 방식이 익',
    title: '테라폼 모듈 구조잡기 - feat with GCP',
    state: 'in-progress',
  },
  {
    id: 13,
    code: 'C0452',
    brand: 'YPPERLIG 위펠리그',
    createdAt: 1605641325558,
    article:
      '만 30개의 이커머스을 광고주로 삼고 있는 버즈빌. 이들을 위한 리타겟팅 광고 솔루션을 고도화하기 위해 도입된 상품 추천 알고리즘: Item-CF. 이 알고리즘 최적화와 적용 과정에 대해서 알아보겠습니다. 버즈빌의 라타겟팅 광고 솔루션 버즈빌에서는 매출의 20% 이상을 리타겟팅 광고 상품으로 발생시키고 있습니다. 전통적으로는 리타겟팅 광고는 유저가 이커머스',
    title: '알라미 구독 지표 개선을 이끌어낸, 지표 모니터링 사례',
    state: 'in-progress',
  },
  {
    id: 14,
    code: 'T0131',
    brand: 'EBBARED 에바레드',
    createdAt: 1589069222888,
    article:
      '스와이퍼(swiper) 기능이 필요하면 SwiperJs 라이브러리를 사용하는데, 디자인을 그대로 사용하지 않고 변경 후 사용합니다. 이번 포스트에서는 스와이퍼를 커스터마이징(customizing)하는 방법과 몇 가지 예시를 작성하였습니다. 1. 스와이퍼 커스터마이징 방법Permalink 다음과 같은 방법으로 스와이퍼를 커스터마이징합니다. 사용하려는 스와이퍼',
    title: "신입 PM/PO가 '1인분'을 해내려면",
    state: 'in-progress',
  },
  {
    id: 15,
    code: 'F5547',
    brand: 'LUNNOM 룬놈',
    createdAt: 1617373509976,
    article:
      'OOP의 인터페이스는 정말 구현과 분리되나요? 구현과 추상을 분리하는 것은 좋은 디자인의 궁극적인 목표 중 하나입니다. 일반적으로 개체 지향 프로그래밍(Object-oriented programming)과 캡슐화(encapsulation)를 통해서 그런 분리를 구현할 수 있다고 주장하며 그로 인해 더 안정적인 코드가 가능하다고 이야기합니다. 최종적으로 프로',
    title: '디자인에 생각을 담아야 하는 이유',
    state: 'in-progress',
  },
  {
    id: 16,
    code: 'J4427',
    brand: 'BLÖTSNÖ 블룃스뇌',
    createdAt: 1579309431019,
    article:
      '버즈빌에서는 빠른 광고 서빙을 위해서 Elasticsearch에 광고를 캐싱하고 있습니다. RPS가 높으므로 모든 광고를 inverted index에 올려놓고 광고 요청이 왔을 때 매칭되는 광고를 빠르게 찾아내는 것이죠. 광고 서버에서는 다양한 이유로 각 광고의 랜덤성을 조절해야 할 필요가 있습니다. 예를 들어 광고 A1, A2가 있고, 요청 R1, R2이',
    title: 'MZ세대의 노동시장 진입, 노사관계 변화는?',
    state: 'waiting',
  },
  {
    id: 17,
    code: 'M2867',
    brand: 'VISSVASS 비스바스',
    createdAt: 1595805869099,
    article:
      'MSA에서 Event Driven 이 함께 언급되는 이유는 무엇일까요? MSA 핵심 키워드 중 느슨한 결합과 연관이 있습니다. 각 마이크로서비스는 서로 간 느슨한 결합을 가져감으로써 타 시스템에 대한 의존과 영향도를 줄이고 각 시스템의 목적에 집중함으로써 강한 응집을 갖는 시스템을 만들 수 있습니다. Event Driven 은 이를 돕습니다. 이해를 돕',
    title: '고객과의 소통을 돕는 서베이 툴 4가지',
    state: 'in-progress',
  },
  {
    id: 18,
    code: 'B7039',
    brand: 'SPIKEN 스피켄',
    createdAt: 1628883990987,
    article:
      '나는 데이터 분석가이다.하지만 데이터 분석을 싫어한다.왜냐하면 데이터 분석가는 분석을 하면 안 되기 때문이다데이터 분석가로서 일을 하다 보면 수시로 아래와 같은 질문이 떠오른다서비스를 성공시키기 위해 데이터 분석가는 무엇을 해야 하는?경력 초기에는 내가 무엇에 흥미 있는지에 초점을 두었다. 그렇기에 머신러닝도 업무에 써먹어 보고, 통계도 깊이 파고 들어',
    title: '일 못하는 사람을 제어하라',
    state: 'in-progress',
  },
  {
    id: 19,
    code: 'K0743',
    brand: 'STÖTTA 스퇴타',
    createdAt: 1601528511927,
    article:
      '1998년에 만들어진 curl은 Daniel Stenberg이 만든 URL로 요청을 보내고 받을 수 있는 명령행 도구이다. 물론 너무 유명한 도구이므로 이렇게 따로 설명할 필요도 없다. 보통 HTTP/HTTPS 요청을 테스트해 볼 때 많이 사용하는데 요즘은 Postman이나 Insomnia같은 편리한 도구들도 많지만, 터미널에서 쓰기엔 curl만 한 것도',
    title: '타겟 혹은 브랜딩에 집중한 색다른 웰컴키트',
    state: 'in-progress',
  },
  {
    id: 20,
    code: 'F4523',
    brand: 'BLÖTSNÖ 블룃스뇌',
    createdAt: 1638143837975,
    article:
      '모두싸인은 센드그리드를 통해 이메일을 전송하고 있습니다. 서비스가 성장하면서 이메일 요청이 증가했고, 센드그리드의 API Response Time 이 간헐적으로 오래 걸리는 이슈는 모두싸인 알림 서비스로 전파되는 상황이 되었습니다. 내부 비즈니스 로직이 센드그리드 이메일 전송 API를 호출하고 응답을 기다리게 되어 있었기 때문입니다.전송 지연 중임을 보여주',
    title: 'OpenID(OIDC) 개념과 동작원리',
    state: 'waiting',
  },
  {
    id: 21,
    code: 'J3993',
    brand: 'GODAFTON 고다프톤',
    createdAt: 1582577265396,
    article:
      '일반적으로 프로젝트의 코드 퀄리티를 올리기 위해서는 단위 테스트를 비롯해 여러가지 장치를 도입한다. 이때 가장 가성비가 좋은 작업이 정적 코드 분석을 도입하는 것이다. 정적 코드 분석은 코드내에서 발견할 수 있는 코드 스멜, 잠재적인 결함, 컨벤션 체크, 보안 취약점 등을 코드 레벨에서 분석해서 레포팅 해준다. 이런 정적 코드 분석 도구에는 여러가지가 있지',
    title: 'Readwise: 읽고 메모하고 밑줄 긋기를 한 곳에',
    state: 'waiting',
  },
  {
    id: 22,
    code: 'J8342',
    brand: 'NÄVLINGE 네블링에',
    createdAt: 1657461358043,
    article:
      'PHP 8.1에 열거형이 추가되었습니다. 그동안 클래스와 클래스 상수를 사용해서 열거형처럼 사용했었는데 용도에 맞게 사용할 수 있는 타입이 생겼습니다. Enumerations - php를 중점으로 번역했습니다. 열거형, Enums는 제한된 선택지를 정의할 수 있는 타입입니다. [...] 각 언어마다 다양한 구현이 있지만 PHP에서는 특별한 종류의 개체',
    title: '브라우저의 프리로드 스캐너(pre-load scanner)와 파싱 동작의 이해',
    state: 'done',
  },
  {
    id: 23,
    code: 'J5483',
    brand: 'BÄVE 베베',
    createdAt: 1639474093297,
    article:
      '왜 IP는 네트워크 부분과 호스트 부분의 구분 점을 고정하지 않았을까요? 또 어떻게 하면 이 둘을 구분할 수 있을까요?이번 포스팅에서는 이 질문들에 대한 해답을 찾아보겠습니다.미니 돈가스는 4개만?학교에서 급식을 먹는다고 생각해 봅시다. 만약 한 번 배식할 때마다 정해진 양만큼만 받을 수 있다면 어떨까요? 가령 미니 돈가스는 한 번 받을 때마다 4개씩만 주',
    title: 'UTM 파라미터 (3) GA4에서 유입경로 데이터 확인하기',
    state: 'done',
  },
  {
    id: 24,
    code: 'U6994',
    brand: 'OMLOPP 옴로프',
    createdAt: 1619324823538,
    article:
      '프로파일링 기능을 사용하면 애플리케이션에 대한 부가적인 분석 정보를 얻을 수 있다. 세부 기능으로는 애플리케이션의 실행 방식과 메모리, CPU 리소스가 할당되는 방식에 대한 분석을 제공하는 Async Profiler, 애플리케이션이 실행되는 동안 JVM에서 발생한 이벤트에 대한 정보를 수집하는 모니터링 도구인 Java Flight Recorder 등이 있다',
    title: '개발자의 성장 가능성은 어떻게 측정 가능한가?',
    state: 'waiting',
  },
  {
    id: 25,
    code: 'B3093',
    brand: 'LEDSJÖ 레셰',
    createdAt: 1605456736714,
    article:
      '리눅스 서버를 구축/운영하는 엔지니어 분들의 경우 시스템 로그를 봐야 하는 일이 많습니다. 이런 시스템 로그를 맞춤형으로 설정하여 관리할 수 있다면 업무를 하시는데 훨씬 수월해지겠죠.이처럼 시스템 로그를 효율적으로 관리하기 위해 1편에서는 시스템 로그를 설정하는 방법에 대해, 2편에서는 다양하게 관리할 수 있는 방안에 대해 이야기를 나누어 볼까 합니다.',
    title: '이것 때문에 입사전환율이 높아진다',
    state: 'waiting',
  },
  {
    id: 26,
    code: 'A8024',
    brand: 'BÄVE 베베',
    createdAt: 1634945327590,
    article:
      '프로파일링 기능을 사용하면 애플리케이션에 대한 부가적인 분석 정보를 얻을 수 있다. 세부 기능으로는 애플리케이션의 실행 방식과 메모리, CPU 리소스가 할당되는 방식에 대한 분석을 제공하는 Async Profiler, 애플리케이션이 실행되는 동안 JVM에서 발생한 이벤트에 대한 정보를 수집하는 모니터링 도구인 Java Flight Recorder 등이 있다',
    title: '신입/주니어에게 글쓰기가 주는 5가지 혜택',
    state: 'waiting',
  },
  {
    id: 27,
    code: 'W4611',
    brand: 'RYET 뤼에트',
    createdAt: 1634161862620,
    article:
      "도메인에 대해 검색을 해보면, '해결하고자 하는 영역' 정도의 설명이 나온다. 그런데 프로그래밍을 할 때에는 무언가 주체적으로 비즈니스 로직을 수행하는 객체를 도메인이라고 부르기도 한다. 도메인이라는 용어 자체가 굉장히 추상적이고 넓은 범위로 사용되고 있어 레벨1 첫 미션부터 지금까지 굉장히 혼란을 느꼈다. 내가 가진 이 혼란을 정리하고자 관련된 여러 용어",
    title: '딜라이트룸에서는 재무제표를 프로덕트의 관점으로 바라본다고?',
    state: 'waiting',
  },
  {
    id: 28,
    code: 'K5793',
    brand: 'UTSUND 웃순드',
    createdAt: 1579298044222,
    article:
      'GitHub Skills GitHub을 대화형으로 학습할 수 있는 공식 사이트 GitHub Skills를 공개했습니다. GitHub Actions 기반으로 제작되었으며 기존에 제공하던 Learning Lab은 2022년 9월 1일부터 지원하지 않는다고 합니다. #learn (번역) 주의 깊게 XMLHttpRequest 재시도하기 HTTP 요청에서 일시적',
    title: '한 달만에 브랜드 전시회를 만들라니요',
    state: 'done',
  },
  {
    id: 29,
    code: 'S5406',
    brand: 'NÄVLINGE 네블링에',
    createdAt: 1652607004086,
    article:
      'script 실행으로 데이터 마이그레이션을 계획했고 table 모델의 정형화를 위해 django orm을 활용한 script를 작성했습니다.django orm을 꼭 도입하지 않고 python의 db connect 라이브러리를 사용해도 script 작성은 가능하지만 그다지 추천드리진 않습니다.한 가지 예를 들어보겠습니다.이렇게 하면 간단하고 쉽게 DB에 접근',
    title: '피드백 주는 컴포넌트, Toast/Snackbar(1)',
    state: 'in-progress',
  },
  {
    id: 30,
    code: 'W6853',
    brand: 'LEDARE 레다레',
    createdAt: 1607369730953,
    article:
      'AbortController는 웹 요청을 취소할 수 있게 해주는 기능이다. 보통 웹에서 요청을 일단 보내면 이후에 필요 없어져도 취소할 방법이 없어서 그냥 요청은 그대로 두고 응답받은 내용을 사용 안 하는 식으로만 구현했다. 간단한 HTTP 요청을 응답이 꽤 빠르기 때문에 괜찮을 수도 있지만 무거운 요청의 경우는 불필요한 네트워크 트래픽을 낭비하게 되거나',
    title: 'MOBETTERWORKS BRAND DESIGN',
    state: 'done',
  },
  {
    id: 31,
    code: 'L0651',
    brand: 'LEDARE 레다레',
    createdAt: 1642695703785,
    article:
      '이 글은 ‘당구장 옆에는 PC방이 있다’는 뉴스젤리 PC방 마니아의 한마디에서 출발합니다. 이 한마디에 PC방을 평소 즐겨 찾는 사람들은 폭풍 공감을, PC방을 찾지 않는 사람들은 의아하다는 반응을 보였죠. 그리고 모두가 궁금해졌어요. ‘당구장 옆에는 PC방이 있다’는 이야기가 진짜일지, 데이터로 검증할 수 있을지. 데이터를 통해 인사이트를 도',
    title: '컴포트존 벗어나기',
    state: 'done',
  },
  {
    id: 32,
    code: 'S5629',
    brand: 'LAKENE 라케네',
    createdAt: 1657573886862,
    article:
      'React의 커스텀 훅 함수를 테스트하다가 아래와 같은 상황을 만나게 되었다. 커스텀 훅 C는 Recoil 상태를 업데이트하는 로직을 가지고 있다. Recoil 상태 A는 커스텀 훅 함수 안에서 업데이트되고, 리턴된다. Recoil 상태 B는 커스텀 훅 함수 안에서 업데이트되지만, 리턴은 되지 않는다. 즉 커스텀 훅 C를 통해서는 상태 B에 접근할 수 없',
    title: 'Elmillax',
    state: 'done',
  },
  {
    id: 33,
    code: 'U6022',
    brand: 'LEDARE 레다레',
    createdAt: 1586594796231,
    article:
      '개발을 굉장히 빠르게 진행했어야 했어야 했기에, 개발이 완료되면 main에 바로 병합하고, 알파와 스테이징 서버는 개발자가 필요로 할때 수시배포 하였습니다.하지만 런칭을 하고 상용 서버가 열리면서 본격적으로 git 전략을 세워야할 필요성을 느끼게 되었습니다.체계를 만들어가다. 다니엘 호도비에츠키 1791년 작서비스를 오픈하고 개발자가 늘어나면서 제대로 gi',
    title: 'TriviaWhizz',
    state: 'done',
  },
  {
    id: 34,
    code: 'Z6454',
    brand: 'VISSVASS 비스바스',
    createdAt: 1604231293593,
    article:
      '인공지능과 머신러닝의 최근 적용 사례를 보고 있자면 매우 큰 단절이 관찰되고 있는 것 같습니다. 실리콘 밸리의 빅테크 기업과 같은 한쪽에서는 머신러닝을 적용하는 것이 매우 당연한 것으로 여겨집니다. 사실인즉슨, 우버나 에어비앤비, Zalando, 심지어 틱톡과 같은 회사들은 머신러닝이 없이는 기능할 수조차 없습니다. 다른 한편으로는, 규모가 큰 전통적 대기',
    title: '우당탕탕 주문서 개발기',
    state: 'done',
  },
  {
    id: 35,
    code: 'K4869',
    brand: 'GODAFTON 고다프톤',
    createdAt: 1598138323266,
    article:
      '최대한 단순하고 일관된 형태로 단위 테스트를 작성할 수 있도록 돕는 도구들을, TestUtility라는 모듈에서 관리하고 있습니다. 이 모듈에서 가장 중요한 도구 몇 가지를 소개합니다. BaseTestCase 먼저 모든 테스트케이스들의 기반이 되는 BaseTestCase입니다. 모든 테스트코드들이 given, when, then 의 문법으로 짜일 수 있는',
    title: '데이터 분석의 코어 : 수학 아니고 수학적 생각',
    state: 'in-progress',
  },
  {
    id: 36,
    code: 'L5514',
    brand: 'SOLVINDEN 솔빈덴',
    createdAt: 1634329861589,
    article:
      '보이 스카웃에는 언제나 처음 왔을 때보다 깨끗하게 해놓고 캠프장을 떠날 것이라는 규칙이 있습니다. 엉망으로 어질러져 있는 곳을 발견하면, 일단 청소하세요. 누가 그렇게 했는지는 생각하지 마십시오. 작업을 완료하고 체크아웃 할 때에는 체크인 했을 때보다 모듈을 깨끗하게 할 것. 정도가 되겠군요. 원래 코드를 작성한 사람이 누구이건 간에, 우리 모두가',
    title: '콘텐츠 수익화, 어떻게 해야 할까?',
    state: 'in-progress',
  },
  {
    id: 37,
    code: 'Z8837',
    brand: 'BLÖTSNÖ 블룃스뇌',
    createdAt: 1641577689113,
    article:
      '여러개의 앱과 서브모듈로 라이브러리를 관리하고 계신가요?그렇다면 Gradle Catalog로 새로운 의존성 관리를 시작해 보세요.안녕하세요.헤이딜러 안드로이드팀의 윤영직입니다.최근, 한 개 이상의 앱을 개발하고 유지보수 하는 팀이 늘어나고 있습니다.그리고 개발자들은 항상 같은 고민을 합니다.“코드를 여러 앱에서 재사용 할 수 없을까?”헤이딜러에서도 마찬가지',
    title: 'A/B 트래픽과 결과의 유의미함이 무슨 상관인가요?',
    state: 'waiting',
  },
  {
    id: 38,
    code: 'Y5388',
    brand: 'PELARBOJ 펠라르보이',
    createdAt: 1588546438883,
    article:
      '이력서에 대한 이야기를 해보려고 한다. ‘이력서’라고 검색하면 나오는 수많은 ‘팁’들이 있어서 이력서를 작성하는데 어려움이 없을 것 같다. 여느 글이 그렇듯 굳이 한번 더 정리하는 이유는 이력서에 대한 개인적인 견해를 덧붙이기 위함이다. 최근 출간한 전자책에서는 간단하게만 다뤘는데, 이 글에서는 이력서에만 집중해서 이야기해보려고 한다. 들어가기에 앞서, ‘',
    title: '컴포트존 벗어나기',
    state: 'done',
  },
  {
    id: 39,
    code: 'U4698',
    brand: 'ÅRSTID 오르스티드',
    createdAt: 1603420190956,
    article:
      '골치아픈 이름 짓기 프로그래머들에게 가장 어려운 것 하나만 꼽아보라고 하면 절반이 ‘naming’을 선택한다고 합니니다. 프로그램을 작성하면서 파일명, 클래스명, 변수명, 함수명 등 수도 없이 많은 이름들을 지어내야 합니다. 거의 작명소 수준입니다. 그런 이름 짓기보다 더 어려운 것이 있습니다. 바로 커밋 메시지 작성입니다. 한글로 커밋 메시지를 작성하',
    title: '크레이버',
    state: 'done',
  },
  {
    id: 40,
    code: 'A0518',
    brand: 'SOLSKUR 솔스쿠르',
    createdAt: 1579167524701,
    article:
      'Partition은 RDDs나 Dataset를 구성하고 있는 최소 단위 객체입니다. 각 Partition은 서로 다른 노드에서 분산 처리됩니다. Spark에서는 하나의 최소 연산을 Task라고 표현하는데, 이 하나의 Task에서 하나의 Partition이 처리됩니다. 또한, 하나의 Task는 하나의 Core가 연산 처리합니다.즉, 1 Core = 1 Tas',
    title: '리디가 검색 과정을 명확하게 구분한 이유',
    state: 'in-progress',
  },
  {
    id: 41,
    code: 'O0212',
    brand: 'LEDARE 레다레',
    createdAt: 1621736674647,
    article:
      '웹 프론트엔드 쪽에서는 애플리케이션의 파일 크기가 작을수록 성능 면에서 유리하다는 인식이 있다. 실제로 성능을 측정할 때 애플리케이션 파일의 다운로드 속도가 중요한 지표로 사용되니까 어느 정도는 맞는 말이기도 하다. 그래서 Solid 같은 프레임워크는 파일의 크기가 아주 작다는 것을 강조하기도 한다. 출처: SolidJS 공식 사이트 그러다 해외',
    title: '브랜드의 높이와 깊이',
    state: 'done',
  },
  {
    id: 42,
    code: 'V5751',
    brand: 'MOGNAD 몽나드',
    createdAt: 1583461686115,
    article:
      'PHP 8.1에 열거형이 추가되었습니다. 그동안 클래스와 클래스 상수를 사용해서 열거형처럼 사용했었는데 용도에 맞게 사용할 수 있는 타입이 생겼습니다. Enumerations - php를 중점으로 번역했습니다. 열거형, Enums는 제한된 선택지를 정의할 수 있는 타입입니다. [...] 각 언어마다 다양한 구현이 있지만 PHP에서는 특별한 종류의 개체',
    title: 'BentoML 을 활용하여 딥러닝 모델 API 서빙하기',
    state: 'done',
  },
  {
    id: 43,
    code: 'D0696',
    brand: 'ROLLSBO 롤스보',
    createdAt: 1641663066294,
    article:
      '트랜잭션은 완전히 성공하거나 완전히 실패하는 일련의 논리적 작업단위입니다. 은행 계좌이체를 생각해보시면 됩니다. 여기서 작업단위는 A의 계좌에서 출금하는 금액과 B의 계좌에서 입금하는 금액입니다. 둘중 하나라도 실패하게 된다면 전체 프로세스는 실패합니다. 중간에 오류가 발생하면 트랜잭션의 모든 단계를 이전으로 되돌리는 것을 롤백이라고 부릅니다. Globa',
    title: '퇴사한 소프트웨어 회사 PM의 인수인계 파일',
    state: 'done',
  },
  {
    id: 44,
    code: 'Z9872',
    brand: 'RYET 뤼에트',
    createdAt: 1653172699452,
    article:
      '심사 거절 경험 App Store Connect Rejected은 iOS 개발자 들이 일을 할 때당혹스럽고, 힘들게 하는 부분 중 하나 라고 생각됩니다..리젝의 경험이라면 작은 경험이라도 공유되면 좋을 것 같아 글을 가볍게 적어봅니다. 주된 내용은 “한국어 회신도 필요할 때 좋은 회신 방법이 될 수 있다” 입니다.우선 저는..iOS 개발자로 언제부터 시작했',
    title: '2022년 2분기 스타트업 투자동향',
    state: 'waiting',
  },
  {
    id: 45,
    code: 'I2374',
    brand: 'LUNNOM 룬놈',
    createdAt: 1633048481796,
    article:
      '이번 글에서는 매드업의 DMP 프리즘의 일부인 크라켄을 소개합니다. 크라켄은 매드업에서 구축한 데이터 수집 플랫폼입니다. API 호출 제약이 상대적으로 빡빡한 매체의 데이터 수집을 담당합니다. API 호출 제약으로 인해 어떤 어려움이 있었는지, 그리고 크라켄은 어떻게 이런 어려움을 극복했는지 알아보겠습니다. 비개발자도 편하게 읽으실 수 있도록 기술적인 내용',
    title:
      '음식점 예약 과정, 링크드인 채용 모델 등 여러 다이어그램 샘플을 확인할 수 있는 곳!',
    state: 'waiting',
  },
  {
    id: 46,
    code: 'W1217',
    brand: 'MÖRKRÄDD 뫼르크레드',
    createdAt: 1610862151948,
    article:
      '최근에 회사에서 기존에 AWS에서 서비스하던 서비스를 ALI 클라우드에서 제공해야하는 일이 있었다. 따라서 데이터베이스 스키마와 마스터 데이터를 새로운 클라우드 환경으로 이전을 시켜줘야 했다. 비교적 규모가 큰 서비스는 아니여서, 덤프를 이용해서 간단하게 이전하였고, 데이터베이스 스키마 및 마스터 데이터를 쿼리문 형태로 만들어서 GIT으로 형상관리를 하였다',
    title: '네이버 성과형 DA 신규 기능 파헤쳐 보기',
    state: 'in-progress',
  },
  {
    id: 47,
    code: 'O3958',
    brand: 'GODMORGON 고드모르곤',
    createdAt: 1652423451564,
    article:
      'AbortController는 웹 요청을 취소할 수 있게 해주는 기능이다. 보통 웹에서 요청을 일단 보내면 이후에 필요 없어져도 취소할 방법이 없어서 그냥 요청은 그대로 두고 응답받은 내용을 사용 안 하는 식으로만 구현했다. 간단한 HTTP 요청을 응답이 꽤 빠르기 때문에 괜찮을 수도 있지만 무거운 요청의 경우는 불필요한 네트워크 트래픽을 낭비하게 되거나',
    title: '레이아웃 RFC',
    state: 'in-progress',
  },
  {
    id: 48,
    code: 'O3992',
    brand: 'GODAFTON 고다프톤',
    createdAt: 1585466184667,
    article:
      '카카오 엔터테인먼트에는 신인작가를 발굴하기 위해서 스테이지(카카오페이지 스테이지)라는 서비스를 운영하고 있습니다. 스테이지를 방문해 보면 아시겠지만, 홈에는 약 50개 정도의 이미지가 노출됩니다. 이미지 파일 하나 당 사이즈가 평균 500KB 정도로 홈 내의 이미지들(50개)의 총용량은 대략 25MB 정도입니다. Viewport 내에 있는 이미지만 로딩되도',
    title: '골프인구500만, 골프스타트업 MAU등 데이터 비교분석',
    state: 'done',
  },
  {
    id: 49,
    code: 'E1042',
    brand: 'RYET 뤼에트',
    createdAt: 1614676435852,
    article:
      '공격 사이트 간 스크립팅(또는 크로스 사이트 스크립팅, 영문 명칭 cross-site scripting, 영문 약어 XSS)은 웹 애플리케이션에서 많이 나타나는 취약점의 하나로 웹사이트 관리자가 아닌 이가 웹 페이지에 악성 스크립트를 삽입할 수 있는 취약점이다. 주로 여러 사용자가 보게 되는 전자 게시판에 악성 스크립트가 담긴 글을 올리는 형태로 이루어진다',
    title: '소프트웨어 엔지니어의 이력서',
    state: 'done',
  },
  {
    id: 50,
    code: 'C0850',
    brand: 'GODAFTON 고다프톤',
    createdAt: 1628560137874,
    article:
      '개인정보 보호와 보안, 개발자 생산성에 더해 태블릿 및 대화면 지원을 핵심 테마로 Android 13의 첫 번째 개발자 프리뷰를 출시했습니다. 오늘은 앱에서 시도해 볼 수 있는 새로운 기능과 변경 사항이 반영된 Android 13 Developer Preview 2를 소개해 드리고자 합니다. Android가 개발자와 사용자를 위한 더 나은 플랫폼이 되도록',
    title: '크레이버',
    state: 'in-progress',
  },
  {
    id: 51,
    code: 'S3547',
    brand: 'RAMSTA 람스타',
    createdAt: 1618686226846,
    article:
      '옷장으로 검색하면 결과에 옷을 판매하는 글들이 많이 나와 불편하다는 문의가 들어온 적이 있어요. 당시 검색 결과를 보면 이사 준비를 하거나 옷장을 정리할 때 더 이상 입지 않는 옷을 이웃과 거래하기 위해 작성한 글이 많았어요.당시에는 검색어가 판매글에 포함되는 빈도를 랭킹에 반영 했기 때문에 옷장정리가 포함된 의류와 실제 옷장을 판매하는 글을 구분하기 어려',
    title: '구글 검색을 흔드는 아마존, 레딧, 틱톡',
    state: 'in-progress',
  },
  {
    id: 52,
    code: 'H1795',
    brand: 'RYET 뤼에트',
    createdAt: 1580470820664,
    article:
      '코드 리뷰란 한 개발자가 코드를 작성하면 다른 개발자가 정해진 방법으로 피드백을 주고받는 과정을 말합니다. 이 과정을 통해 본인이 발견하지 못한 실수를 다른 사람이 발견하여 코드의 부작용(Side effect)과 오류를 조기에 대응할 수 있으며, 개발 내 정해진 컨벤션 규칙을 유지하고 기술 부채를 줄일 수 있습니다. 또한 여러 명의 개발자가 참여함으로써 문',
    title: 'Next/Image를 활용한 이미지 최적화',
    state: 'waiting',
  },
  {
    id: 53,
    code: 'J6348',
    brand: 'STRÖMLINJE 스트룀리니에',
    createdAt: 1605668333824,
    article:
      'HTTP/3는 HTTP(Hypertext Transfer Protocol)의 세 번째 메이저 버전으로, 기존의 HTTP/1, HTTP/2와는 다르게 UDP 기반의 프로토콜인 QUIC을 사용하여 통신하는 프로토콜이다. HTTP/3와 기존 HTTP 들과 가장 큰 차이점이라면 TCP가 아닌 UDP 기반의 통신을 한다는 것이다. 필자는 최근에 다른 분들이 공유해',
    title: 'UTM 파라미터 (2) 쓴다고 다가 아니다',
    state: 'waiting',
  },
  {
    id: 54,
    code: 'C0440',
    brand: 'ÖSTANÅ 외스타노',
    createdAt: 1615750841398,
    article:
      '함수는 값을 반환한다. 리액트 앨리먼트를 반환하는 함수를 리액트에서는 함수 컴포넌트(Function Component)라고 부른다. 클래스에 비해 함수가 간편한 것 처럼 함수 컴포넌트는 비교적 단순하다. 그만큼 제약도 있다. 함수 컴포넌트는 컴포넌트 생애 주기라는 것이 없다. 물론 클래스 컴포넌트가 제공하는 메소드도 없다. 컴포넌트가 생성되고 마운트 되고',
    title: '좋은 콘텐츠 글쓰기에 AIDA를 활용하는 방법',
    state: 'waiting',
  },
  {
    id: 55,
    code: 'N4858',
    brand: 'GODAFTON 고다프톤',
    createdAt: 1584367593813,
    article:
      'berry 에서 새롭게 추가된, 패키지를 수정해서 사용할 수 있도록 하는 patch: 프로토콜과 yarn patch, yarn patch-commit 커맨드에 대해 간단히 소개해보려 합니다.1. yarn patch &lt;패키지명&gt;2. 1에서 출력 된 path 안의 패키지를 편집3. yarn patch-commit -s &lt;1에서 출력 된 path',
    title: '내 디자인을 돋보이게 만드는 목업 사이트들',
    state: 'waiting',
  },
  {
    id: 56,
    code: 'B0597',
    brand: 'MOGNAD 몽나드',
    createdAt: 1599607456554,
    article:
      '함수형 프로그래밍의 가치가 널리 알려지면서, Python, Java, JavaScript 같은 명령형(imperative) 프로그래밍 언어에서도 함수형 프로그래밍을 하는 개발자가 많아진 것 같습니다. 대중적인 명령형 프로그래밍 언어에서도 함수형 프로그래밍 스타일로 개발할 수 있습니다만, 훨씬 더 우아하게 함수형 프로그래밍을 하려면, 아예 함수형 프로그래밍',
    title: '눈으로 기억되는 리디',
    state: 'done',
  },
  {
    id: 57,
    code: 'D5228',
    brand: 'LEDARE 레다레',
    createdAt: 1635963387624,
    article:
      'Github에는 Code Owner라는 기능이 있는데, Repository 내에 특정 파일이나 특정 디렉토리, 원하면 특정 확장자 별로도 Owner를 지정하여 파일 및 코드를 관리할 수 있는 방식이다. 이를 활용하면 코드리뷰를 위해 PR 생성 시, 작업한 파일에 관련된 Owner들을 자동으로 PR(Pull Request) Reviewer로 지정할 수 있다.',
    title: 'Comport zone과 리더',
    state: 'waiting',
  },
  {
    id: 58,
    code: 'I4985',
    brand: 'LEDBERG 레드베리',
    createdAt: 1583229278798,
    article:
      '기존에 텍스트 복사를 구현하려면 document.execCommand(copy) 을 이용했다. 아래 글 참고 [자바스크립트] 텍스트 클립보드 복사(copy)/붙여넣기 기능 구현 방법 그러나 execCommand 메서드는 Deprecated 되었으며, 대안으로 훨씬 쉽고 강력한 Clipboard API 가 나왔다.  window.navigator.c',
    title: '생산성 극대화를 위해 완료주의자 되기',
    state: 'waiting',
  },
  {
    id: 59,
    code: 'K2460',
    brand: 'TRETTIOTRE 트레티오트레',
    createdAt: 1587340815868,
    article:
      '안녕하세요. 모두싸인 제품 그룹에서 백엔드 개발을 맡고 있는 러츠라고 합니다. 이번 블로그 포스팅에서는 TypeORM에서 지원하는 마이그레이션 기능을 도입한 이유와 후기, 사용할 때의 주의점에 대해 이야기해보고자 합니다.다양한 이유가 있겠지만 모두싸인이 TypeORM을 통해 궁극적으로 얻고자 하는 핵심 목표는 다음과 같았습니다.수동으로 마이그레이션, 롤백',
    title: '원활한 고객 경험을 완성시키는 방법',
    state: 'done',
  },
  {
    id: 60,
    code: 'L1996',
    brand: 'GODAFTON 고다프톤',
    createdAt: 1648062189498,
    article:
      '데이터 품질 불량, 데이터 사용 곤란, 데이터 완전성 부족, 데이터 구경 불일치, 업무 사용자가 거의 사용할 수 없습니다...업무 측면에서 관리되지 않은 데이터는 거의 가치가 없습니다.점점 더 많은 기업과 조직이 디지털화에 나서자 데이터 관리는 기업에 더욱 중요해졌습니다. 대부분의 사업의 성공은 데이터의 신뢰성, 보안성 등에 달려 있기 때문입니다.오늘 소개',
    title: '언제 끝날지 모르는 코로나...구성원 관리는 원온원으로!',
    state: 'done',
  },
  {
    id: 61,
    code: 'B8299',
    brand: 'NORRFLY 노르플뤼',
    createdAt: 1645227048756,
    article:
      'GitOps는 DevOps의 실천 방법 중 하나로 애플리케이션의 배포와 운영에 관련된 모든 요소들을 Git에서 관리(Operation) 한다는 뜻입니다. 아주 간단하게 말해서 GitOps는 Kubernetes Manifest파일을 Git에서 관리하고, 배포할때에도 Git에 저장된 Manifest로 클러스터에 배포하는 일련의 과정들을 의미합니다. Gi',
    title: '사용성 테스트 과제 시나리오 요소: 배경과 내용',
    state: 'in-progress',
  },
  {
    id: 62,
    code: 'I7426',
    brand: 'ÖSTANÅ 외스타노',
    createdAt: 1647696431537,
    article:
      '많은 개발자들이 개발자의 성장에 대한 지원을 해주고 관심을 가지는 회사를 선호한다. 컨퍼런스 가고 싶다고 하면 돈도 내주고 책도 사주고 스터디를 하고 싶다고 하면 사무실도 빌려주거나하는 그런 회사 말이다. 간혹 조직 문화 차원에서 업무 시간에 공식적으로 공부할 수 있는 시간을 내어주는 회사도 있다. 이런 회사들의 특징은 조직원이 성장하는 것이 결과적으로는',
    title: '아마존이 배달까지 품었을 때 일어날 일',
    state: 'waiting',
  },
  {
    id: 63,
    code: 'U2982',
    brand: 'IRSTA 이르스타',
    createdAt: 1653552921686,
    article:
      "주요 구독 상품과 추가 구독 상품으로 구매 상품의 위계가 나뉜다. 명시적으로 유저가 구독을 취소하지 않는 이상 구독은 영원히 계속된다. 이 두 가지 제약 사항은 유저의 변화하는 요구에 대응하지 못하게 하는 주요 원인이 되고 있었다. 유형의 상품을 구독하는 서비스의 경우 이제 대부분의 유저들이 '영원한 구독'이라는 규칙 자체를 부담스러워하는 경우가 많아졌다",
    title: 'React Query 를 통하여 서버 데이터 관리하기',
    state: 'done',
  },
  {
    id: 64,
    code: 'M3227',
    brand: 'NÄVLINGE 네블링에',
    createdAt: 1597764302564,
    article:
      '도커 컨테이너를 만들 때, 대부분 더 가벼운 이미지들을 선호합니다. 같은 레이어를 공유하고 더 작은 이미지일수록 더 전환하거나 배포할 수 있기 때문입니다. 어떻게 하면 RUN 구문 마다 새로운 레이어가 생기고 이미지가 준비되기 전에 중간 결과물이 필요한 상황에서 이미지 사이즈를 유지할 수 있을까요?여러분이 아시다시피 대부분의 Dockerfile 파일에는 아',
    title: '오늘 몇 개의 광고가 기억나나요?',
    state: 'waiting',
  },
  {
    id: 65,
    code: 'Q4884',
    brand: 'TRÅDFRI 트로드프리',
    createdAt: 1623700658942,
    article:
      'notification-preferences이라는, 아직 production에서는 사용하지 않는 microservice가 2vCPU를 할당 (resources.cpu=2) 받고 있어, 1vCPU로 줄였습니다. 작업을 끝나고 몇 분 뒤, memory 사용량이 90%를 넘는다는 alarm이 발생했습니다. Memory 할당량이나 JVM의 GC 관련 argumen',
    title: '이직하고 가장 먼저 파악해야 하는 것은?',
    state: 'in-progress',
  },
  {
    id: 66,
    code: 'B2358',
    brand: 'LEDARE 레다레',
    createdAt: 1599973715584,
    article:
      'script 실행으로 데이터 마이그레이션을 계획했고 table 모델의 정형화를 위해 django orm을 활용한 script를 작성했습니다.django orm을 꼭 도입하지 않고 python의 db connect 라이브러리를 사용해도 script 작성은 가능하지만 그다지 추천드리진 않습니다.한 가지 예를 들어보겠습니다.이렇게 하면 간단하고 쉽게 DB에 접근',
    title: 'D.D,D (Deserve Dessert Darling)',
    state: 'in-progress',
  },
  {
    id: 67,
    code: 'T5205',
    brand: 'SNÖYRA 스뇌위라',
    createdAt: 1601068642367,
    article:
      'MySQL DB를 RDS로 이관하는 작업을 진행하였습니다. 무엇 때문에 이관을 결정하게 되었는지와 어떻게 이관을 진행하였는지에 대해 글을 써보도록 하겠습니다.stibee.com은 작년 11월에 정식 오픈한 새내기 이메일 마케팅 서비스 입니다. 사실 오픈 초기부터 얼마전까지만 해도 AWS EC2의 m4.large 인스턴스 하나로 운영되던 서비스였습니다.(사실',
    title: '소프트웨어 엔지니어의 이력서',
    state: 'in-progress',
  },
  {
    id: 68,
    code: 'N7258',
    brand: 'STÖTTA 스퇴타',
    createdAt: 1630082488993,
    article:
      '크롬 102 버전에서 처음으로 등장한 새로운 개발자 도구 탭입니다. 아직 실험단계이지만 체험해 볼 수 있습니다. 이름에서 알 수 있듯이 성능을 측정하는 탭 같지만, 성능 탭과 라이트하우스, web vitals같은 도구들이 이미 있는데 왜 굳이 새로운 탭을 만들었을까요?문서에서 소개하는 이유는 3가지입니다.(아마 기존 성능 탭을 의미하는 것 같지만) 정보가',
    title: '실전 UI/UX -   피플카 고객경험 개선하기',
    state: 'done',
  },
  {
    id: 69,
    code: 'P6114',
    brand: 'LAKENE 라케네',
    createdAt: 1634069666742,
    article:
      'AWS DMS는 아마존이 제공하는 서버리스 데이터 마이그레이션 서비스 상품이다. 이번 글에서는 운영 환경의 OLTP 데이터베이스에 대한 통계 지표 산출을 위해 ETL을 목적으로, 원본 데이터베이스의 데이터를 S3 버킷에 Parquet 형태로 복제하는 방법을 정리하였다. 복제 인스턴스 생성 가장 먼저 복제 인스턴스를 아래와 같이 생성한다. AWS DMS 콘솔',
    title: '클릭률을 높일 수 있는 광고 소재 만들기',
    state: 'done',
  },
  {
    id: 70,
    code: 'E1727',
    brand: 'GODMORGON 고드모르곤',
    createdAt: 1627625850288,
    article:
      'Threading in Python: The Complete Guide Python에서 Thread를 관리하고 활용하는 방법을 잘 모아둔 기사입니다. Building a Panel Dashboard with Snowpark for Python Snowpark로 Dashboard를 구성하는 간단한 방법을 소개하는 튜토리얼 형식의 기사입니다. 간단하',
    title: '[7월] 전월대비 투자금·투자건수 주춤',
    state: 'in-progress',
  },
  {
    id: 71,
    code: 'E1085',
    brand: 'UTSUND 웃순드',
    createdAt: 1639893805740,
    article:
      '어플리케이션에서 우리는 종종 서로에게 속한 컴포넌트를 가지게 된다. 이 컴포넌트들은 공통의 상태를 통해 서로에게 의존되어 있고, 로직을 함께 공유한다. 여러분은 종종 select, dropdown 컴포넌트 또는 메뉴 아이템들에서 이러한 형태를 볼 수 있다. Compound component pattern은 task를 수행하기 위해 다 같이 함께 작동하는 컴',
    title: 'I/O에서 발표된 폼 팩터에 대해 꼭 알아야 할 3가지 사항을 살펴보세요',
    state: 'done',
  },
  {
    id: 72,
    code: 'A3885',
    brand: 'LEDARE 레다레',
    createdAt: 1588233338292,
    article:
      '1996-11-11 - Rafael Sagula에 의해 개발된 httpget httpget 0.1 버전은 C 언어로 작성된 300줄 미만의 프로그램이었음 Daniel Stenberg가 발견하고 기여하기 시작 비슷한 시기(1996-11)에 wget의 최초 릴리즈(1.4.0)도 있었음 2022-02-0',
    title: '우당탕탕 주문서 개발기',
    state: 'waiting',
  },
  {
    id: 73,
    code: 'Y6906',
    brand: 'GODMORGON 고드모르곤',
    createdAt: 1603343402105,
    article:
      'How to run uWSGI Python으로 만든 서비스를 배포하실 때 한번쯤은 보시게 될 uWSGI의 세부적인 사항을 소개하는 기사 입니다. uWSGI에 대해서 궁금하셨다면 이 기사를 참고하시고, WSGI가 궁금하시다면 약간 힘들긴 하지만 PEP 3333을 꼭 읽어보세요. Processing large JSON files in Python with',
    title: '시장 점유율 3% 기업의 생존기',
    state: 'waiting',
  },
  {
    id: 74,
    code: 'V2837',
    brand: 'LUNNOM 룬놈',
    createdAt: 1595587062340,
    article:
      '일반적으로 프로젝트의 코드 퀄리티를 올리기 위해서는 단위 테스트를 비롯해 여러가지 장치를 도입한다. 이때 가장 가성비가 좋은 작업이 정적 코드 분석을 도입하는 것이다. 정적 코드 분석은 코드내에서 발견할 수 있는 코드 스멜, 잠재적인 결함, 컨벤션 체크, 보안 취약점 등을 코드 레벨에서 분석해서 레포팅 해준다. 이런 정적 코드 분석 도구에는 여러가지가 있지',
    title: '내 맘대로 위클리 뉴스 - 2022년 26주(2022.06.26 - 2022.07.02)',
    state: 'in-progress',
  },
  {
    id: 75,
    code: 'I7451',
    brand: 'SOLVINDEN 솔빈덴',
    createdAt: 1617231113039,
    article:
      '뱅크샐러드 CTO 김문규님을 소개합니다! 지난 10월, 뱅크샐러드는 실리콘밸리의 구글 본사에서 근무하시던 김문규님을 CTO로 모셨습니다! 구글, 아마존 등 미국의 빅테크 기업에서 오랜기간 엔지니어로 근무하신 문규님은, 구글 안드로이드 운영체제(OS)의 테스팅 자동화 인프라·개발 생산성 도구 설계, 오픈소스 자동화 테스팅 솔루션 개발 등을 주도하셨는데요.',
    title: '내 맘대로 위클리 뉴스 - 2022년 27주(2022.07.03 - 2022.07.09)',
    state: 'done',
  },
  {
    id: 76,
    code: 'D6685',
    brand: 'SOLVINDEN 솔빈덴',
    createdAt: 1611921739103,
    article:
      '소스 버전 관리 도구는 시스템 형상 요소(소스 및 데이터)를 문서화하고 변경을 소스 버전관리 절차에 따라 관리하고, 효율적으로 처리 하기 위한 통제 환경을 의미 합니다. 소스 버전 관리 도구의 특징 및 기능Permalink 형상 요소(소스 및 데이터)에 대한 변경 사항을 관리 버전 관리를 수행하고, 배포 도구를 통해 변경 사항을 배포 일정 주기에 백업 도구',
    title: '기획자가 피그마 쓰는 법: 3부',
    state: 'waiting',
  },
  {
    id: 77,
    code: 'H0395',
    brand: 'SÖDERSVIK 쇠데르스비크',
    createdAt: 1595214780350,
    article:
      'grid는 우리가 여러 요소들을 일정한 열과 행으로 배치할 때 사용할 수 있다. 아래 예시는 item을 grid를 사용해 3열로 배치한 모습이다. 만약 2번째 아이템의 높이를 별도로 지정해주면, 첫 번째 행들이 같은 높이로 지정된다. 그런데 아래와 같은 구조에서 하나의 item의 높이가 높으면 row 영역은 어떻게 될까? 일반적',
    title: '시대를 초월한 BX 디자인 바이블',
    state: 'in-progress',
  },
  {
    id: 78,
    code: 'J0751',
    brand: 'TRETTIOTRE 트레티오트레',
    createdAt: 1586686733922,
    article:
      'notification-preferences이라는, 아직 production에서는 사용하지 않는 microservice가 2vCPU를 할당 (resources.cpu=2) 받고 있어, 1vCPU로 줄였습니다. 작업을 끝나고 몇 분 뒤, memory 사용량이 90%를 넘는다는 alarm이 발생했습니다. Memory 할당량이나 JVM의 GC 관련 argumen',
    title: 'UNFUR Project',
    state: 'waiting',
  },
  {
    id: 79,
    code: 'Q8404',
    brand: 'GODMORGON 고드모르곤',
    createdAt: 1632842378000,
    article:
      'AWS DMS는 아마존이 제공하는 서버리스 데이터 마이그레이션 서비스 상품이다. 이번 글에서는 운영 환경의 OLTP 데이터베이스에 대한 통계 지표 산출을 위해 ETL을 목적으로, 원본 데이터베이스의 데이터를 S3 버킷에 Parquet 형태로 복제하는 방법을 정리하였다. 복제 인스턴스 생성 가장 먼저 복제 인스턴스를 아래와 같이 생성한다. AWS DMS 콘솔',
    title: "'데드풀' 라이언 레이놀즈가 마케팅 천재가 된 비결",
    state: 'in-progress',
  },
  {
    id: 80,
    code: 'V4769',
    brand: 'TRÅDFRI 트로드프리',
    createdAt: 1597676520623,
    article:
      '개인정보 보호와 보안, 개발자 생산성에 더해 태블릿 및 대화면 지원을 핵심 테마로 Android 13의 첫 번째 개발자 프리뷰를 출시했습니다. 오늘은 앱에서 시도해 볼 수 있는 새로운 기능과 변경 사항이 반영된 Android 13 Developer Preview 2를 소개해 드리고자 합니다. Android가 개발자와 사용자를 위한 더 나은 플랫폼이 되도록',
    title: 'UX 디자인은 형식적으로 하면 절대 안 된다',
    state: 'in-progress',
  },
  {
    id: 81,
    code: 'H6462',
    brand: 'VISSVASS 비스바스',
    createdAt: 1613672911317,
    article:
      '같은 뜻을 가진 글자가 언어별로 다른 길이를 가지면서 발생했던 문제를 맞닥뜨린적이 있는데 어떤 일이 있었는지 소개하도록 하겠습니다. Toast 대응 아래는 아자르에서 상대방과 매치중 상대방으로 부터 친구 추가를 받은 화면입니다. 이 화면에서 어떠한 문제점이 있는지 보이시나요? 맞습니다. 한국어에서는 문제가 없습니다 ! 😂 그렇다면 포루투갈어에서는',
    title: '개발자와 소통 잘하는 HR담당자 되는 법',
    state: 'waiting',
  },
  {
    id: 82,
    code: 'Y0360',
    brand: 'ANSLUTA 안슬루타',
    createdAt: 1658359086901,
    article:
      'connection-manager는 클라이언트와 웹소켓으로 연결되는 커넥션을 관리하고, 메시지 소싱과 라우팅, 서버 푸시를 담당합니다. 특이한 점은, connection-manager를 스케일 아웃하면 클라이언트가 어느 connection-manager로 연결됐는지 알 수 없기 때문에 외부 시스템에서 소싱된 메시지의 타깃을 connection-manager',
    title: '천사 같던 반려견이 지옥문을 연다면?',
    state: 'in-progress',
  },
  {
    id: 83,
    code: 'F6299',
    brand: 'KRUX 크룩스',
    createdAt: 1637062464012,
    article:
      '편집기에서 하이퍼링크를 넣었는데, 테스트 발송을 하거나 실제 발송을 하면 링크의 밑줄이 사라지는 현상이었습니다. 원인을 찾는 과정은 혼란스럽고 어려웠지만 결국 문제는 하이퍼링크를 만드는 &lt;a&gt;태그의 속성 중 이동할 주소를 가리키는 href 속성 때문이었습니다. href 속성을 입력하지 않거나 특정 클라이언트(Gmail😂) 링크를 필터링하는 과정에',
    title: '하인즈 케첩은 어떻게 마케팅 맛집으로 소문이 났을까?',
    state: 'in-progress',
  },
  {
    id: 84,
    code: 'T6119',
    brand: 'TRETTIOTRE 트레티오트레',
    createdAt: 1650779639506,
    article:
      'Apache Kafka(이하 카프카)는 대용량, 대규모 메세지 데이터를 빠르게 처리하도록 개발된 분산 스트리밍 플랫폼입니다.카프카가 개발되기 이전에는 데이터 소스부터 데이터 타겟까지 복잡한 구조를 가지고 있었습니다. 새로운 시스템을 더할 때마다 복잡도가 기하급수적으로 올라갔습니다.카프카가 개발되어 적용 후에는 시스템간 의존성을 간접적으로 만들 수 있게 되었',
    title: '‘놀면서 일한다’ 일본도 워케이션 열풍!',
    state: 'done',
  },
  {
    id: 85,
    code: 'A0360',
    brand: 'STORHAGA 스토르하가',
    createdAt: 1586127380030,
    article:
      'CORS와 SOP는 모두 출처(Origin)와 관련된 개념이다. 따라서 이 두가지에 대하여 이야기를 하기 전에 Origin이 무엇인지 알고 넘어가야한다. 출처는 URL의 스킴(프로토콜), 호스트(도메인), 포트 이 3가지로 정의된다. 즉, 어떤 URL이 같은 출처인지를 판단하려면 URL의 프로토콜, 도메인, 포트가 모두 같은지 확인하면 된다. 동일 출처 예',
    title: '성공적인 비즈니스를 위한 완벽 인스타그램 마케팅 가이드',
    state: 'done',
  },
  {
    id: 86,
    code: 'S9116',
    brand: 'OMLOPP 옴로프',
    createdAt: 1632092926434,
    article:
      '데이터베이스 스키마는 데이터베이스에서 자료의 구조, 자료의 표현 방법, 자료 간의 관계를 형식 언어로 정의한 구조이다. 데이터베이스 스키마에는 다음과 같은 내용들에 대해 정의되어 있습니다. 데이터베이스를 구성하는 테이블 정보(이름, 필드, 데이터 타입 등)와 테이블 간 관계(relationship) 같은 정보 데이터 조작 시 데이터 값들이 갖는 논리적인 제',
    title: 'OnePlus Community',
    state: 'done',
  },
  {
    id: 87,
    code: 'E3448',
    brand: 'SOLARVET 솔라르베트',
    createdAt: 1650563649898,
    article:
      '모든 거래를 누구나 투명하게 볼 수 있고 검증할 수 있는 것이 바로 블록체인의 특징입니다. 하지만 LINE Blockchain을 개발하고 운영하면서 블록체인의 복원력이나 탈중앙성과 같은 블록체인의 특성은 유지하면서 개인 정보는 보호되길 원한다는 요구 사항을 여러 서비스에서 전달받았는데요. 이와 같이 아래와 같이 크게 두 가지로 정리해 볼 수 있습니다.',
    title: '[미국 UX취업하기] 유학+취업 vs 바로 취업',
    state: 'done',
  },
  {
    id: 88,
    code: 'H5777',
    brand: 'RYET 뤼에트',
    createdAt: 1626263171647,
    article:
      '쿠버네티스 배포는 다음 두 가지 단계로 이루어져 있습니다. 도커 이미지 빌드한다. 쿠버네티스 메니페스트(manifest) 생성 후 반영한다. 커밋 SHA는 유니크(unique) 하지만 길고 읽기 어려우며 빌드 환경을 표현하지 못한다는 단점이 있습니다. 버즈빌의 경우 UI 상에서 SHA 값을 지정할 수 있고 빌드 환경에 영향을 받지 않기 때문에 SHA 값',
    title: 'PlanB 브랜드 리뉴얼 프로젝트',
    state: 'in-progress',
  },
  {
    id: 89,
    code: 'W5345',
    brand: 'HÅRTE 호르테',
    createdAt: 1586831858641,
    article:
      '리눅스 서버를 구축/운영하는 엔지니어 분들의 경우 시스템 로그를 봐야 하는 일이 많습니다. 이런 시스템 로그를 맞춤형으로 설정하여 관리할 수 있다면 업무를 하시는데 훨씬 수월해지겠죠.이처럼 시스템 로그를 효율적으로 관리하기 위해 1편에서는 시스템 로그를 설정하는 방법에 대해, 2편에서는 다양하게 관리할 수 있는 방안에 대해 이야기를 나누어 볼까 합니다.',
    title: 'Factory Method Pattern',
    state: 'done',
  },
  {
    id: 90,
    code: 'R2809',
    brand: 'URSHULT 우르스훌트',
    createdAt: 1597616187297,
    article:
      '객체 사이에 일 대 다의 의존 관계를 정의해 두어, 어떤 객체의 상태가 변할 때 그 객체에 의존성을 가진 다른 객체들이 그 변화를 통지받고 자동으로 갱신될 수 있게 만듭니다. GoF 디자인 패턴 책을 보면 어렵게 설명되어 있지만, 많은 개발자 분들께 친숙한 발행(publish)과 구독(subscribe) 모델을 생각하면 이해가 쉽습니다. 옵저버(observ',
    title: '[미국 UX취업하기] 유학+취업 vs 바로 취업',
    state: 'in-progress',
  },
  {
    id: 91,
    code: 'R4755',
    brand: 'STÖTTA 스퇴타',
    createdAt: 1641894303971,
    article:
      '우리는 max-width, width를 사용해 요소의 너비 범위를 지정할 수 있다. 아래 예시는 target의 기본 너비를 parent의 50%이나, max-width를 사용해 최대 너비를 200px로 지정했다. .target { width: 50%; max-width: 200px; } (2) min() ❓ 그런데, 조금 더 간단하게 그리',
    title: 'Pyla - Brand identity',
    state: 'in-progress',
  },
  {
    id: 92,
    code: 'G2250',
    brand: 'LEDARE 레다레',
    createdAt: 1609097196646,
    article:
      'Python Processing large JSON files in Python without running out of memory 대용량 JSON 파일을 처리에 관한 짧은 기사 입니다. 데이터 분석에서 대량의 JSON을 만날 때가 거의 없긴 하지만, 그래도 알아두시면 나중에 도움이 될지도 모를 일이죠 :D Pass-by-value, reference,',
    title: '[리딩 노트 4] 인지 착각(Cognitive Illusion)',
    state: 'in-progress',
  },
  {
    id: 93,
    code: 'N8465',
    brand: 'OMLOPP 옴로프',
    createdAt: 1632189643529,
    article:
      'WebStorm을 사용하는 프런트엔드 개발자를 위한 플러그인 추천JetBrains의 WebStorm을 사용해 React 기반 애플리케이션을 개발하는 프런트엔드 개발자를 위한 Plugin을 추천합니다. 이 외에도 추천할만한 플러그인이 있다면 댓글을 달아주세요. 지속해서 업데이트하겠습니다.zen코딩을 가능하게 해주는 플러그인으로 VSCode의 ES7 React',
    title:
      '실리콘밸리 인턴에서 대표까지 14년 동안 깨달은 ‘인생에서 가장 중요한 것’',
    state: 'done',
  },
  {
    id: 94,
    code: 'D9556',
    brand: 'BÄVE 베베',
    createdAt: 1618958432670,
    article:
      'GC는 애플리케이션의 동적 메모리 할당 요청을 자동으로 관리한다. GC는 다음 작업을 통해 자동으로 동적 메모리를 관리한다. 운영 체제로부터 메모리를 받아 할당에 사용한다. 애플리케이션이 메모리를 요청하면 전달해 준다. 애플리케이션이 메모리의 어떤 부분을 사용 중인지 확인한다. 사용되지 않은 메모리를 회수하여 애플리케이션이 메모리를 재사',
    title: '디마 기초지식 : 매체와 광고주, 어트리뷰션 툴',
    state: 'in-progress',
  },
  {
    id: 95,
    code: 'B0284',
    brand: 'SPIKEN 스피켄',
    createdAt: 1618181380125,
    article:
      '백엔드 서비스에서 여러 AWS S3 객체를 하나의 ZIP 객체로 만드는 데 사용했던 방법에 관해서 설명해보고자 합니다.모두싸인 서비스에서는 여러 종류의 파일을 다룰 수 있습니다. 계약 문서, 감사 추적 인증서, 첨부 파일 등의 파일을 다루게 되는데 이러한 파일들은 작성이 완료된 계약 문서를 기준으로 내려받을 수 있습니다. 그러나 이전에 모두싸인에서는 문서',
    title: '감성적인 이공계 소년, 구글 디자인 리드가 되기까지. 2편',
    state: 'in-progress',
  },
  {
    id: 96,
    code: 'V0452',
    brand: 'STORHAGA 스토르하가',
    createdAt: 1634856727380,
    article:
      '신입으로 입사했던 첫 해, 협업을 해보니 코드를 쓰는 시간만큼이나 읽는 시간도 엄청 많다는 걸 알게 되었다. 동료(또는 나)의 코드가 잘 읽히면 내 작업 속도가 빨라졌고 흐름을 이해하기 어려운 코드에 부딪히면 느려졌다. 그래서 그때부터 독자의 입장도 고려해야겠다는 생각을 하게 됐다. 소프트웨어의 사용자와 독자 양 쪽 모두에 감정 이입하는게 프로그래머의 일인',
    title: 'Urban Jungle',
    state: 'in-progress',
  },
  {
    id: 97,
    code: 'E4734',
    brand: 'BÄGAREN 베가렌',
    createdAt: 1638825597826,
    article:
      'API 29 이상의 기기에서 별도의 쓰기 권한이 없어도 다운로드 디렉토리에 파일을 다운로드받을 수 있다는 것을 알고 계셨나요?모르고 계셨다면 이 글을 통해 API 28 이하와 API 29 이상의 기기별로 어떻게 처리해야하는지 알아보고 앱에 적용해보세요.안녕하세요.헤이딜러 안드로이드팀의 김태현입니다.Android 10에 Scoped Storage가 나온 이후',
    title: '데이터베이스 스키마를 관리하는 도구, Flyway',
    state: 'in-progress',
  },
  {
    id: 98,
    code: 'Q6463',
    brand: 'BÄGAREN 베가렌',
    createdAt: 1621988665490,
    article:
      '데이터 사이언티스트가 자신이 개발한 모델을 배포 및 서빙하는 과정을 효율적으로 처리할 수 있게끔 해주는 것이죠. 과거에는 데이터 사이언티스트가 개발한 모델을 DevOps, 백엔드, 서버 엔지니어링 파트로 전달하여 서빙하는 경우가 많았으나, 최근 들어서는 데이터 사이언티스트 스스로가 이러한 역량을 갖추어야 할 필요성이 증가하고 있는 것 같습니다. DevOp',
    title: '우리가 헤어질 때, 고민해야 할 것들.',
    state: 'waiting',
  },
  {
    id: 99,
    code: 'K0012',
    brand: 'RYET 뤼에트',
    createdAt: 1642921628284,
    article:
      '먼저 우리 집에서 구글까지의 경로를 알기 위해서 인터넷하면 빠질 수 없는 IP에 대해서 간단하게 알아보자. IP 주소라는 단어는 컴퓨터 관련 전공을 하신 분이 아니더라도 굉장히 익숙한 단어이다. 일반적인 환경에서 우리가 인터넷에 접속할 때 이 IP 주소가 우리 집 주소의 역할을 한다고 생각하면 된다. 마찬가지로 우리 집에서 구글까지 가는 길목에 있는 지점들',
    title: '옴니채널 마케팅의 오프라인 매장 리부팅',
    state: 'waiting',
  },
  {
    id: 100,
    code: 'X6159',
    brand: 'LEDARE 레다레',
    createdAt: 1613964892413,
    article:
      '웹폰트를 경량화할 때 보통 원하는 문자 글리프만 남기고 나머지 데이터는 삭제하는 방법을 이용한다. 이걸 서브셋폰트, 폰트 서브셋팅이라고 부른다. 필요한 글자만 남기고 나머지는 다 삭제하기 때문에 만약 페이지에서 이 삭제된 글자를 출력하려 하면 제대로 출력할 수 없다. 보통 인터넷 상에서 변환된 웹폰트 파일을 다운로드 하여 바로 사용하는 경우 가끔 특수문자',
    title: 'TriviaWhizz',
    state: 'waiting',
  },
  {
    id: 101,
    code: 'G6058',
    brand: 'IRSTA 이르스타',
    createdAt: 1634830614861,
    article:
      '모두싸인은 센드그리드를 통해 이메일을 전송하고 있습니다. 서비스가 성장하면서 이메일 요청이 증가했고, 센드그리드의 API Response Time 이 간헐적으로 오래 걸리는 이슈는 모두싸인 알림 서비스로 전파되는 상황이 되었습니다. 내부 비즈니스 로직이 센드그리드 이메일 전송 API를 호출하고 응답을 기다리게 되어 있었기 때문입니다.전송 지연 중임을 보여주',
    title: 'npm, yarn, pnpm 비교해보기',
    state: 'waiting',
  },
  {
    id: 102,
    code: 'F6013',
    brand: 'TRÅDFRI 트로드프리',
    createdAt: 1584766687806,
    article:
      "Callables: Python's functions are sometimes classes Python에서 함수와 클래스에 대한 조금 깊은 논의와 설명을 하는 기사 입니다. All you need to know about Asterisks in Python 외부에 공개되는 매개변수로 선호하지 않지만, 내부함수 작성시 밥먹듯이 사용하는 *arg",
    title: '웹로그 JavaScript SDK 개발 맛보기',
    state: 'waiting',
  },
  {
    id: 103,
    code: 'R1025',
    brand: 'RYET 뤼에트',
    createdAt: 1625710560830,
    article:
      'Vue.js 기반의 환경은 SEO(Search Engine Optimization)가 취약하여 이를 보완하기 위해 NuxtJS 프레임워크를 이용했습니다. NuxtJS에서 학습하면서 알게 된 Data Fetching의 asyncData와 fetch의 차이를 이야기하고자 합니다. Vue.js에서 Data Fetching 하는 법 기존 Vue.js에서는 Life',
    title: '카카오 어드민 UI 컴포넌트를 모노레포로 개발하여 얻은 것들',
    state: 'waiting',
  },
  {
    id: 104,
    code: 'G9837',
    brand: 'OMLOPP 옴로프',
    createdAt: 1582271339704,
    article:
      '함수 이름에 표현된 것보다 더 많은 일을 하거나 지나치게 세부적인 구현부가 드러나기도 한다. 이런 경우 보통 if문, for문이 많고 코드가 장황하다. 가령 fetchRecentArticles 라는 함수를 마주쳤다고 상상해보자. 이 함수가 수행하는 작업은 아래와 같다고 예상할 수 있다. (1) 저장된 아티클을 적당히 불러온다. (2) 최근 X일 내에 생성된',
    title: '데이터 분석을 극대화하는 고객 인터뷰 만들기',
    state: 'in-progress',
  },
  {
    id: 105,
    code: 'S8135',
    brand: 'NÄVLINGE 네블링에',
    createdAt: 1599380726215,
    article:
      '크게 시대를 4개로 나눌 수 있다고 생각합니다.이전의 시대최초의 프레임워크컴포넌트 중심 뷰 계층풀스택 프레임워크(← 지금은 여기입니다.)각 시대에는 고유한 중심 갈등이 있었습니다. 각 시대에서 우리는 커뮤니티로 중요한 교훈을 배웠고 천천히, 그러나 확실하게 발전했습니다.오늘날에도 논쟁은 뜨겁습니다. 웹이 너무 비대해진것 아닌가? 일반적인 웹사이트를 정말 리',
    title: 'Java GC 튜닝',
    state: 'waiting',
  },
  {
    id: 106,
    code: 'L8019',
    brand: 'GODMORGON 고드모르곤',
    createdAt: 1595460365184,
    article:
      '오늘은 머신러닝 시계열에서 가장 많이 쓰이는 AR, MA, ARMA, ARIMA에 대해 정리해보는 시간을 가지려고 합니다. 해당 포스트는 고려대학교 김성범 교수님의 강의를 바탕으로 제작되었습니다. 정상 프로세스와 비정상 프로세스 Autoregressive (AR) Models Moving Average (MA) Models Autoregressive a',
    title: 'PlanB 브랜드 리뉴얼 프로젝트',
    state: 'done',
  },
  {
    id: 107,
    code: 'N5484',
    brand: 'LEDARE 레다레',
    createdAt: 1586257922471,
    article:
      'Kotlin JDSL(JPA Domain Specific Language)을 만든 배경과, Criteria API와 비교해서 어떤 점에서 더 편리한지 설명드리겠습니다. Criteria API를 사용하면서 불편했던 점 Criteria 쿼리는 Java 오브젝트를 이용해 동적으로 타입 세이프(type-safe)하게 작성할 수 있는 쿼리입니다.',
    title: '우리가 헤어질 때, 고민해야 할 것들.',
    state: 'waiting',
  },
  {
    id: 108,
    code: 'R5087',
    brand: 'GODMORGON 고드모르곤',
    createdAt: 1650768649001,
    article:
      '컴포넌트 계층 구조에서 부모-자식 간에는 프롭스(props)를 전달하면서 협력한다. 컴포넌트끼리 접촉해 있어야만 이 메세지를 전달할 수 있는 구조이다. 그렇지 않고 떨어져 있으면 메세지를 전달할 수 없는 것이 리액트 트리의 한계이다. 컴포넌트 A와 B는 접해 있어서 프롭스를 직접 전달할 수 있다. B, C도 마찬가지다. 반면 A와 C는 떨어져 있기 때문에',
    title: 'Next/Image를 활용한 이미지 최적화',
    state: 'waiting',
  },
  {
    id: 109,
    code: 'J8292',
    brand: 'LEDBERG 레드베리',
    createdAt: 1649504259618,
    article:
      '오늘은, 하스켈로 본격 함수형 프로그래밍을 하고 있는 기념으로, 명령형 프로그래밍과 함수형 프로그래밍에 대해 간단히 비교하고, 명령형 프로그래밍 환경에서도 함수형 프로그래밍의 좋은 기능들을 차용하면 좋겠다는 주장을 펼쳐보겠습니다.최근 몇 년 간, 클로저, 스칼라를 거쳐, 하스켈로 프러덕션 코드를 작성하고 있습니다.개인적으로는 함수형 프로그래밍이 실용적이라는',
    title: 'UX 디자인은 형식적으로 하면 절대 안 된다',
    state: 'in-progress',
  },
  {
    id: 110,
    code: 'E7627',
    brand: 'STÖTTA 스퇴타',
    createdAt: 1585954756639,
    article:
      '이번 글은 LTV 지표에 대한 내용입니다. 이 포스트 [link]를 주로 참조하였습니다.원 글은 이 곳에서 확인하실 수 있습니다.LTV (LifeTime Value)란?LTV는 Lifetime Value, “고객의 생애 가치”라고 불리는 지표로, 고객이 평생동안 기업에게 어느 정도의 가치를 가져다 주는지를 정량화한 지표입니다. 이 LTV는 확률 기반 모형으',
    title: '신입/주니어에게 글쓰기가 주는 5가지 혜택',
    state: 'waiting',
  },
  {
    id: 111,
    code: 'V3107',
    brand: 'YPPERLIG 위펠리그',
    createdAt: 1616674692192,
    article:
      'CausalImpact는 시계열 데이터에서 의도적인 개입으로 인한 인과 효과를 추정하기 위한 방법론입니다. 인과 효과를 확인하려면 A/B 테스트처럼 실험을 하는 것이 제일 좋습니다. 하지만 마케팅, 광고, 웹 서비스 등을 운영하다보면 실험을 수행하는 것이 어려운 경우가 많습니다. 특히 다음과 같은 상황에서는 이상적인 randomised design이 어려',
    title: '디스코드는 어떻게 커뮤니티 툴의 강자가 됐나?',
    state: 'in-progress',
  },
  {
    id: 112,
    code: 'T2461',
    brand: 'EBBARED 에바레드',
    createdAt: 1613980070227,
    article:
      '브라우저의 내장 API는 웹 개발 요구사항에 따라 한계를 가진다. 커스텀 오류 메세지를 보여준다거나 폼을 제출하기 던에 입력값을 검증하는 등의 행위는 내장 API 만으로 는 구현이 까다롭다. 이러한 요구사항은 아래 세 개로 정리할 수 있다. 값을 필드에 바인딩할 수 있다. 폼 제출을 처리할 수 있다. 제출 전에 필드 값을 검증할 수 있다. 오류 메시지도',
    title: '시장조사 이전에 고객 조사가 필요한 이유',
    state: 'waiting',
  },
  {
    id: 113,
    code: 'H9933',
    brand: 'OMLOPP 옴로프',
    createdAt: 1634599085394,
    article:
      'display를 flex로 설정하여 flexible 속성을 부여합니다. 또한 flex-direction을 column으로 설정하여 행이 아닌 열을 기준으로 자식 요소들이 나열되게 합니다. width, height 즉 너비와 높이 또한 16px로 기존에 tistory #1 스킨에서 설정해준 초기 설정값을 지향합니다. margin은 auto로 하여 여백을 페이',
    title: '고객과의 소통을 돕는 서베이 툴 4가지',
    state: 'waiting',
  },
  {
    id: 114,
    code: 'H8973',
    brand: 'LEDARE 레다레',
    createdAt: 1601398771156,
    article:
      'JavaScript은 두 가지 방법으로 객체를 생성할 수 있습니다. 두 가지 방법을 살펴보고 어떤 차이점이 있는지 살펴보겠습니다. 아래 코드는 크롬 브라우저 개발자 모드(F12), 콘솔 탭에서 실행할 수 있습니다. 1.1. 리터럴 객체(Literal Object)Permalink 직관적이고 쉬운 방법으로 객체를 생성합니다. {} 안에 객체가 가진 속성(pr',
    title: "Nginx와 Let's Encrypt로 HTTPS 웹 서비스 배포하기 (feat. Certbot)",
    state: 'waiting',
  },
  {
    id: 115,
    code: 'O9850',
    brand: 'SNÖYRA 스뇌위라',
    createdAt: 1622480640549,
    article:
      'Go 서비스에서 HTTP 요청에 대한 Trace를 남겨 DynamoDB 요청의 응답 시간에 큰 영향을 미치는 Credential Token 발급 로직을 찾아내고 최적화한 내용을 담았습니다. Amazon DynamoDB는 낮은 응답 시간과 strong consistency를 지원하는 NoSQL 데이터베이스입니다. 사용자에겐 노출되지 않지만 읽기, 쓰기 요청이',
    title: '[차원축소] 변수 추출법 - Multi-Dimensional Scaling (MDS)',
    state: 'in-progress',
  },
  {
    id: 116,
    code: 'Q3458',
    brand: 'GODAFTON 고다프톤',
    createdAt: 1640449056125,
    article:
      '개발을 굉장히 빠르게 진행했어야 했어야 했기에, 개발이 완료되면 main에 바로 병합하고, 알파와 스테이징 서버는 개발자가 필요로 할때 수시배포 하였습니다.하지만 런칭을 하고 상용 서버가 열리면서 본격적으로 git 전략을 세워야할 필요성을 느끼게 되었습니다.체계를 만들어가다. 다니엘 호도비에츠키 1791년 작서비스를 오픈하고 개발자가 늘어나면서 제대로 gi',
    title: '핏펫 개발팀의 소통을 위한 협업툴의 사용법',
    state: 'waiting',
  },
  {
    id: 117,
    code: 'O6944',
    brand: 'VAXMYRA 박스뮈라',
    createdAt: 1651987359377,
    article:
      'GitHub Actions에서 한 저장소에서 다른 저장소의 워크플로우를 실행하고 싶었다. 예를 들면 A 저장소에서 새 버전을 릴리스하면 B 저장소에서 릴리스 된 새 버전을 가지고 업데이트하는 걸 자동화해야 하는 경우였다. 기본적으로 GitHub Actions는 자신의 저장소의 워크플로우를 실행할 수 있으므로 다른 저장소의 워크플로우를 트리거 하려면 r',
    title: '사용자 습관 형성을 위한 6가지 방법',
    state: 'done',
  },
  {
    id: 118,
    code: 'Q8597',
    brand: 'KORNSNÖ 코른스뇌',
    createdAt: 1647101164763,
    article:
      '메타마스크 공식 블로그의 메인 이미지금융 거래(원화 보내기, 받기 등)를 하려면 은행에 방문해 계좌를 개설해야 한다. 이와 마찬가지로 암호 화폐 전송, NFT 구매 등 암호 화폐 관련 거래를 하려면 크립토 월렛(crypto wallet)을 설치하고 계좌 역할을 하는 지갑을 만들어야 한다.이번 글에선 메타마스크(MetaMask)라는 크립토 월렛을 설치하고 나',
    title: '스타트업 리더에 필요한 정신건강 코칭',
    state: 'done',
  },
  {
    id: 119,
    code: 'P5782',
    brand: 'DUGGREGN 두그렝',
    createdAt: 1597974731850,
    article:
      'MySQL 서버의 실행계획 수립(Index Dive) 단계에서 많은 CPU와 Disk storage 자원이 소모되는 경우, 어떻게 튜닝할 수 있을까?MySQL 서버는 여러 통계 정보를 이용해 가장 빠른 쿼리 실행 방식을 결정하는데, 이를 우리는 흔히 최적화라고 해요. Oracle이나 PostgreSQL 서버는 쿼리의 실행 계획을 캐시해서 재활용하는 반면,',
    title: '실리콘밸리 거물의 깨달음, “성공은 찐-우정에서 나오더라”',
    state: 'waiting',
  },
  {
    id: 120,
    code: 'N6883',
    brand: 'GODMORGON 고드모르곤',
    createdAt: 1589120563036,
    article:
      '컨테이너를 속속들이 공부하게 된 계기는 3년 전 카카오 검색 서비스의 컨테이너화 작업이었습니다. 카카오 내 다양한 서비스들의 검색 니즈가 늘어나다 보니 모든 요청을 다 수용하기에는 인력 상황이 여의찮았어요. 향후 새로운 서비스의 증가와 검색 요구가 늘어날 것을 예상했을 때, 검색을 잘 모르더라도 서비스 형태로 곧바로 생성하여 적용할 수 있도록 하고 싶었죠.',
    title: '사용자 조사 체험단 운영하기 노하우',
    state: 'waiting',
  },
  {
    id: 121,
    code: 'P4631',
    brand: 'BÄGAREN 베가렌',
    createdAt: 1589634255784,
    article:
      '모든 거래를 누구나 투명하게 볼 수 있고 검증할 수 있는 것이 바로 블록체인의 특징입니다. 하지만 LINE Blockchain을 개발하고 운영하면서 블록체인의 복원력이나 탈중앙성과 같은 블록체인의 특성은 유지하면서 개인 정보는 보호되길 원한다는 요구 사항을 여러 서비스에서 전달받았는데요. 이와 같이 아래와 같이 크게 두 가지로 정리해 볼 수 있습니다.',
    title: '디마 기초지식 : 매체와 광고주, 어트리뷰션 툴',
    state: 'waiting',
  },
  {
    id: 122,
    code: 'S0405',
    brand: 'OMLOPP 옴로프',
    createdAt: 1602722900199,
    article:
      '어느 플랫폼에서나 여러분의 앱을 휴대폰 외에도 TV, 자동차, 태블릿, 시계 등 다양한 기기를 이용하는 전세계 수십억명의 사람들에게 즉각적으로 선보일 수 있는 것은 아닙니다. 올해 Google I/O에서는 Android가 바로 그 플랫폼인 몇 가지 이유와, Modern Android Development 기법을 활용해 생활 속의 다양한 크기의 화면에서 일관',
    title: '[2022년 7월] 나스미디어 NPR Target Infographics',
    state: 'in-progress',
  },
  {
    id: 123,
    code: 'O1390',
    brand: 'RYET 뤼에트',
    createdAt: 1635095678838,
    article:
      '요즘 라이브 서비스의 레거시 코드 리팩터링을 하고 있다. 흔히 가변 상태를 관리하는 Context 클래스가 레거시 코드에 있는 건 새삼스럽지 않았지만, 과도하게 사용하고 있어서 정리가 필요했다. 가변 상태 Context 사용 시 문제점 가변 상태를 가지는 Context 클래스가 2, 3개도 도 아니고 10개쯤 되면 과하다고 생각한다. 이렇게 많은 Conte',
    title: '이커머스는 정말 유통의 왕이 되었나요?',
    state: 'in-progress',
  },
  {
    id: 124,
    code: 'C9977',
    brand: 'SOLVINDEN 솔빈덴',
    createdAt: 1585222713849,
    article:
      'OscillatorNode 란? Oscillator의 사전적 의미는 전기적으로 진동을 만들어내 음을 출력하는 장치이다 Web Audio API 에서의 OscillatorNode는 컴퓨터를 이용해 특정 주파수, 파형의 음원을 만들어내는 소스 Node이다. 즉, 별도의 음원을 입력받지 않고 스스로 음원을 만들어내는 소스Node 객체다. 이에 반해,',
    title: 'OpenID(OIDC) 개념과 동작원리',
    state: 'done',
  },
  {
    id: 125,
    code: 'C3916',
    brand: 'RYET 뤼에트',
    createdAt: 1620339999374,
    article:
      'Ace the System Design Interview — Uber/Lyft 차량 공유 앱인 Uber와 Lyft 같은 앱의 아키텍처 기초를 설명한 글입니다.(영문) #architecture 페이스북 개발자의 성과 만들기 메타(페이스북)에서 근무하는 지인과 대화 후 메타에서는 어떻게 업무가 시작, 실행, 관리되고 성과로 이어지는지 그리고 성과를 어떻게 평',
    title: '안드로이드 TV 플레이어, 책임과 협력으로',
    state: 'waiting',
  },
  {
    id: 126,
    code: 'T3741',
    brand: 'NÄVLINGE 네블링에',
    createdAt: 1622050104190,
    article:
      'Roman Pronskiy가 쓰고 JetBrains에서 제공하는 PHP Annotated 2022년 봄 버전의 번역/해석본입니다. 이 중에서 몇 가지 제 취향껏 골라 그 안의 내용도 좀 뒤져보고 개발새발 번역해서 소개합니다. PHP 7.4.29, PHP 8.1.5, and PHP 8.0.18https://www.php.net/ChangeLog-7.php#',
    title: '알라미 구독 지표 개선을 이끌어낸, 지표 모니터링 사례',
    state: 'in-progress',
  },
  {
    id: 127,
    code: 'Y1090',
    brand: 'GODMORGON 고드모르곤',
    createdAt: 1648455399718,
    article:
      'Python Type Hints - How to Split Types by Python Version Python 버전에 따른 Hints를 사용하고 싶으시다면 이 기사를 참고하세요. Use Python to Send Notifications to Your Phone During Model Training 학습 모델의 진행상황을 모니터링 하고 싶으시',
    title: '[2022년 7월] 나스미디어 20대 NPR Target Report',
    state: 'waiting',
  },
  {
    id: 128,
    code: 'B9236',
    brand: 'TRÅDFRI 트로드프리',
    createdAt: 1595064112395,
    article:
      '최근 대규모 리액트 앱 코드베이스에서 작업하는 동안 우리는 세 가지 종류의 버그 때문에 큰 고통을 겪었습니다. 버그는 컴파일 시간이나 런타임 오류가 아닌 예상치 못한 코드의 동작들 때문이었습니다.컴포넌트가 사용자 이벤트에 따라 업데이트되지 않습니다.컴포넌트가 사용자 이벤트에 따라 부분적으로 업데이트됩니다.컴포넌트가 예기치 않게 렌더링됩니다.처음에 우리들은',
    title: "'전자상거래의 여왕'은 핀터레스트를 어떻게 바꿀까",
    state: 'in-progress',
  },
  {
    id: 129,
    code: 'A9318',
    brand: 'VAXMYRA 박스뮈라',
    createdAt: 1640149296192,
    article:
      'React, Vue관련 익스텐션, 모든 분야와 상관없이 추천하는 익스텐션을 소목차로 나눠 정리해두었습니다.적절한 익스텐션을 사용하면 개발 생산성이 올라가니 설명을 보시고, 익스텐션을 잘 조합하여 생산성을 올려봅시다.이 외에도 추천할만한 익스텐션이 있다면 댓글을 달아주세요.ES7 React/Redux/GraphQL/React-Native snippets자주',
    title: '#3 토스의 PO Session 아하 모멘트 구하기!',
    state: 'in-progress',
  },
  {
    id: 130,
    code: 'H0817',
    brand: 'SNÖYRA 스뇌위라',
    createdAt: 1650021746149,
    article:
      '이 글은 “내가 만약 지금 프론트엔드를 가르친다면 어떻게 가르칠까?” 에 가깝다. 그러니 어느정도 가치 판단은 스스로 내리기를 바란다. 이 글에서는 총 6개의 스프린트 (12주)를 거치는 동안의 학습법을 다룬다. 물론 시간은 더 넉넉하게 사용해도 괜찮다. 여기서는 하루 4시간을 이론 학습에 투자하고, 2시간을 휴식, 다시 4시간을 실습 학습에 투자하는 걸',
    title: 'BACK TO BASICS',
    state: 'in-progress',
  },
  {
    id: 131,
    code: 'C9782',
    brand: 'MOGNAD 몽나드',
    createdAt: 1597312930238,
    article:
      '다음 글은 코어자바스크립트 교재를 참고해서 자바스크립트에 대해 그동안 헷갈리던 부분과 핵심부분을 요약정리한 부분입니다. 1. 데이터 타입 변수 : 변경 가능한 데이터가 담길 수 있는 공간 식별자 : 그 변수의 이름을 말한다. 참조 카운트 : 자신의 주소를 참조하는 변수의 개수 가비지 컬렉터(GC) : 런타임 환경에 따라 특정 시점이나 메모리 사용량이 포화',
    title: '앱노트',
    state: 'done',
  },
  {
    id: 132,
    code: 'E6901',
    brand: 'OMLOPP 옴로프',
    createdAt: 1625609430715,
    article:
      'M100 멀티 스크린 윈도우 배치 WebTransport serverCertificateHashes 옵션 검색 주소창 사전 렌더링 M101 (dev) Web USB 동일객체 동작 window.open에서 true를 참 같은(truthy) 값으로 수정 Dev Trial 배열 그룹핑 1. M100 멀티 스크린 윈도우 배치 이슈 새로운 스',
    title: 'Horror Special with Maplestory',
    state: 'waiting',
  },
  {
    id: 133,
    code: 'Y9115',
    brand: 'BÄVE 베베',
    createdAt: 1583081966327,
    article:
      '카카오 엔터테인먼트에는 신인작가를 발굴하기 위해서 스테이지(카카오페이지 스테이지)라는 서비스를 운영하고 있습니다. 스테이지를 방문해 보면 아시겠지만, 홈에는 약 50개 정도의 이미지가 노출됩니다. 이미지 파일 하나 당 사이즈가 평균 500KB 정도로 홈 내의 이미지들(50개)의 총용량은 대략 25MB 정도입니다. Viewport 내에 있는 이미지만 로딩되도',
    title: '새 정부 노동정책과 HR의 변화 방향',
    state: 'in-progress',
  },
  {
    id: 134,
    code: 'E9703',
    brand: 'BÄGAREN 베가렌',
    createdAt: 1653810282776,
    article:
      'Docker는 컨테이너에 기반해 애플리케이션을 구축하는 소프트웨어 플랫폼이다. 가상 머신처럼 독립된 실행환경을 만들어주는 것으로, 운영체제를 설치하 것과 유사한 효과를 낼 수 있지만, 실제 운영체제를 설치하지 않기 때문에 설치 용량이 적고 실행 속도 또한 빠르다. 예전에는 윈도에 VM Ware와 같은 가상 머신을 설치하였으나 최근에는 리눅스 계열에서 Doc',
    title: '안드로이드 TV 플레이어, 책임과 협력으로',
    state: 'done',
  },
  {
    id: 135,
    code: 'B7886',
    brand: 'STORHAGA 스토르하가',
    createdAt: 1580164185680,
    article:
      'PHP 8.1에 열거형이 추가되었습니다. 그동안 클래스와 클래스 상수를 사용해서 열거형처럼 사용했었는데 용도에 맞게 사용할 수 있는 타입이 생겼습니다. Enumerations - php를 중점으로 번역했습니다. 열거형, Enums는 제한된 선택지를 정의할 수 있는 타입입니다. [...] 각 언어마다 다양한 구현이 있지만 PHP에서는 특별한 종류의 개체',
    title: "'Yes or Yes?' 질문법이 탁월한 이유",
    state: 'done',
  },
  {
    id: 136,
    code: 'Q9585',
    brand: 'LAKENE 라케네',
    createdAt: 1596183368235,
    article:
      '기업의 기술 블로그는 해당 기업의 실적과 성과, 체계와 문화, 전략과 가치가 반영된 결과다. 언뜻 보면 기업 홈페이지나 SNS처럼 홍보나 PR 수단으로 인식될 때도 있지만 기술 블로그는 엄연히 기업의 조직문화와 개발 문화를 반영한다. 단적으로 비교할 수 있는 예가 네이버와 우아한형제들의 기술 블로그다.네이버는 2011년 자사 개발자들의 지식과 실전 노하우를',
    title: "ESG 잘 하는 기업은 '이런' 콘텐츠를 만든다",
    state: 'done',
  },
  {
    id: 137,
    code: 'E1833',
    brand: 'NORRFLY 노르플뤼',
    createdAt: 1603202132184,
    article:
      '함수형 프로그래밍에서 코드를 작성한다는 것은 프로그램에서 수행해야하는 여러가지 행위들을 함수로 표현하고, 또 그 함수들을 요리조리 잘 합성해가며 거대한 프로그램을 만들어나가는 패러다임이다. 결국 함수형 프로그래밍에서 함수를 합성하는 행위라는 것은 이 패러다임의 근간이 되는 개념이기 때문에 굉장히 큰 의미를 가질 수 밖에 없는데, 문제는 이렇게 함수를 합성하',
    title: 'Documentarist',
    state: 'done',
  },
  {
    id: 138,
    code: 'R4837',
    brand: 'MOGNAD 몽나드',
    createdAt: 1658247463400,
    article:
      '브릿지는 자바스크립트 엔진이 직접 네이티브 메서드를 호출할 수 있는 자바스크립트 인터페이스(JSI) 모듈로 대체될 것입니다. 이 모듈은 C++로 작성된 가벼운 범용(general-purpose) 레이어입니다.현재 아키텍처에서는 자바스크립트 코어 엔진을 사용하여 특정 엔진과만 호환됩니다. 하지만 JSI는 엔진에서 분리되어 Chakra, v8, Hermes등과',
    title: '제품의 성장단계를 진단하는 초간단 가이드, 그로스사이클',
    state: 'waiting',
  },
  {
    id: 139,
    code: 'Q9538',
    brand: 'NÄVLINGE 네블링에',
    createdAt: 1652452650940,
    article:
      'AWS EC2에 Ansible을 이용하여 Apache Airflow 구성에 필요한 모듈 서비스는 프로세스와 데몬으로 동작할 수 있도록 코드로 관리하고, Bash Operator를 통해 Amazon Simple Storage Service (이하 Amazon S3)에서 Directed Acyclic Graphs (이하 DAG’s) 코드의 싱크를 맞출 수 있도',
    title: 'npm, yarn, pnpm 비교해보기',
    state: 'waiting',
  },
  {
    id: 140,
    code: 'H9743',
    brand: 'GODMORGON 고드모르곤',
    createdAt: 1633019960840,
    article:
      'Python Type Hints - How to Split Types by Python Version Python 버전에 따른 Hints를 사용하고 싶으시다면 이 기사를 참고하세요. Use Python to Send Notifications to Your Phone During Model Training 학습 모델의 진행상황을 모니터링 하고 싶으시',
    title: '이더리움 테스트넷 사용법 기초',
    state: 'in-progress',
  },
  {
    id: 141,
    code: 'Y2623',
    brand: 'URSHULT 우르스훌트',
    createdAt: 1637783220610,
    article:
      '추론적인 프리렌더링(Speculative prerendering)과 크롬 체험판(Chrome origin trial)에 참여하는 방법에 대해 알아보자. preconnect, preload, prefetch, prerender와 같은 리소스 힌트는 브라우저가 사용자에게 곧 어떤 리소스가 필요한지 알아내는 데 도움을 준다. preconnect와 preload',
    title: 'UX 디자인은 형식적으로 하면 절대 안 된다',
    state: 'waiting',
  },
  {
    id: 142,
    code: 'M0895',
    brand: 'NÄVLINGE 네블링에',
    createdAt: 1579461652431,
    article:
      'TFX는 프로덕션 머신러닝 파이프라인을 위한 end-to-end 플랫폼이에요. 2019년에 완전히 오픈소스화 되었고, 컴포넌트 단위로 ML 워크플로우를 개발한 후 여러 환경(Apache Beam, Dataflow, Kubeflow, Airflow)등에서 실행가능해요. 물론 데이터 수집/변환, 학습, 배포 등을 위해 잘 작성된 컴포넌트도 같이 제공되어요.TF',
    title: '안 된다고 말하는 사람의 이유',
    state: 'done',
  },
  {
    id: 143,
    code: 'J6376',
    brand: 'STRÖMLINJE 스트룀리니에',
    createdAt: 1606361305873,
    article:
      '자바스크립트는 <audio>, <video>태그나 Audio, Video객체를 통해 재생 중인 오디오/비디오를 녹음/녹화하는 방법을 제공한다. audio나 video의 차이는 audio객체를 사용하느냐, video객체를 사용하느냐의 차이밖에 없다. 출처: https://curryyou.tistory.com/448 [카레유] # audio/vide',
    title: 'Product for Net Zero',
    state: 'in-progress',
  },
  {
    id: 144,
    code: 'G9860',
    brand: 'SÖDERSVIK 쇠데르스비크',
    createdAt: 1624990577756,
    article:
      '안녕하세요, 화해 데브옵스팀 장영석입니다. EventBridge를 활용한 자동화   AWS가 제공하는 서비스들은 대부분 모니터링 및 로깅을 제공합니다. 하지만 AWS 리소스에서 CloudWatch로 로그를 수집할 경우, 보관 주기를 CloudWatch의 AWS 콘솔이나 CLI를 사용하여 별도로 설정해줘야 하는 번거로움이 있습니다. 예를 들어 API Gate',
    title: '레이아웃 RFC',
    state: 'waiting',
  },
  {
    id: 145,
    code: 'H0303',
    brand: 'UPPLYST 우플뤼스트',
    createdAt: 1580392355170,
    article:
      '이런 마법같은 프로미스는 어떻게 작동하는 걸까요? 우리는 그저 new Promise(...) 로 편리하게 인스턴스를 만들어 사용할 뿐, 추상화의 커튼 뒤에 어떤 일이 벌어지고 있는지 알기 어렵고, 알 생각도 못 하는 경우가 많습니다. (애초에 그러라고 추상화를 해놓았겠지만요) 하지만 프로미스의 내부 동작을 연구하고 간단히 구현해보는 것도 가치 있다고 생각합',
    title: '리액트 코드에서 버그를 줄이는 방법',
    state: 'done',
  },
  {
    id: 146,
    code: 'Y3894',
    brand: 'STÖTTA 스퇴타',
    createdAt: 1596268496584,
    article:
      '웹 서버에서 HTTP 요청에 응답할 때, 처리 결과를 간결하게 알려주기 위해서 HTTP 응답 상태코드가 사용되죠. 가장 대표적인 응답 코드로 200 OK, 404 Not Found, 500 Internal Server Error 등이 있습니다. 그런데, HTTP 상태 코드의 목록을 자세히 들여다 보면 이런 생소한 응답 코드도 존재한답니다. https://',
    title: '복잡하고 어려운 Redux 적응기',
    state: 'waiting',
  },
  {
    id: 147,
    code: 'Q6632',
    brand: 'KRUX 크룩스',
    createdAt: 1644286709394,
    article:
      '최근에 AWS의 서울/도쿄 리전에서 CloudFront 장애가 발생했다. EC2, RDS, ElasticCache에 비해 CloudFront는 모니터링을 잘 안하게 되는데, 장애가 발생하면 서비스 전체에 직격타가 된다. 대부분의 정적 파일 (이미지 등)이 CloudFront를 통한 CDN으로 전달이 되기 때문이다. 그래서 CloudFront가 평소보다 응',
    title: '2022년 2분기 스타트업 투자동향',
    state: 'waiting',
  },
  {
    id: 148,
    code: 'Q1512',
    brand: 'NÄVLINGE 네블링에',
    createdAt: 1597138839578,
    article:
      'HTTP 413 상태 코드(Payload Too Large)는 요청 엔티티가 서버에 의해 정의된 제한보다 크다는 것을 나타낸다. CORS 에러가 뜨는 것은 응답 헤더에 Access-Control-Allow-Origin 부분이 없기 때문에 요청을 보내는 클라이언트에게 이를 볼 수 있는 권한이 없다는 것이다. ??? 난 분명 스프링 시큐리티에서 CORS 설정을',
    title: '타게팅의 시대에서 논타게팅의 시대에 적응하는 방법',
    state: 'waiting',
  },
  {
    id: 149,
    code: 'W6507',
    brand: 'LIVSÅR 리브소르',
    createdAt: 1653508457390,
    article:
      'ELK는 3가지의 오픈 소스 프로젝트들의 첫 글자를 따온 것으로 그 각각은 Elasticsearch, Logstash, Kibana 를 말합니다. 여기서 Elasticsearch는 검색과 분석을 위해서 사용되는 엔진이며, Logstash는 다양한 소스로부터 데이터를 받아서 처리할 수 있는 데이터 처리 파이프라인으로 Elasticsearch에 데이터를 공급하',
    title: '왓챠가 검색 화면을 개선한 이유',
    state: 'done',
  },
  {
    id: 150,
    code: 'A3450',
    brand: 'STRÅLA 스트롤라',
    createdAt: 1588042851305,
    article:
      'JSDOM은 Node.js 환경에서 돌아가기 때문에 속도도 빠르고 대부분의 경우에 꽤 괜찮은 솔루션이지만, 브라우저 표준이 잘 구현되고 테스트되는 것을 해당 라이브러리에 의존해야 하는 점과 브라우저간 동작이 다른 점 등을 포착할 수 없는 단점들을 안고 있습니다. 그리고 또 하나 중요한 점은 … 동작하는 테스트 케이스를 눈으로 확인할 수가 없다는 것입니다!간',
    title: '보이지 않는 마케팅. 브랜드가 말 없이 제품을 판매하는 방법',
    state: 'in-progress',
  },
  {
    id: 151,
    code: 'Z1730',
    brand: 'LAKENE 라케네',
    createdAt: 1584560291566,
    article:
      'OCP(Open/Closed Principle)확장에는 열려 있으나 변경에는 닫혀 있다.풀어서 이야기하면, 이는 소프트웨어에 변경사항이 있을 때에, ‘확장할 때에 구현체가 변경될 수 있다. 그렇지만 인터페이스를 사용하므로 클라이언트 소스에는 변경이 없다.’는 뜻지난글에서 ‘클라우드 파일 시스템’ 예시 참고위의 코드는 MemberService(클라이언트)에서',
    title:
      '[차원축소] 이상치 탐지 기법 - 이상치 탐지 개요 및 밀도 기반 이상치탐지',
    state: 'done',
  },
].map((item) => {
  return {
    ...item,
    createdAt: dayjs('2022-08-08').subtract(item.id, 'day').valueOf(),
  }
})
