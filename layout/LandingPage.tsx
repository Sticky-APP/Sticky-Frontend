import { ReactNode } from "react";
import styled from "styled-components";

interface FrameProps {
  app: ReactNode;
  introduce: ReactNode;
  footer: ReactNode;
}

function Frame({ app, introduce, footer }: FrameProps) {
  return (
    <LandingPageLayout>
      {app} {introduce} {footer}
    </LandingPageLayout>
  );
}

export default function LandingPage(props: FrameProps) {
  return <Frame {...props} />;
}

const LandingPageLayout = styled.div`
  overflow-x: hidden;
`;
