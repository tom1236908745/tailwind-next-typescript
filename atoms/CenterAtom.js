import { atom, selector } from "recoil";

export const itemState = atom({
  key: "itemState",
  default: "",
});
export const charCountState = selector({
  key: "charCountState",
  // Atomで管理していた文字列を加工して文字数として返却する
  get: ({ get }) => {
    // get()でAtomから値を取得する
    const text = get(itemState);

    // 加工した値を返却
    return text;
  },
});
