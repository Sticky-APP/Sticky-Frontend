import { ProfileTest } from "@/assets";
import Header from "@/components/common/header/header";
import RoomListApp from "@/components/main/App";
import MainPage from "@/layout/MainPage";

export default function Main() {
  return (
    <>
      <Header name="최태영" profile={ProfileTest} />
      <MainPage app={<RoomListApp />} />
    </>
  );
}
