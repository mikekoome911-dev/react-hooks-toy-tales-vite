import React from "react";

const API_URL = "http://localhost:3001/toys";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  // Step 4 (DELETE): Remove toy from backend and state
  function handleDeleteClick() {
    fetch(`${API_URL}/${toy.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          onDeleteToy(toy.id);
        }
      })
      .catch((error) => console.error("Error deleting toy:", error));
  }

  // Step 5 (PATCH): Increment likes on backend and update state in place
  function handleLikeClick() {
    const updatedLikes = toy.likes + 1;

    fetch(`${API_URL}/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: updatedLikes }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        onUpdateToy(updatedToy);
      })
      .catch((error) => console.error("Error updating likes:", error));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
