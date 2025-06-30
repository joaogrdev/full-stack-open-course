import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import person from "./services/person";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [notification, setNotification] = useState({ tipo: "", mensagem: "" });

  useEffect(() => {
    person
      .getAll()
      .then((initialPersons) => setPersons(initialPersons))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const personExists = persons.find((person) => person.name === newName);

    if (personExists) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...personExists, number: newNumber };
        person
          .update(personExists.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
            setNotification({
              tipo: "sucesso",
              mensagem: `Updated ${returnedPerson.name}`,
            });
            setTimeout(() => {
              setNotification({ tipo: "", mensagem: "" });
            }, 3000);
          })
          .catch((error) => {
            console.log(error);
            setNotification({
              tipo: "erro",
              mensagem: `Information of ${personExists.name} has already been removed from server`,
            });
            setTimeout(() => {
              setNotification({ tipo: "", mensagem: "" });
            }, 3000);
          });
      }
      return;
    }

    person
      .create({ name: newName, number: newNumber })
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setNotification({
          tipo: "sucesso",
          mensagem: `Added ${returnedPerson.name}`,
        });
        setTimeout(() => {
          setNotification({ tipo: "", mensagem: "" });
        }, 3000);
      })
      .catch((error) => console.log(error));
  };

  const handleFilterName = (event) => {
    const filter = event.target.value;
    setPersons(
      persons.filter((person) => person.name.toLowerCase().includes(filter))
    );
  };

  const handleDelete = (id) => {
    if (
      window.confirm(
        `Delete ${persons.find((person) => person.id === id).name}`
      )
    ) {
      person
        .remove(id)
        .then(() => setPersons(persons.filter((person) => person.id !== id)))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter handleFilterName={handleFilterName} />
      <h2>add a new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} handleDelete={handleDelete} />
      ...
    </div>
  );
};

export default App;
