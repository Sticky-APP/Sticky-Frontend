import { ReactNode } from "react";
import styled from "styled-components";

interface FrameProps {
  app: ReactNode;
}

function Frame({ app }: FrameProps) {
  return <MainPageLayout>{app}</MainPageLayout>;
}

export default function MainPage(props: FrameProps) {
  return <Frame {...props} />;
}

const MainPageLayout = styled.div`
  overflow-x: hidden;
  margin: 50px 0 10rem 10rem;
`;
