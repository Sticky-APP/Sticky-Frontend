import { ReactNode } from "react";
import styled from "styled-components";

interface FrameProps {
  app: ReactNode;
}

function Frame({ app }: FrameProps) {
  return <SpacePageLayout>{app}</SpacePageLayout>;
}

export default function SpacePage(props: FrameProps) {
  return <Frame {...props} />;
}

const SpacePageLayout = styled.div`
  position: relative;
  margin: 50px;
  width: 1000px;
  height: 1200px;
  overflow-x: hidden;
  margin: 6rem 10rem 0 10rem;
`;
