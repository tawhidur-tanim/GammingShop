let count = 0;

function Message() {
  console.log("message called", ++count);
  const name = "Tanim";

  if (name)
    return (
      <h1>
        Hello {name} {count}
      </h1>
    );
  return <h1>Hello World {count}</h1>;
}

export default Message;
