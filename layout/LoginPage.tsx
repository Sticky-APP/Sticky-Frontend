import { ReactNode } from "react";
import styled from "styled-components";

interface FrameProps {
  app: ReactNode;
}

function Frame({ app }: FrameProps) {
  return <LoginPageLayout>{app}</LoginPageLayout>;
}

export default function LoginPage(props: FrameProps) {
  return <Frame {...props} />;
}

const LoginPageLayout = styled.div`
  overflow-x: hidden;
`;
