import { Room } from "@/assets";
import Image from "next/image";
import styled from "styled-components";

export default function SpaceApp() {
  return (
    <RoomContainer>
      <Image fill src={Room} alt="room" />
    </RoomContainer>
  );
}

const RoomContainer = styled.div``;
