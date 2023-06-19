import { ProfileTest } from "@/assets";
import Header from "@/components/common/header/header";
import MyApp from "@/components/my/App";
import userState from "@/context/user";
import MyPage from "@/layout/MyPage";
import { useRecoilState } from "recoil";

export default function My() {
  const [userInfo] = useRecoilState(userState);

  return (
    <>
      <Header name={userInfo.name} profile={ProfileTest} />
      <MyPage app={<MyApp />} />
    </>
  );
}
