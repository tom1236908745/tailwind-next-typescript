import { todoItem } from "../../components/type";

export type TodoItemProps = {
  item: todoItem;
  onCheck: (checked: todoItem) => void;
};
