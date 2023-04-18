import styled from "styled-components";
import FacebookLogo from "@/components/icon/FacebookIcon";
import LinkedInLogo from "@/components/icon/LinkedInLogo";
import EmailLogo from "@/components/icon/EmallLogo";

export default function Footer() {
  return (
    <div className="bg-primary text-white px-40 py-16 flex justify-between items-end">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl">Sticky</h2>
        <div className="flex flex-col mt-10">
          <span>Tell</span>
          <span>051-1234-5678</span>
        </div>
        <div className="flex flex-col">
          <span>Email</span>
          <span>Sticky_KR@gmail.com</span>
        </div>
      </div>
      <div className="flex gap-1">
        <FooterLogo>
          <FacebookLogo />
        </FooterLogo>
        <FooterLogo>
          <EmailLogo />
        </FooterLogo>
        <FooterLogo>
          <LinkedInLogo />
        </FooterLogo>
      </div>
    </div>
  );
}

export const FooterLogo = styled.div`
  background-color: #ebe4fb;
  transition: all 0.3s;
  &:nth-child(1):hover {
    background-color: #1877f2;
  }
  &:nth-child(2):hover {
    background-color: #4ead5b;
  }
  &:nth-child(3):hover {
    background-color: #0673b2;
  }
  width: 50px;
  height: 50px;
  display: flex;
  margin-right: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
