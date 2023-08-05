import { MouseEvent } from "react";

function ListGroup() {
  const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

  const listOnClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1> List</h1>
      {cities.length == 0 && "No Cities Found"}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li className="list-group-item" key={city} onClick={listOnClick}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
