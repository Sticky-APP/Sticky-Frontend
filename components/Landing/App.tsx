import theme from "@/styles/theme";
import styled from "styled-components";
import Image from "next/image";
import useDraggable from "@/hooks/useDraggable";
import LandingLaptop from "@/assets/Landing/laptop.svg";
import { BluePostIt } from "@/assets/PostIt";

export default function LandingApp() {
  const { CustomDraggableView } = useDraggable();

  return (
    <AppWrapper>
      <CustomDraggableView
        bounds={undefined}
        absolute
        defaultPosition={{ x: 100, y: 100 }}
      >
        <ImageWrapper>
          <Image src={BluePostIt} alt="" fill />
        </ImageWrapper>
      </CustomDraggableView>
      <AppTitle>Sticky</AppTitle>
      <AppDescription>새로운 디지털 세상, Sticky로 오세요!</AppDescription>
      <CustomDraggableView bounds={undefined}>
        <ImageWrapper>
          <Image src={LandingLaptop} alt="LandingLaptop" fill />
        </ImageWrapper>
      </CustomDraggableView>

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
  max-width: 900px;
  width: 90vw;
  height: 600px;
  user-select: none;
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
