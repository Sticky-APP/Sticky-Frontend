import { ProfileTest, Pencil, FullScreen } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function MyApp() {
  return (
    <>
      <ProfileContainer>
        <ProfileImageStyle>
          <Image src={ProfileTest} fill alt="profile" />
        </ProfileImageStyle>
        <ProfileNameContainer>
          <ProfileName>최태영</ProfileName>
        </ProfileNameContainer>
      </ProfileContainer>
      <SpaceOwner>
        <NameHighlight>최태영</NameHighlight>님의 스페이스
      </SpaceOwner>
      <IntroduceContainer>
        <IntroduceContent>
          동해물과 백두산이 마르고 닳도록 우리나라 만세!
        </IntroduceContent>
        <PencilImageStyle>
          <Image fill src={Pencil} alt="Pencil" />
        </PencilImageStyle>
      </IntroduceContainer>
      <IframeContainer>
        <IframeStyle
          sandbox="allow-scripts allow-popups"
          src="http://localhost:3000/space"
          title="my-space"
        />
        <FullScreenImageStyle href="/space">
          <Image src={FullScreen} alt="icon" />
        </FullScreenImageStyle>
      </IframeContainer>
    </>
  );
}

const FullScreenImageStyle = styled(Link)`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 15px;
  overflow: hidden;
  position: relative;
`;

const IframeStyle = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const PencilImageStyle = styled.span`
  position: absolute;
  right: 25px;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const IntroduceContent = styled.p`
  font-weight: 500;
  font-size: 18px;
  padding-left: 20px;
  color: #4b4b4b;
`;

const IntroduceContainer = styled.div`
  margin-top: 15px;
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  background: #f8f4ff;
  border-radius: 20px;
`;

const SpaceOwner = styled.p`
  margin-top: 30px;
  font-weight: bold;
  font-size: 24px;
`;

const NameHighlight = styled.span`
  color: #662af1;
  &::before {
    content: "";
    display: inline-block;
    width: 14px;
    height: 4px;
    margin: -5px 10px 0 0;
    vertical-align: middle;
    background: #662af1;
    border-radius: 21px;
  }
`;

const ProfileImageStyle = styled.span`
  width: 85px;
  height: 85px;
  position: relative;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileName = styled.p`
  font-weight: 700;
  font-size: 20px;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const ProfileNameContainer = styled.div`
  width: 192px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f4ff;
  border-radius: 0px 22px 22px 22px;
  transform: matrix(1, 0, 0, -1, 0, 0);
  margin-left: 10px;
`;
