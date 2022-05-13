import React from "react";

const Card = ({ dog, loading, updateDog }) => {
  return (
    <div>
      <img className="cutedog" src={dog.image} alt="dog" />
      <p className="dogname">{dog.breed.name}</p>
    </div>
  );
};

export default Card;
