import ListGroup from "./ListGroup";

function App() {
  const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

  return (
    <div>
      <ListGroup items={cities} heading="List of Cities" />
    </div>
  );
}

export default App;
