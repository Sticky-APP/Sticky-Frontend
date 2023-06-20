import theme from "@/styles/theme";
import styled from "styled-components";
import Image from "next/image";
import useDraggable from "@/hooks/useDraggable";
import {
  BluePostIt,
  GoogleIcon,
  YellowPostIt,
  YellowWithClipPostIt,
} from "@/assets";
import { useRouter } from "next/router";
import axios from "axios";

export default function LandingApp() {
  const { CustomDraggableView } = useDraggable();
  const router = useRouter();

  const handleGoogleLogin = () => {
    axios
      .get(
        "https://leehj050211.bssm.kro.kr/auth/google/oauth-uri?redirectUri=https://sticky-app.vercel.app/oauth/callback/google",
      )
      .then((res) => {
        router.push(res.data.oAuthUri);
      });
  };

  return (
    <>
      <LoginWrapper>
        <LoginButtonWrapper>
          <LoginTitle>Sticky</LoginTitle>
          <LoginDescription>
            새로운 디지털 세상, Sticky 시작하기
          </LoginDescription>
          <LoginButton onClick={handleGoogleLogin}>
            <Image src={GoogleIcon} alt="" />
            Google로 로그인
          </LoginButton>
        </LoginButtonWrapper>
      </LoginWrapper>
      <CustomDraggableView defaultPosition={{ x: 200, y: -800 }}>
        <Image src={BluePostIt} alt="" />
      </CustomDraggableView>
      <CustomDraggableView defaultPosition={{ x: 1000, y: -700 }}>
        <Image src={YellowPostIt} alt="" />
      </CustomDraggableView>
      <CustomDraggableView defaultPosition={{ x: -500, y: -400 }}>
        <Image src={YellowWithClipPostIt} alt="" />
      </CustomDraggableView>
    </>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const LoginTitle = styled.h1`
  font-family: "CWDangamAsac-Bold";
  font-size: 70px;
  color: ${theme.primary};
  margin-bottom: 0.5rem;
`;

const LoginButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginDescription = styled.span`
  font-size: 26px;
  color: ${theme.gray["500"]};
`;

const LoginButton = styled.button`
  color: ${theme.gray["500"]};
  margin-top: 4rem;
  background-color: ${theme.white};
  font-size: 26px;
  padding: 0.75rem 3.5rem;
  border: 1px solid ${theme.primary};
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
`;
