import React, { useState } from "react";
import { Button } from "./Button/Button";
import { produce } from "immer";

const StateManagement = () => {
  const [person, setPerson] = useState({
    firstName: "Tawhidur",
    lastName: "Rahman",
    contact: {
      address: {
        street: "West rajabazar",
      },
      phone: "018xxxxx5",
    },
  });

  const [listOfBugs, setListOfBugs] = useState([
    { name: "bug-1", status: "unfixed" },
    { name: "bug-2", status: "unfixed" },
    { name: "bug-3", status: "unfixed" },
    { name: "bug-4", status: "unfixed" },
  ]);

  const onClick = () => {
    setPerson({
      ...person,
      lastName: "Tanim",
      contact: {
        ...person.contact,
        address: { ...person.contact.address, street: "00000000000" },
      },
    });

    // setListOfBugs(listOfBugs.filter((bug) => bug.name == "bug-1"));

    setListOfBugs(
      produce((draft) => {
        let bug = draft.find((x) => x.name == "bug-4");
        if (bug) {
          bug.status = "fixed";
        }
      })
    );
  };

  return (
    <>
      <p>{JSON.stringify(person)}</p>
      <p>{JSON.stringify(listOfBugs)}</p>

      <Button onClick={onClick}>Change State</Button>
    </>
  );
};

export default StateManagement;
