import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import { Controller } from "react-hook-form";

interface User {
  id: string;
  name: string;
  email?: string;
}

function App() {
  const [users, setusers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [spninner, setSpninner] = useState(false);

  useEffect(() => {
    const Controller = new AbortController();

    setSpninner(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: Controller.signal,
      })
      .then(({ data }) => {
        setusers(data);
        setSpninner(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setError(error.message);
      });

    return () => Controller.abort();
  }, []);

  const onDelete = (user: User) => {
    const originalUsers = users;
    setusers(users.filter((u) => u.id != user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/xusers/" + user.id)
      .catch((err) => {
        setusers(originalUsers);
        setError(err.message);
      });
  };

  const onUpdate = (user: User) => {
    const originalUsers = users;
    setusers(
      users.map((u) => (u.id == user.id ? { ...u, name: u.name + "!" } : u))
    );

    axios
      .patch("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setusers(originalUsers);
        setError(err.message);
      });
  };

  const onCreate = () => {
    const user: User = { id: "0", name: "New User" };
    const originalUsers = users;
    setusers([...users, user]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", user)
      .catch((err) => {
        setusers(originalUsers);
        setError(err.message);
      });
  };

  return (
    <>
      {spninner && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}

      <button className="btn btn-primary mb-3" onClick={() => onCreate()}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}

            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => onUpdate(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
