import { useEffect, useState } from "react";
import TodoItem from "../components/todoItem/index";
import Input from "../components/input/Index";
import Filter from "../components/filter/Index";
import { firebaseApp, firestore } from "../plugins/firebase";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useRecoilState } from "recoil";
import { itemState } from "../atoms/CenterAtom";

const getKey = () => Math.random().toString(32).substring(2);

type todoItem = {
  key: string;
  text: string;
  done: boolean;
};

const Home = () => {
  const [items, setItems] = useState<todoItem[]>([]);
  const [filters, setFilter] = useState("ALL");
  const [itemAtom, setItemAtom] = useRecoilState(itemState);

  useEffect(() => {
    const querySnapshot = getDocs(collection(firestore, "item"));
  });

  const handleAdd = async (text: string) => {
    setItems([...items, { key: getKey(), text: text, done: false }]);
    setItemAtom(text);
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
