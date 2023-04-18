import { ReactNode } from "react";
import styled from "styled-components";

interface FrameProps {
  app: ReactNode;
}

function Frame({ app }: FrameProps) {
  return <MainPageLayout>{app}</MainPageLayout>;
}

export default function SpacePage(props: FrameProps) {
  return <Frame {...props} />;
}

const MainPageLayout = styled.div`
  overflow-x: hidden;
`;
