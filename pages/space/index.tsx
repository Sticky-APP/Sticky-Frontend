import SpaceApp from "@/components/space/App";
import Header from "@/components/space/Header";
import SpacePage from "@/layout/SpacePage";

export default function Space() {
  return (
    <>
      <Header />
      <SpacePage app={<SpaceApp />} />
    </>
  );
}
