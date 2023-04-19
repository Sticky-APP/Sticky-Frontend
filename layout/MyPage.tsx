import { ReactNode } from "react";
import styled from "styled-components";

interface FrameProps {
  app: ReactNode;
}

function Frame({ app }: FrameProps) {
  return <MyPageLayout>{app}</MyPageLayout>;
}

export default function MyPage(props: FrameProps) {
  return <Frame {...props} />;
}

const MyPageLayout = styled.div`
  overflow-x: hidden;
  margin: 50px 10rem 50px 10rem;
`;
