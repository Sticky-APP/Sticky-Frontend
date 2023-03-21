import { Position } from "@/types/draggable.interface";
import { useState } from "react";
import { DraggableData } from "react-draggable";

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

  return {
    stickerList,
    trackEnd,
  };
}
