import Image from "next/image";
import styled from "styled-components";
import Landing1 from "@/public/assets/landing-1.svg";
import Landing2 from "@/public/assets/landing-2.svg";
import Landing3 from "@/public/assets/landing-3.svg";
import theme from "@/styles/theme";

export default function Introduce() {
  return (
    <IntroduceWrapper>
      <Section>
        <div>
          <SectionTitle>어디서든</SectionTitle>
          <SectionDescription>
            Sticky 에서는 공간의 제약을 받지않고 언제든지 새로운 친구들과
            소통할수 있어요!
          </SectionDescription>
        </div>
        <SectionImage>
          <Image src={Landing1} alt="" fill />
        </SectionImage>
      </Section>
      <Section reverse>
        <div>
          <SectionTitle>무엇이든!</SectionTitle>
          <SectionDescription>
            내가 원하던 방을 꾸미며 꿈꾸던 이상을 실현시키세요! Sticky에서는
            무엇이든 할 수있어요!
          </SectionDescription>
        </div>
        <SectionImage>
          <Image src={Landing2} alt="" fill />
        </SectionImage>
      </Section>
      <Section>
        <div>
          <SectionTitle>언제든지!</SectionTitle>
          <SectionDescription>
            낮과 밤, 원할때 마다 Sticky에서 새로운 사람들과 감정을 공유해요!
            새로운 친구를 사귀는건 언제나 즐거우니까요~!
          </SectionDescription>
        </div>
        <SectionImage>
          <Image src={Landing3} alt="" fill />
        </SectionImage>
      </Section>
    </IntroduceWrapper>
  );
}

const IntroduceWrapper = styled.div`
  padding: 0 60px;
  background-color: ${theme.secondary};
  margin-top: 8rem;
`;

const Section = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const SectionTitle = styled.h2`
  font-family: "CWDangamAsac-Bold";
  font-size: 50px;
  color: ${theme.primary};
  white-space: nowrap;
`;

const SectionImage = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
`;

const SectionDescription = styled.p`
  font-size: 26px;
  word-break: keep-all;
`;
