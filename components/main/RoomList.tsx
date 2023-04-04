import { PropsType } from "@/types/mainProps.interface";
import styled from "styled-components";
import Room from "./Room";

const testData = [
  {
    id: 1,
    name: "최태영",
    intro: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세!",
    state: "방금 전",
  },
  {
    id: 2,
    name: "최태영",
    intro: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세!",
    state: "방금 전",
  },
  {
    id: 3,
    name: "최태영",
    intro: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세!",
    state: "방금 전",
  },
  {
    id: 4,
    name: "최태영",
    intro: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세!",
    state: "방금 전",
  },
];

export default function RoomList() {
  return (
    <RoomListContainer>
      <CurrentSticky>최근에 올라온 Sticky</CurrentSticky>
      {testData.map((value: PropsType) => {
        return (
          <Room name={value.name} intro={value.intro} state={value.state} />
        );
      })}
    </RoomListContainer>
  );
}

const RoomListContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const CurrentSticky = styled.p`
  &::before {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    margin: -5px 10px 0 0;
    vertical-align: middle;
    background: #662af1;
    border-radius: 50%;
  }
  height: 38px;
  font-weight: 500;
  font-size: 26px;
  color: #000000;
`;
