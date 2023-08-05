import { MouseEvent, useState } from "react";
interface props {
  items: string[];
  heading: string;
  onClick: (item: string) => void;
}

function ListGroup({ items, heading, onClick }: props) {
  const listOnClick = (index: number) => setSelectedIndex(index);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1> {heading}</h1>
      {items.length == 0 && "No Items Found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              listOnClick(index);
              onClick(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
