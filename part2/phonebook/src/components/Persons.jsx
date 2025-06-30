import React from "react";

const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map((person) => (
        <>
          <p key={person.id}>
            {person.name} {person.number}
          </p>
          <button onClick={() => handleDelete(person.id)}>delete</button>
        </>
      ))}
    </div>
  );
};

export default Persons;
