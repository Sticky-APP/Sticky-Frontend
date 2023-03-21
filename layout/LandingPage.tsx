import { ReactNode } from "react";
import styled from "styled-components";

interface FrameProps {
  app: ReactNode;
  introduce: ReactNode;
}

function Frame({ app, introduce }: FrameProps) {
  return (
    <LandingPageLayout>
      {app} {introduce}
    </LandingPageLayout>
  );
}

export default function LandingPage(props: FrameProps) {
  return <Frame {...props} />;
}

const LandingPageLayout = styled.div`
  overflow-x: hidden;
`;
