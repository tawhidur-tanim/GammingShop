import React, { FormEvent, useRef } from "react";

const Form = () => {
  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submitted");

    if (nameRef.current) {
      //   nameRef.current.value = "New Name";
      console.log(nameRef.current.value);
    }
  };

  const nameRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={onFormSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
