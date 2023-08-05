import { useState } from "react";
import { Alert } from "./Components/Alert";
import ListGroup from "./Components/ListGroup/ListGroup";
import { Button } from "./Components/Button/Button";
import { Like } from "./Components/Like/Like";
import Message from "./Components/Message";

function App() {
  const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
  const onClick = (item: string) => console.log(item);
  const [alertVisible, setAlertvisibility] = useState(false);

  return (
    <div>
      <ListGroup items={cities} heading="List of Cities" onClick={onClick} />
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertvisibility(false);
            console.log(alertVisible);
          }}
        >
          Test Alert
        </Alert>
      )}
      <Button onClick={() => setAlertvisibility(true)}>My Button</Button>

      <div>
        <Like onClick={() => console.log("Clicked")}></Like>
      </div>

      {/* <Message></Message> */}
    </div>
  );
}

export default App;
