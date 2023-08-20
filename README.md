# Janet's Portfolio Web Site

## 🔷 URL

- Web Site: https://janet-n-planet.vercel.app/
- Github Repository: https://github.com/Jiyaho/nextjs_portfolio-site

## 🔷 Description

Next.js와 tailwind를 활용하여 제작한, MDX 파일 변환 방식을 이용하여 포스팅하는 방식의 개인 포트폴리오 웹 사이트입니다.

## 🔷 사용 스택 및 스킬

<div>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
<img src="https://img.shields.io/badge/MDX-1B1F24?style=for-the-badge&logo=MDX&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white" />
</div>

## 🔷 기획의도

- 최근까지 만들어 온 사이드 프로젝트들을 정리하여 볼 수 있도록 포트폴리오 사이트를 만들고자 하였습니다.
- 프로젝트 컨텐츠를 사이트에 Post하는 것에 있어서 보다 편의성을 가진 방식에 대해 고민하였고, CRUD 형태로 게시물을 작성하고 수정하여 매번 새롭게 별도의 글을 작성하는 것이 아닌, 프로젝트 제작 시 작성하는 'README.md' 파일을 가져와 편리하게 재사용할 수 있는 형태의 포트폴리오 사이트를 기획하게 되었습니다.
- 컴포넌트 재활용과 유지보수 측면을 고려하여 Atomic Design Pattern을 적용한 시스템을 구성 하였습니다.

## 🔷 제공하는 기능 / 페이지 구성

### 1. Home Page

메인 페이지로 타이핑 애니메이션 등을 이용하여 사이트의 주제, 정체성을 부여하려고 하였습니다.

<img src="https://i.ibb.co/zRksPrB/01-portfolio.png" alt="01_portfolio" border="0">

### 2. Profile Page

MDX 파일을 HTML로 변환하여 개인 프로필 내용을 게시한 페이지 입니다.

<img src="https://i.ibb.co/b5KjtXL/03.png" alt="03" border="0">

### 3. Portfolio Page

제작한 사이드 프로젝트들의 목록을 한눈에 볼 수 있는 페이지입니다. 프로젝트의 썸네일, 프로젝트명 및 프로젝트의 간략한 설명이 포함되어 있는 프로젝트 정보들을 카드뷰 형태로 보여줍니다.

<img src="https://i.ibb.co/RzqyN6D/04.png" alt="04" border="0">

### 4. Project Detail Page

포트폴리오 페이지에서 프로젝트를 클릭하면 해당 프로젝트의 상세 페이지로 연결됩니다.

<img src="https://i.ibb.co/m6t7kXk/05.png" alt="05" border="0">
<img src="https://i.ibb.co/LgWkvmT/06.png" alt="06" border="0">

## 🔷 부가적인 기능

스크린 테마 모드(Light mode, Dark mode)를 제공합니다.

<img src="https://i.ibb.co/cxZR9c1/theme-dark.png" alt="theme-dark" border="0">
<img src="https://i.ibb.co/P9LDGx4/theme-light.png" alt="theme-light" border="0">

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
