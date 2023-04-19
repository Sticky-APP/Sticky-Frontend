import { BackIcon } from "@/assets";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import * as Icons from "@/assets/";
import Item from "./Item";

const testData = [
  {
    id: 1,
    src: Icons.WhiteBoard,
  },
  {
    id: 2,
    src: Icons.Sofa,
  },
  {
    id: 3,
    src: Icons.Table,
  },
  {
    id: 4,
    src: Icons.WaterPurifier,
  },
  {
    id: 5,
    src: Icons.Clock,
  },
  {
    id: 6,
    src: Icons.Stand,
  },
  {
    id: 7,
    src: Icons.Bed,
  },
  {
    id: 8,
    src: Icons.Shelf,
  },
  {
    id: 9,
    src: Icons.Moon,
  },
];

export default function Header() {
  return (
    <HeaderContainer>
      <ImageContainer>
        <Image src={BackIcon} width={130} height={80} alt="icon" />
      </ImageContainer>
      <ItemContainer>
        {testData.map((value: { id: number; src: StaticImageData }) => {
          return <Item key={value.id} item={value.src} />;
        })}
      </ItemContainer>
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

const ItemContainer = styled.div`
  display: flex;
`;
