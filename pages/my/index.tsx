import { ProfileTest } from "@/assets";
import Header from "@/components/common/header/header";
import MyApp from "@/components/my/App";
import MyPage from "@/layout/MyPage";

export default function My() {
  return (
    <>
      <Header name="최태영" profile={ProfileTest} />
      <MyPage app={<MyApp />} />
    </>
  );
}
