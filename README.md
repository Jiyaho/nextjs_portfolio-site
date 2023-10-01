# Janet's Portfolio Web Site

## 🔷 URL

- Web Site: https://janet-n-planet.vercel.app/

- Github Repository: https://github.com/Jiyaho/nextjs_portfolio-site

## 🔷 Description

Next.js와 tailwind를 활용하여 제작한, MDX 파일 변환 방식을 이용하여 포스팅하는 방식의 개인 포트폴리오 웹 사이트입니다.

## 🔷 Tech

<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }}
>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white" style={{ margin: '2px' }} />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" style={{ margin: '2px' }} />
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white" style={{ margin: '2px' }} />
</div>

## 🔷 Purpose

- 최근까지 만들어 온 사이드 프로젝트들을 정리하여 볼 수 있도록 포트폴리오 사이트를 만들고자 하였습니다.
- 콘텐츠는 mdx(markdown + jsx) 문법으로 작성 및 업로드 가능합니다.
- 컴포넌트 재활용과 유지보수 측면을 고려하여 Atomic Design Pattern을 적용한 시스템을 구성해보도록 하였습니다.

## 🔷 Page Description

### 1. Home Page

- 메인 페이지로 타이핑 애니메이션 등을 이용하여 사이트의 주제, 정체성을 부여하려고 하였습니다.
- Click 시에 Introduce Page로 이동합니다.

<img src="https://i.ibb.co/NScYTtk/01-home.png" alt="01-home" border="0" loading="lazy" />

### 2. Introduce Page

자기소개 페이지입니다. 하단 부의 About Me 클릭 시에 About Page로 이동합니다.
<img src="https://i.ibb.co/0fqGjR7/02-intro.png" alt="02-intro" border="0" loading="lazy" />

### 3. About Page

MDX 파일을 HTML로 변환하여 개인 프로필 내용을 게시한 페이지 입니다.
<img src="https://i.ibb.co/bKzsykf/03-about.png" alt="03-about" border="0" loading="lazy" />

### 3. Portfolio Page

제작한 사이드 프로젝트들의 목록을 한눈에 볼 수 있는 페이지입니다. 프로젝트의 썸네일, 프로젝트명 및 프로젝트의 간략한 설명이 포함되어 있는 프로젝트 정보들을 카드뷰 형태로 보여줍니다.
<img src="https://i.ibb.co/KbHbzqz/04-portfolio.png" alt="04-portfolio" border="0" loading="lazy" />

### 4. Project Detail Page

포트폴리오 페이지에서 프로젝트를 클릭하면 해당 프로젝트의 상세 페이지로 연결됩니다.
<img src="https://i.ibb.co/p39bvf1/05-project.png" alt="05-project" border="0" loading="lazy" />

### 5. Mobile 화면 Screenshot

<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }}
>
  <img src="https://i.ibb.co/kGH0Ltg/06-mobile-home.png" alt="06-mobile-home" border="0" width="45%" loading="lazy" />
  <img src="https://i.ibb.co/pJMT7wz/07-mobile-project.png" alt="07-mobile-project" border="0" width="45%" loading="lazy" />
</div>

## 🔷 Additional Function

- 스크린 테마 모드(Light mode, Dark mode)를 제공합니다.

<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }}
>
  <img src="https://i.ibb.co/8PqLpVD/theme-dark.png" alt="theme-dark" border="0" width="100px" loading="lazy" />
  <img src="https://i.ibb.co/mDxsZnN/theme-light.png" alt="theme-light" border="0" width="100px" loading="lazy" />
</div>

- 반응형 웹을 지원합니다.

<img src="https://i.ibb.co/dG5GZnk/pc-mobile.png" alt="pc-mobile" border="0" width="200px" />

## 🔷 Trouble Shooting

- **개발 모드에서 hydration 중에 불일치에 대한 경고**

  - 문제점: 화면 테마를 다크 모드 설정하는 코드를 넣은 후, 콘솔창에 에러가 발생. 또한 다크 모드 적용 후 새로고침 시 라이트 모드가 먼저 적용되어 깜빡임 현상 발생 후 다크 모드 적용되었습니다.
  - 원인: 서버쪽에서 렌더링하는 컨텐츠와 클라이언트 측에서 렌더링하는 컨텐츠가 서로 불일치할 경우 나는 에러였으며 깜빡임 현상은 페이지 로드가 끝난 후에 다크 모드가 적용되기 때문으로 원인을 파악하였습니다.
  - 해결: RootLayout HTML에 suppressHydrationWarning={true}를 추가하여 경고를 무시하는 것으로 조치하였습니다.

- **natural stacking order를 따르는 element의 배치 규칙을 깨뜨리는 이슈**
  - 문제점: Next.js의 Image 컴포넌트를 사용하여 이미지를 삽입했는데, 이미지 파일만 Header를 가린 채로 Elements중 화면 최상단에 오는 문제가 발생하였습니다. (이미지 아래의 li 태그들은 정상적으로 헤더를 가리지 않았습니다.) 원래라면 웹 페이지의 natural stacking order에 의해 차례대로 배치 되어야 했습니다.
  - 원인: natural stacking order가 깨지는 예외 상황으로, opacity 또는 transform같은 CSS 속성들을 설정하면 element가 새로운 stacking context에 배치된다는 점을 알게 되었습니다.
  - 해결: 필요한 각 요소에 z-index를 부여함으로써 문제를 해결하였습니다.

## 🔷 How to use

**Post 추가(생성) 혹은 업데이트하는 방법**

- **projects**: `/posts/projects` 경로에서 mdx 파일 작성 후 (양식 준수) `npm run build`하여 mdx -> json 파일로 변환 후 `npm run start`하여 앱 구동
- **profile**: `/posts/profile` 경로에서 mdx 파일 작성 후 (양식 준수) `npm run build`하여 mdx -> json 파일로 변환 후 `npm run start`하여 앱 구동

## 🔷 File Tree Structure

```
📦 nextjs_portfolio-site
├─ .contentlayer
├─ .eslintrc.jso
├─ .gitignore
├─ README.md
├─ contentlayer.config.ts
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ posts
├─ publ
├─ src
│  ├─ app
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ portfolio
│  │  │  ├─ [slug]
│  │  │  │  └─ page.tsx
│  │  │  └─ page.tsx
│  │  └─ profile
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ atoms
│  │  │  ├─ Background.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ NavMenu.tsx
│  │  │  ├─ ProjectCard.tsx
│  │  │  ├─ ScrollButton.tsx
│  │  │  ├─ SvgPathDraw.tsx
│  │  │  ├─ ThemeSwitcher.tsx
│  │  │  ├─ TypeItGreeting.tsx
│  │  │  └─ TypeItSlogans.tsx
│  │  ├─ molecules
│  │  │  ├─ NavDropdown.tsx
│  │  │  └─ Navigation.tsx
│  │  └─ organisms
│  │     └─ Header.tsx
│  ├─ constants
│  │  ├─ SvgPathInfo.ts
│  │  └─ index.ts
│  ├─ providers
│  │  └─ ThemeProvider.tsx
│  └─ utils
│     └─ getMdxMetaData.tsx
├─ tailwind.config.js
└─ tsconfig.json
```
