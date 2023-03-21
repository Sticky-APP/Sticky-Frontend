import { ReactNode } from "react";
import { LandingPageLayout } from "./LandingPage.style";

interface FrameProps {
  app: ReactNode;
}

function Frame({ app }: FrameProps) {
  return <LandingPageLayout>{app}</LandingPageLayout>;
}

export default function LandingPage(props: FrameProps) {
  return <Frame {...props} />;
}
