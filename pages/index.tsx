import { useState, FC, MouseEvent, ChangeEvent, KeyboardEvent } from "react";
const getKey = () => Math.random().toString(32).substring(2);

type todoItem = {
  key: string;
  text: string;
  done: boolean;
};

const Filter = (value: any, onChange: any) => {
  const handleClick = (key: any, e: any) => {
    e.preventDefault();
    onChange(key);
  };

  return (
    <div className="mt-10 mb-8 space-x-4">
      <a href="#" onClick={handleClick.bind(null, "ALL")}>
        All
      </a>
      <a href="#" onClick={handleClick.bind(null, "TODO")}>
        ToDo
      </a>
      <a href="#" onClick={handleClick.bind(null, "DONE")}>
        Done
      </a>
    </div>
  );
};
const TodoItem = (item: any) => {
  const handleChange = () => {};
  return (
    <label className="block py-4 text-left">
      <input
        className="border- h-5 w-5 align-middle"
        type="checkbox"
        checked={item.done}
        onChange={handleChange}
      />
      <span className="text-lg">&nbsp;{item.text}</span>
    </label>
  );
};

const Input = (onAdd: any) => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      onAdd(text);
      setText("");
    }
  };
  return (
    <div>
      <input
        className="rounded-lg border-x-4 border-violet-300 p-5 opacity-75 "
        type="text"
        placeholder="reactを勉強する"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
const Home: FC = () => {
  const [items, setItems] = useState<any>([]);
  const [filters, setFilter] = useState("ALL");

  const handleAdd = (text: string) => {
    setItems([...items, { key: getKey(), text: text, done: false }]);
  };

  const handleFilterChange: any = (value: string) => setFilter(value);

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
      <div className="m-10 rounded-lg bg-violet-100 p-6 opacity-40 shadow-lg shadow-white">
        TODO LIST
      </div>
      <Input onAdd={handleAdd} />
      <Filter onChange={handleFilterChange} value={filters} />
      <div className="mx-auto w-80 divide-y divide-blue-200 rounded-md border-2 border-blue-300 bg-purple-50 p-5">
        <p>項目</p>
        {displayItems.map((i: todoItem) => (
          <TodoItem itemp={i} />
        ))}
      </div>
      <div className="mt-5 ">{displayItems.length} items</div>
    </div>
  );
};

export default Home;
