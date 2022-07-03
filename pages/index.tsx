import {
  useState,
  FC,
  MouseEvent,
  ChangeEvent,
  KeyboardEvent,
  VFC,
} from "react";
const getKey = () => Math.random().toString(32).substring(2);

type todoItem = {
  key: string;
  text: string;
  done: boolean;
};

type FilterProps = {
  value: string;
  onChange: (key: string) => void;
};

const Filter: FC<FilterProps> = props => {
  const [checkedList, setCheckedList] = useState<boolean[]>([
    true,
    false,
    false,
  ]);
  const handleClick = (key: string, e: MouseEvent<HTMLAnchorElement>) => {
    let i: number = -1,
      j: number = -1;
    i = checkedList.indexOf(true);
    if (key === "ALL") j = 0;
    if (key === "TODO") j = 1;
    if (key === "DONE") j = 2;
    setCheckedList(
      checkedList.map((_: boolean, index: number) => {
        if (index == i) {
          return false;
        } else if (index === j) {
          return true;
        } else return false;
      })
    );

    e.preventDefault();
    props.onChange(key);
  };

  const clickedClass = "inline-block p-4 bg-violet-700";
  const notClickedClass =
    "inline-block  border-b-2 border-transparent p-4 hover:border-violet-300 hover:text-violet-600 dark:hover:text-violet-300";

  return (
    <div className="mx-auto my-8 w-1/2 rounded-2xl border-b border-violet-200 bg-violet-500 dark:border-gray-700">
      <ul
        className="-mb-px flex flex-wrap text-center text-sm font-medium"
        id="myTab"
      >
        <li className="role=presentation mr-2 ml-5">
          <a
            className={checkedList[0] ? clickedClass : notClickedClass}
            id="dashboard-tab"
            type="button"
            role="tab"
            onClick={handleClick.bind(null, "ALL")}
          >
            全て
          </a>
        </li>
        <li className="mr-2" role="presentation">
          <a
            className={checkedList[1] ? clickedClass : notClickedClass}
            id="dashboard-tab"
            type="button"
            role="tab"
            onClick={handleClick.bind(null, "TODO")}
          >
            途中
          </a>
        </li>
        <li className="mr-2" role="presentation">
          <a
            className={checkedList[2] ? clickedClass : notClickedClass}
            id="settings-tab"
            type="button"
            role="tab"
            onClick={handleClick.bind(null, "DONE")}
          >
            完了
          </a>
        </li>
      </ul>
    </div>
  );
};

type TodoItemProps = {
  item: todoItem;
  onCheck: (checked: todoItem) => void;
};
const TodoItem: VFC<TodoItemProps> = props => {
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
type InputProps = {
  onAdd: (text: string) => void;
};
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
const Home = () => {
  const [items, setItems] = useState<todoItem[]>([]);
  const [filters, setFilter] = useState("ALL");

  const handleAdd = (text: string) => {
    setItems([...items, { key: getKey(), text: text, done: false }]);
  };

  const handleFilterChange = (value: string) => setFilter(value);

  const displayItems = items.filter((item: todoItem) => {
    if (filters === "ALL") return true;
    if (filters === "TODO") return !item.done;
    if (filters === "DONE") return item.done;
  });
  const handleCheck = (checked: todoItem) => {
    const newItems = items.map((item: todoItem) => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div className="text-center">
      <div className="m-10 p-6 font-mono text-2xl">- TODO LIST -</div>

      <Filter value={filters} onChange={handleFilterChange} />
      <Input onAdd={handleAdd} />
      <div
        className={`mx-auto w-1/2 divide-y ${
          displayItems.length > 0 ? "divide-blue-200" : ""
        } rounded-md border-2 border-violet-300 bg-purple-50 p-5`}
      >
        <p>項目</p>
        {displayItems.length === 0 ? (
          filters !== "ALL" ? (
            <p className="m-5 pt-4">nothing</p>
          ) : null
        ) : null}
        {displayItems.map((item: todoItem) => (
          <TodoItem key={item.key} item={item} onCheck={handleCheck} />
        ))}
      </div>
      <div className="mt-5 ">{displayItems.length} items</div>
    </div>
  );
};

export default Home;
