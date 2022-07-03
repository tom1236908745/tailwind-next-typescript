import { useState, FC, ChangeEvent, KeyboardEvent } from "react";
import { InputProps } from "./type";

const Input: FC<InputProps> = props => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.onAdd(text);
      setText("");
    }
  };
  return (
    <div className="flex flex-col">
      <span>タスクを入力</span>
      <input
        className="mx-auto my-7 w-72 rounded-lg border-x-4 border-violet-300 p-5 opacity-75 "
        type="text"
        placeholder="reactを勉強する"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
export default Input;
