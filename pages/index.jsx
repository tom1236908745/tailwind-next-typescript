import { useState } from "react";

const getKey = () => Math.random().toString(32).substring(2);
const Filter = ({ value, onChange }) => {
  const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };

  return (
    <div>
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
const TodoItem = ({ item, onCheck }) => {
  const handleChange = () => {
    onCheck(item);
  };
  return (
    <label>
      <input type="checkbox" checked={item.done} onChange={handleChange} />
      <span>{item.text}</span>
    </label>
  );
};

const Input = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChange = e => setText(e.target.value);

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      onAdd(text);
      setText("");
    }
  };
  return (
    <div>
      <input
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
  const [items, setItems] = useState([]);
  const [filters, setFilter] = useState("ALL");

  const handleAdd = text => {
    setItems([...items, { key: getKey(), text, done: false }]);
  };

  const handleFilterChange = value => setFilter(value);

  const displayItems = items.filter(item => {
    if (filters === "ALL") return true;
    if (filters === "TODO") return !item.done;
    if (filters === "DONE") return item.done;
  });
  const handleCheck = checked => {
    const newItems = items.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div className="text-center">
      <div className="shadow-lg p-6 m-10 rounded-lg bg-violet-100 shadow-white opacity-40">
        TODO LIST
      </div>
      <Input onAdd={handleAdd} />
      <Filter onChange={handleFilterChange} value={filters} />
      {displayItems.map(item => (
        <TodoItem key={item.text} item={item} onCheck={handleCheck} />
      ))}
      <div>{displayItems.length} items</div>
    </div>
  );
};

export default Home;
