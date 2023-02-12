import ProductList, { ProductListProps } from '../../components/todomall/ProductList';
import { ComponentMeta, Story } from '@storybook/react';
import ProductCard, { ProductCardProps } from '../../components/todomall/ProductCard';

const ExampleData = [
  {
    id: '74be6f7d-6188-4843-9c46-b5e777cd2f08',
    title: 'IT 서비스 기획 전과정 따라해보기',
    image:
      'https://todomall-content.s3.ap-northeast-2.amazonaws.com/product/IT+서비스+기획+전과정+따라해보기/title+image.jpeg',
    icon: 'https://todomall-content.s3.ap-northeast-2.amazonaws.com/product_emoji/CompositingClassIcon_Pencil.svg',
    subDescription: '서비스 기획자 꿈나무',
    description:
      '서비스 기획, 도대체 어떻게 하는거지? 리서치 기획부터 문제 정의, 솔루션 도출까지! 서비스 기획자의 업무를 모두 따라해봐요.',
    informationTags: ['대학생', '직장인', '20대'],
    summarizedTags: ['직무개발', '1.5주', '어려움', '무료', '3차시'],
  },
  {
    id: 'ea265105-8807-4b80-a2ed-92791627fb90',
    title: '스티비로 뉴스레터 발행하기',
    image:
      'https://todomall-content.s3.ap-northeast-2.amazonaws.com/product/스티비로+뉴스레터+발행하기/title+image.png',
    icon: 'https://todomall-content.s3.ap-northeast-2.amazonaws.com/product_emoji/CompositingClassIcon_Mail.svg',
    subDescription: '뉴스레터 및 콘텐츠 발행에 관심 있는 마케터',
    description: '전문성 있는 콘텐츠 발행의 효율적인 방법인 뉴스레터! 제작부터 홍보까지 뉴스레터의 A to Z를 알아봐요!',
    informationTags: ['추천한', '완주율이 높은', '20대'],
    summarizedTags: ['직무개발', '2주', '쉬움', '무료', '4차시'],
  },
  {
    id: '4f72fd96-ca46-4f82-8f12-bcacdb1337eb',
    title: '피그마로 앱 프로토타입 만들기',
    image:
      'https://todomall-content.s3.ap-northeast-2.amazonaws.com/product/피그마로+앱+프로토타입+만들기/title+image.jpeg',
    icon: 'https://todomall-content.s3.ap-northeast-2.amazonaws.com/product_emoji/CompositingClassIcon_Program.svg',
    subDescription: '앱 아이디어를 시각화하고 싶으신 기획자',
    description:
      '이런 앱이 있으면 좋겠다라고 생각해본적이 있으신가요? 시중의 앱의 프로토타입을 완성하며 획기적인 생각들을 직접 시각화해보세요. 이번 클래스에서는 캠퍼스픽의 클론 디자인을 해볼거에요!',
    informationTags: ['완주율이 높은', '여성', '공예'],
    summarizedTags: ['직무개발', '2주', '보통', '무료', '4차시'],
  },
  {
    id: '3c8f0735-fedb-464f-82a8-fef46f491bf8',
    title: '노션으로 포트폴리오 만들기',
    image:
      'https://todomall-content.s3.ap-northeast-2.amazonaws.com/product/3만명이+열광한+노션+포트폴리오+만들기/title+image.jpeg',
    icon: 'https://todomall-content.s3.ap-northeast-2.amazonaws.com/product_emoji/CompositingClassIcon_List.svg',
    subDescription: '나만의 포트폴리오를 만들고 싶으신 분',
    description:
      '이력서 말고 나를 드러낼 수 있는 방법은 없을까? 단편적인 이력서 대신에 노션으로 나를 가장 잘 보여주는 포트폴리오를 손쉽게 만들어보세요.',
    informationTags: ['도전이 많은', '대학생', '직장인'],
    summarizedTags: ['직무개발', '1.5주', '쉬움', '무료', '4차시'],
  },
  {
    id: 'a67b9861-1940-4aa6-9465-a9b562840722',
    title: '깃허브로 실무 개발 능력 쌓기',
    image:
      'https://todomall-content.s3.ap-northeast-2.amazonaws.com/product/깃허브로+실무+개발+능력+쌓기/title+image.png',
    icon: 'https://todomall-content.s3.ap-northeast-2.amazonaws.com/product_emoji/CompositingClassIcon_Program.svg',
    subDescription: '협업을 처음 시작한 주니어 개발자',
    description:
      '깃 저장소를 호스팅하는 깃허브는 7월 기준 무려 8300만 명의 회원을 보유하고 있어요. 개발자에게 깃허브란 직장인의 마이크로소프트와 같은 존재라는 말이 있을 정도죠!',
    informationTags: ['조회수가 높은', '대학생', '컴퓨터'],
    summarizedTags: ['직무개발', '2주', '쉬움', '무료', '4차시'],
  },
  {
    id: '3df3ee86-5560-4c1e-8b5a-fd1b2cd1087f',
    title: '첫 인턴, 슬기롭게 지원하기',
    image:
      'https://todomall-content.s3.ap-northeast-2.amazonaws.com/product/첫+인턴%2C+슬기롭게+지원하기/title+image.png',
    icon: 'https://todomall-content.s3.ap-northeast-2.amazonaws.com/product_emoji/CompositingClassIcon_Person.svg',
    subDescription: '인턴에 처음 도전하는 대학생',
    description:
      '처음 도전해보는 인턴, 떨어지지 않고 바로 붙으려면 어떻게 해야 할까요? 인턴 준비도 전략적으로 접근해야 합니다.',
    informationTags: ['추천한', '대학생', '20대'],
    summarizedTags: ['직무개발', '1주', '보통', '무료', '4차시'],
  },
];

export default {
  title: 'TodoMall',
};

const TemplateProduct: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const ExampleCard = TemplateProduct.bind({});

ExampleCard.args = {
  subtitle: '협업을 처음 시작한 주니어 개발자',
  title: '깃허브로 실무 개발 능력 쌓기',
  description:
    '깃 저장소를 호스팅하는 깃허브는 7월 기준 무려 8300만 명의 회원을 보유하고 있어요. 개발자에게 깃허브란 직장인의 마이크로소프트와 같은 존재라는 말이 있을 정도죠!',
  icon: 'https://todomall-content.s3.ap-northeast-2.amazonaws.com/product_emoji/CompositingClassIcon_Program.svg',
  tags: ['대학생', '직장인', '20대'],
};

const TemplateProductList: Story<ProductListProps> = (args) => <ProductList {...args} />;

export const ExampleList = TemplateProductList.bind({});

ExampleList.args = {
  productList: ExampleData,
};
