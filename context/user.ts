import { atom } from "recoil";

const userState = atom<{ name: string; email: string }>({
  key: "user",
  default: { name: "", email: "" },
});

export default userState;
