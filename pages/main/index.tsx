import { ProfileTest } from "@/assets";
import Header from "@/components/common/header/header";
import RoomListApp from "@/components/main/App";
import userState from "@/context/user";
import MainPage from "@/layout/MainPage";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Main() {
  const [userInfo, setUserInfo] = useRecoilState(userState);

  useEffect(() => {
    axios
      .get("https://leehj050211.bssm.kro.kr/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((r) => {
        setUserInfo(r.data);
      });
  }, [setUserInfo]);

  return (
    <>
      <Header name={userInfo.name} profile={ProfileTest} />
      <MainPage app={<RoomListApp />} />
    </>
  );
}
