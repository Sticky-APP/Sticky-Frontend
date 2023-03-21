import theme from "@/styles/theme";
import styled from "styled-components";
import LandingLaptop from "@/public/assets/landing-laptop.svg";
import Image from "next/image";

export default function LandingApp() {
  return (
    <AppWrapper>
      <AppTitle>Sticky</AppTitle>
      <AppDescription>새로운 디지털 세상, Sticky로 오세요!</AppDescription>
      <ImageWrapper>
        <Image src={LandingLaptop} alt="" fill />
      </ImageWrapper>

      <AppButton>START!</AppButton>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 900px;
  height: 600px;
`;

const AppTitle = styled.h1`
  font-family: "CWDangamAsac-Bold";
  font-size: 70px;
  color: ${theme.primary};
  margin-bottom: 0.5rem;
`;

const AppDescription = styled.span`
  font-size: 26px;
`;

const AppButton = styled.button`
  color: ${theme.primary};
  background-color: ${theme.secondary};
  font-family: "CWDangamAsac-Bold";
  font-size: 26px;
  padding: 1rem 4rem;
  border: 0;
  border-radius: 24px;
`;
