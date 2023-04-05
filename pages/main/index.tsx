import { ProfileTest } from "@/assets/Profile";
import Header from "@/components/common/header/header";
import RoomList from "@/components/main/RoomList";
import MainPage from "@/layout/MainPage";

export default function Main() {
  return (
    <>
      <Header name="최태영" profile={ProfileTest} />
      <MainPage app={<RoomList />} />
    </>
  );
}
