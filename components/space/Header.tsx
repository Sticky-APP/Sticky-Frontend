import { BackIcon } from "@/assets";
import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <ImageContainer>
        <Image src={BackIcon} width={130} height={80} alt="icon" />
      </ImageContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 123px;
  width: 100%;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
`;

const ImageContainer = styled.div`
  cursor: pointer;
  width: 150px;
  height: 123px;
  background: #ffffff;
  box-shadow: -1px -6px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
