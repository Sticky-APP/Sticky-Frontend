import { atom } from "recoil";
import { ModalState } from "@/types/modal.interface";

const modalState = atom<ModalState>({
  key: "modal",
  default: {
    title: "",
    content: null,
    visible: false,
  },
});

export default modalState;
