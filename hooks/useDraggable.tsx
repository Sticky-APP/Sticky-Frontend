import { Position } from "@/types/draggable.interface";
import { ReactNode, useState } from "react";
import Draggable, { DraggableData, DraggableProps } from "react-draggable";

interface CustomDraggableProps extends Partial<DraggableProps> {
  children: ReactNode;
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

  function CustomDraggableView({ children, ...props }: CustomDraggableProps) {
    return <Draggable {...props}>{children}</Draggable>;
  }

  return {
    stickerList,
    trackEnd,
    CustomDraggableView,
  };
}
