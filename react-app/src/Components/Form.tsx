import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const [person, setPerson] = useState({ name: "", age: "" });

  return (
    <form onSubmit={onFormSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.currentTarget.value })
          }
          id="name"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          onChange={(event) =>
            setPerson({ ...person, age: event.currentTarget.value })
          }
          value={person.age}
          type="number"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
