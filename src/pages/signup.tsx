import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import Button from '@src/components/global/Button';
import { Header } from '@src/components/global/Header';
import { CheckBoxIcon, DetailIcon } from '@src/components/icons/SystemIcons';
import { useRouter } from 'next/router';
import PATHS from '@src/common/constants/Paths';
import { RootState } from '@src/common/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { togglePersonal, toggleService } from '@src/common/redux/slices/agreementSlice';

const Signup = () => {
  const { personal, service } = useSelector((store: RootState) => store.agreement);
  const dispatch = useDispatch();

  const { push } = useRouter();

  const handleClick = () => {
    push(PATHS.TODOBOX);
  };

  return (
    <Container>
      <Header text="회원 가입" isBack />
      <SignupHeader>
        <Title>더 나은 서비스 품질을 위해서</Title>
        <Title>필수 약관에 동의해주세요</Title>
      </SignupHeader>
      <ImageWrapper>
        <img src="/assets/SignUpImage.png" width="72.5%" />
      </ImageWrapper>
      <Footer>
        <AgreementTable>
          <AgreementRow>
            <CheckBoxIcon
              onClick={() => {
                dispatch(toggleService());
              }}
              isActive={service}
            />
            <RowText>
              <span>(필수)</span> 서비스 이용약관 동의
            </RowText>
            <DetailIcon
              onClick={() => {
                push('/terms/service');
              }}
            />
          </AgreementRow>
          <Divider />
          <AgreementRow>
            <CheckBoxIcon
              onClick={() => {
                dispatch(togglePersonal());
              }}
              isActive={personal}
            />
            <RowText>
              <span>(필수)</span> 개인정보 처리방침 동의
            </RowText>
            <DetailIcon
              onClick={() => {
                push('/terms/personal');
              }}
            />
          </AgreementRow>
        </AgreementTable>
        <Button
          variant={personal && service ? 'Primary' : 'Disabled'}
          onClick={handleClick}
          size="Large"
          rounder={false}>
          동의하기
        </Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
`;

const Title = styled.h3`
  margin: 0;
  text-align: left;
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 2rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  flex-basis: content;
  padding-bottom: 2rem;
`;

const AgreementTable = styled.div`
  width: 100%;
  flex-grow: 1;
  margin-bottom: 2.5rem;
`;

const AgreementRow = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Divider = styled.div`
  margin: 0;
  height: 1px;
  background-color: ${COLOR.GRAY50};
`;

const RowText = styled.p`
  flex-grow: 1;
  margin: 0 1rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  span {
    color: ${COLOR.PURPLE500};
  }
`;

export default Signup;
