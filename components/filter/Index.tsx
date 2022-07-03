import { useState, FC, MouseEvent } from "react";
import { FilterProps } from "./type";
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
export default Filter;
