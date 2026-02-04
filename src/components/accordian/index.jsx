import { useState } from "react";
import { content } from "./content";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelction(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <div className=" ">
      {content.map((contentList) => (
        <li
          className="text-4xl bg-amber-500 list-none border-2 border-solid m-2"
          key={content.id}
        >
          <div onClick={() => handleSingleSelction(contentList.id)}>
            {contentList.title}
            <span className="p-4 cursor-pointer flex justify-end">+</span>
          </div>
          <div>
            {selected === contentList.id ? <div>{contentList.body}</div> : null}
          </div>
        </li>
      ))}
    </div>
  );
}
