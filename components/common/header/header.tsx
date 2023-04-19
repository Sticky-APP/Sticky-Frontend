import theme from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

export default function Header({
  name,
  profile,
}: {
  name: string;
  profile: string;
}) {
  return (
    <HeaderContainer>
      <AppTitle>Sticky</AppTitle>
      <ProfileContainer>
        <ProfileImage src={profile} alt="profile" />
        <ProfileName>{name} 님</ProfileName>
      </ProfileContainer>
    </HeaderContainer>
  );
}

const AppTitle = styled.h1`
  font-family: "CWDangamAsac-Bold";
  font-size: 45px;
  color: ${theme.primary};
  margin-left: 10rem;
`;

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 123px;
  position: relative;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
`;

const ProfileImage = styled(Image)`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  position: relative;
`;

const ProfileName = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #000000;
  margin-top: 5px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 10rem;
`;
