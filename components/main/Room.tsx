import { PropsType } from "@/types/mainProps.interface";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Room({ name, intro, state }: PropsType) {
  const router = useRouter();
  return (
    <RoomContainer onClick={() => router.push("/my")}>
      <RoomInfo>
        <RoomOwner>{name}님의 방</RoomOwner>
        <RoomIntroduce>{intro}</RoomIntroduce>
      </RoomInfo>
      <RoomState>{state}</RoomState>
    </RoomContainer>
  );
}

const RoomIntroduce = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin-top: 8px;
`;

const RoomOwner = styled.p`
  font-weight: 700;
  font-size: 15px;
`;

const RoomState = styled.p`
  position: absolute;
  right: 72px;
  font-weight: 500;
  font-size: 12px;
  color: #662af1;
`;

const RoomInfo = styled.div`
  position: absolute;
  left: 55px;
`;

const RoomContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 82px;
  display: flex;
  align-items: center;
  position: relative;
  background: #f8f4ff;
  box-shadow: 0px 2px 2px -2px rgba(0, 0, 0, 0.25);
  border-radius: 0px 22px 22px 22px;
`;
