import { BackIcon } from "@/assets";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import * as Icons from "@/assets/";
import Link from "next/link";
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
  {
    id: 10,
    src: Icons.Moon,
  },
  {
    id: 11,
    src: Icons.Moon,
  },
  {
    id: 12,
    src: Icons.Moon,
  },
  {
    id: 13,
    src: Icons.Moon,
  },
  {
    id: 14,
    src: Icons.Moon,
  },
  {
    id: 15,
    src: Icons.Moon,
  },
  {
    id: 16,
    src: Icons.Moon,
  },
  {
    id: 17,
    src: Icons.Moon,
  },
];

export default function Header() {
  return (
    <HeaderContainer>
      <ImageContainer href="/main">
        <Image fill src={BackIcon} alt="icon" />
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
  position: relative;
  height: 123px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem 0;
`;

const ImageContainer = styled(Link)`
  position: fixed;
  z-index: 2;
  cursor: pointer;
  background: #ffffff;
  box-shadow: -1px -6px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 130px;
  height: 80px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 130px;
`;
