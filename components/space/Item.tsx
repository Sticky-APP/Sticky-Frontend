import useDraggable from "@/hooks/useDraggable";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

export default function Item({ item }: { item: StaticImageData }) {
  const { CustomDraggableView } = useDraggable();

  return (
    <CustomDraggableView>
      <ItemContainer>
        <Image src={item} width={100} height={90} alt="icon" />
      </ItemContainer>
    </CustomDraggableView>
  );
}

const ItemContainer = styled.div`
  width: 120px;
  height: 100%;
  margin-left: 30px;
  z-index: 999;
`;
