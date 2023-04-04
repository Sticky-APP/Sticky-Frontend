import styled from "styled-components";

export default function RoomList() {
  return (
    <RoomListContainer>
      <CurrentSticky>최근에 올라온 Sticky</CurrentSticky>
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
  font-family: "Noto Sans KR";
  font-weight: 500;
  font-size: 26px;
  color: #000000;
`;
