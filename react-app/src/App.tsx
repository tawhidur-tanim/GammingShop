import { useState } from "react";
import { Alert } from "./Components/Alert";
import ListGroup from "./Components/ListGroup/ListGroup";
import { Button } from "./Components/Button/Button";

function App() {
  const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
  const onClick = (item: string) => console.log(item);
  const [alertVisible, setAlertvisibility] = useState(false);

  return (
    <div>
      <ListGroup items={cities} heading="List of Cities" onClick={onClick} />
      {alertVisible && (
        <Alert onClose={() => setAlertvisibility(false)}>Test Alert</Alert>
      )}
      <Button onClick={() => setAlertvisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
