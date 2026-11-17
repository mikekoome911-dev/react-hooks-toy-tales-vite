import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API_URL = "http://localhost:3001/toys";

function App() {
  const [showForm, setShowForm] = useState(false);
  // Master state holding all toys fetched from the backend
  const [toys, setToys] = useState([]);

  // Step 2 (GET): Fetch all toys once when the application mounts
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.error("Error fetching toys:", error));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Step 3 (POST helper): Add a newly created toy to state
  function handleAddToy(newToy) {
    setToys((prevToys) => [...prevToys, newToy]);
  }

  // Step 4 (DELETE helper): Remove a donated toy from state by id
  function handleDeleteToy(deletedId) {
    setToys((prevToys) => prevToys.filter((toy) => toy.id !== deletedId));
  }

  // Step 5 (PATCH helper): Update a toy's likes while preserving list order
  function handleUpdateToy(updatedToy) {
    setToys((prevToys) =>
      prevToys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
    );
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;
