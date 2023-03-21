import theme from "@/styles/theme";
import styled from "styled-components";
import LandingLaptop from "@/public/assets/landing-laptop.png";
import Image from "next/image";

export default function Landing() {
  return (
    <LadingWrapper>
      <LandingTitle>Sticky</LandingTitle>
      <LandingDescription>
        새로운 디지털 세상, Sticky로 오세요!
      </LandingDescription>
      <Image src={LandingLaptop} alt="" />
      <LandingButton>START!</LandingButton>
    </LadingWrapper>
  );
}

const LadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LandingTitle = styled.h1`
  font-family: "CWDangamAsac-Bold";
  font-size: 70px;
  color: ${theme.primary};
  margin-bottom: 0.5rem;
`;

const LandingDescription = styled.span`
  font-family: "Noto Sans KR";
  font-size: 26px;
`;

const LandingButton = styled.button`
  color: ${theme.primary};
  background-color: ${theme.secondary};
  font-family: "CWDangamAsac-Bold";
  font-size: 26px;
  padding: 1rem 4rem;
  border: 0;
  border-radius: 24px;
`;
