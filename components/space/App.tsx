import { Room } from "@/assets";
import Image from "next/image";
import styled from "styled-components";

export default function SpaceApp() {
  return (
    <RoomContainer>
      <Image src={Room} width={1304} height={1200} alt="room" />
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  display: flex;
  justify-content: center;
`;
