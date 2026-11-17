import React, { useState } from "react";

const API_URL = "http://localhost:3001/toys";

function ToyForm({ onAddToy }) {
  // Controlled state for form inputs
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newToy = {
      name,
      image: imageUrl,
      likes: 0, // Initial likes set to 0 per lab instructions
    };

    // Step 3 (POST): Persist new toy to backend
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((savedToy) => {
        onAddToy(savedToy);
        // Reset inputs after creation
        setName("");
        setImageUrl("");
      })
      .catch((error) => console.error("Error adding toy:", error));
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
