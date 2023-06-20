import Storage from "@/storage";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Google() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      axios
        .post("https://leehj050211.bssm.kro.kr//auth/google/token", {
          code,
          redirectUri: "https://leehj050211.bssm.kro.kr/oauth/callback/google",
        })
        .then((res) => {
          Storage.setItem("token", res.data.accessToken);
          router.push("/");
        });
    }
  }, [code, router]);

  return <div />;
}
