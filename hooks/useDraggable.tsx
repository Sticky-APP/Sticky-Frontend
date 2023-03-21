import { Position } from "@/types/draggable.interface";
import { ReactNode, useState } from "react";
import Draggable, { DraggableData, DraggableProps } from "react-draggable";
import styled from "styled-components";

interface CustomDraggableProps extends Partial<DraggableProps> {
  children: ReactNode;
  absolute?: boolean;
}

// TODO : 스티커 내부 텍스트 props 추가

export default function useDraggable(myStickerList?: Position[]) {
  const [stickerList, setStickerList] = useState<Position[]>(
    myStickerList || [],
  );

  const trackEnd = (id: number, { lastX: x, lastY: y }: DraggableData) => {
    setStickerList((prev) => [
      { id, x, y },
      ...prev.filter((data) => data.id !== id),
    ]);
  };

  function CustomDraggableView({
    children,
    absolute,
    ...props
  }: CustomDraggableProps) {
    return (
      <CustomDraggableWrapper absolute={absolute}>
        <Draggable bounds="parents" {...props}>
          {children}
        </Draggable>
      </CustomDraggableWrapper>
    );
  }

  return {
    stickerList,
    trackEnd,
    CustomDraggableView,
  };
}

const CustomDraggableWrapper = styled.div<{ absolute?: boolean }>`
  position: ${(props) => (props.absolute ? "absolute" : "")};
`;
