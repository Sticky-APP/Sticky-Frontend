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
        .post("http://192.168.10.88:8080/auth/google/token", {
          code,
          redirectUri: "http://localhost:3000/oauth/callback/google",
        })
        .then((res) => {
          Storage.setItem("token", res.data.accessToken);
          router.push("/");
        });
    }
  }, [code, router]);

  return (
    <div>
      <h1>Google</h1>
    </div>
  );
}
