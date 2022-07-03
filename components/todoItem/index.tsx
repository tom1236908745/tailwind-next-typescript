import { FC } from "react";
import { TodoItemProps } from "./type";
const TodoItem: FC<TodoItemProps> = props => {
  const handleChange = () => {
    props.onCheck(props.item);
  };
  return (
    <label className="block py-4 text-left">
      <input
        className="border- h-5 w-5 align-middle"
        type="checkbox"
        checked={props.item.done}
        onChange={handleChange}
      />
      <span className="text-lg">&nbsp;{props.item.text}</span>
    </label>
  );
};
export default TodoItem;
