import { useEffect, useState } from "react";
import { BackIcon } from "@/assets";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import * as Icons from "@/assets/";
import Link from "next/link";
import Item from "./Item";

const testData = [
  [
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
  ],
  [
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
  ],
];

export default function Header() {
  const [page, setPage] = useState(0);
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);

  useEffect(() => {
    if (page === testData.length - 1) {
      setBack(true);
    } else {
      setBack(false);
    }
    if (page === 0) {
      setFront(true);
    } else {
      setFront(false);
    }
  }, [page]);

  return (
    <>
      <HeaderContainer>
        <ImageContainer href="/main">
          <Image fill src={BackIcon} alt="icon" />
        </ImageContainer>
        <Line />
        <ItemContainer>
          {testData[page].map((value: { id: number; src: StaticImageData }) => (
            <Item key={value.id} item={value.src} />
          ))}
        </ItemContainer>
      </HeaderContainer>
      <ButtonContainer>
        <ArrowButton
          disable={front}
          type="button"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={front}
        >
          <IoIosArrowBack size={30} />
        </ArrowButton>
        <ArrowButton
          disable={back}
          type="button"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={back}
        >
          <IoIosArrowForward size={30} />
        </ArrowButton>
      </ButtonContainer>
    </>
  );
}

const Line = styled.li`
  width: 1px;
  height: 123px;
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 130px;
  list-style: none;
`;

const HeaderContainer = styled.header`
  position: relative;
  height: 123px;
  width: 100%;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`;

const ImageContainer = styled(Link)`
  cursor: pointer;
  background: #ffffff;
  width: 130px;
  height: 80px;
  position: absolute;
  z-index: 9999999999;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 130px;
`;

const ButtonContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  height: 50px;
  position: absolute;
  right: 100px;
  border: 1px solid black;
`;

const ArrowButton = styled.button`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: lightgray;
  }
  background-color: ${({ disable }: { disable: boolean }) =>
    disable ? "gray" : "transparent"};
`;
