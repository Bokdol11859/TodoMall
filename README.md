<p align="center" >
<a href="https://todo-mall-sandy.vercel.app/" align="center"> <img src="https://user-images.githubusercontent.com/80627536/219948682-c36b90e0-51b1-43f5-83c4-73159705b9e0.jpeg" width="100%" height="100%" align="center"/></a>
</p>
<h1 align="center">
   
 [투두몰](https://todo-mall-sandy.vercel.app/)
  <br/>  <br/> 
  <div style="display: flex; gap: 10px; align-items: center; justify-content: center">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> 
    <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React_Query&logoColor=white"/>
    <img src="https://img.shields.io/badge/redux--toolkit-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white"/>
  <div/>

</h1>




## 목차

- [서비스 소개](#서비스-소개)
- [수상 기록](#수상-기록)
- [활용 기술](#활용-기술)
- [상세 페이지](#상세-페이지)

## 서비스 소개

- 투두몰은 많은 사람들이 쉽고 빠르게 도전을 할 수 있도록 도와주자는 목표를 가지고 시작
- 각 분야의 전문가들이 직접 제작한 커리큘럼과 투두를 제공하여 유저들이 투두몰을 통해 목표를 쉽게 달성할 수 있도록 도와줌
- 유저들은 길고 지루한 영상 강의가 아닌 글과 이미지로 된 강의를 통해 학습하고, 전문가들은 강의 제작에 들이는 리소스가 현저히 낮은게 타 강의 플랫폼과의 차별점

## 수상 기록

![image](https://user-images.githubusercontent.com/80627536/219949521-f0871b3d-6343-4760-a363-13b700633870.png)


- 오렌지플래닛, **오렌지 가든** 선정
- 오렌지플래닛, 썸머캠프 **우수팀** 선정
- 대학생 창업 대회, 시도2022 **우수팀** 선정
- 연세대학교, **예비창업패키지** 선정
- 서강대학교, 창업 서바이벌 **최우수상**
- 성균관대학교, **KINGO창업클럽** 선정
- 서강대학교, 캠퍼스타운 **최우수상**
- 홍익대학교, **창업 지원사업** 선정

## 활용 기술

  
- **[Typescript]()**: Typescript는 Javscript의 문법에 타입 지정을 할 수 있도록 만들어진 언어로, 자바스크립트의 자유도와 타입 언어의 안정성까지 갖춘 언어입니다. 개발 과정에서 타입 추론의 도움을 받기 위해 사용했습니다.  
  
- **[NextJS]()**: ReactJS를 더욱 간편하게 사용하기 위해 만들어진 프레임워크로, 추가적인 설정 없이도 기본적으로 Server Side Rendering이 가능한 것이 장점입니다. 또한, 외부 라이브러리의 도움 없이도 자동으로 파일 구조 기반 라우팅이 가능하여 직관적인 폴더 구조를 구축할 수 있습니다. 투두몰에서 판매하는 상품들의 소개 페이지는 데이터의 변경이 발생하지 않기 때문에 SSG 적용을 통해 로딩 속도를 단축하여 유저 경험을 개선하기 위해 도입했습니다. 
  
- **[Emotion]()**: CSS 파일 없이 자바스크립트 안에서 CSS 작업을 하기 위한 라이브러리로, 서비스 스타일링의 대부분을 Emotion을 통해서 작업했습니다. Props 전달이 가능하기 때문에 상태에 따른 스타일링을 더욱 간편하게 처리할 수 있습니다.

- **[React-Query]()**: React-Query는 Client-State와 Server-State를 확실하게 구분하기 위해 만들어진 라이브러리로, 서버에서 받아온 데이터를 키로 구분하여 캐싱을 할 수 있다는 큰 장점이 있습니다. 레시피지 서비스는 대부분 Server-State를 기반으로 동작하기 때문에, 추가적인 전역상태관리 툴을 이용해서 서버에서 받아온 데이터를 복사하여 관리하는 것 보다 React-Query를 이용하여 Server-State를 확실하게 분리해서 관리하는 것이 효율적일거라 판단하여 도입했습니다. 

- **[Redux-Toolkit]()**: Redux-Toolkit은 전역상태를 관리하기 위한 라이브러리로, 기본 React-Redux를 더 간편하게 사용할 수 있도록 만들어졌습니다. 현재 선택된 투두의 정보, 또는 현재 유저의 토큰 값과 같은 정보들을 전역 상태로 관리를 하기 위해 사용하였고, Recoil과는 다르게 Redux의 Devtool을 통해 State의 변화를 간편하게 관리할 수 있다는 장점 때문에 도입했습니다. 


## 상세 페이지
  
모든 페이지들은 [https://todo-mall-sandy.vercel.app/](https://todo-mall-sandy.vercel.app/) 에서 방문 가능합니다. 


### 로그인, 닉네임 설정 페이지

| 로그인                                                       | 약관 동의 페이지                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![MAIN](https://user-images.githubusercontent.com/80627536/219950330-5d0ba88a-e730-47ee-a19a-98ac6f9a147f.gif) | ![MAIN](https://user-images.githubusercontent.com/80627536/219950683-14a1a57c-c1ff-42d7-a2fa-f4d8b8f31d29.png)
서비스를 시작하면 처음 보이는 로그인 페이지입니다.<br /> 유저들이 서비스를 빠르게 이용할 수 있도록 카카오 로그인을 구현 했습니다. | 유저가 처음 로그인하면 볼 수 있는 약관 동의 페이지입니다. <br /> 첫 로그인 이후에는 백엔드에 약관 동의 정보가 저장되어 그 이후부턴 보이지 않도록 구현했습니다. 


<br/>

### 투두함 페이지 / 투두 세부 페이지

| 투두함 페이지                                                 | 투두 세부 페이지                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://user-images.githubusercontent.com/80627536/219951059-b0499aac-8bac-4c00-b355-4cc03b53aeb3.gif) | ![](https://user-images.githubusercontent.com/80627536/219951175-a6cc8559-e0a2-4889-98ae-73a88b904412.png) | <br/>
유저가 로그인하면 처음 보이는 투두함 페이지입니다. <br/> 유저는 구매한 상품들을 확인할 수 있고, <br/> 현재 해야하는 투두들을 모아서 볼 수 있습니다. <br/> 데이터가 로딩중일 때는 Skeleton UI가 보이도록 구현했습니다. | 각 투두의 세부 페이지입니다 <br/> 페이지 최상단에는 현재 페이지의 위치를 확인할 수 있는 상태바가 있고, <br/>  스크롤을 통해 현재 투두의 내용을 확인할 수 있습니다. |
<br/>

 ### 투두몰 페이지 / 상품 세부 페이지


| 투두몰 페이지             | 상품 세부 페이지                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://user-images.githubusercontent.com/80627536/219951488-e755a667-737c-4f0b-890d-8d430d65d927.png) | ![](https://user-images.githubusercontent.com/80627536/219951608-15d39a82-3841-44f6-9c9d-3c0dc8d65c22.png) | <br/>
유저가 레시피 또는 테마를 검색하기 전에 몇몇 검색어들을 추천해주는 페이지입니다. 재료 추천 검색어는 검색했을 시에 레시피 검색을 우선시하고, 테마 추천 검색어는 테마 검색을 우선시합니다. 데이터가 로딩중일 때는 Skeleton UI가 보이도록 구현했습니다.  | 투두몰 페이지에서 상품을 클릭하면 이동하는 상품 세부 페이지입니다. 유저는 세부 페이지에서 선택한 상품의 커리큘럼 및 설명을 확인할 수 있고, 원할 경우 상품 구매가 가능합니다.  |

### 과제 제출 페이지 / 마이 페이지

| 과제 제출 페이지                                                    | 마이 페이지                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://user-images.githubusercontent.com/80627536/219951934-8ccfc561-8fb7-49ea-9317-459f94d832e3.png) | ![](https://user-images.githubusercontent.com/80627536/219951963-a8b17d21-15fa-4464-aa3f-835a288ee577.png) |
| 유저가 세션의 모든 투두를 완료했을 시 과제를 제출할 때 보이는 페이지입니다. 유저는 사진을 업로드를 하고, 내부적으로 사진을 압축하여 S3로 업로드를 합니다. 과제를 제출이 된 세션은 끝이 나고 다음 세션으로 넘어가집니다. | 유저가 현재 도전중인 투두들, 실패했던 투두들, 성공했던 투두들을 모아서 볼 수 있는 페이지입니다. |
