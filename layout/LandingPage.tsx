import { ReactNode } from "react";
import styled from "styled-components";

interface FrameProps {
  app: ReactNode;
}

function Frame({ app }: FrameProps) {
  return <LandingPageLayout>{app}</LandingPageLayout>;
}

export default function LandingPage(props: FrameProps) {
  return <Frame {...props} />;
}

const LandingPageLayout = styled.div``;
