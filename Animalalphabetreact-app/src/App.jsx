import React, { useState } from "react";
import "./AnimalExplorer.css";

const animals = {
  A: ["Antelope", "Alligator", "Armadillo"],
  B: ["Bear", "Bison", "Baboon"],
  C: ["Cat", "Cheetah", "Cougar"],
  D: ["Dog", "Deer", "Dolphin"],
  E: ["Elephant", "Eagle", "Echidna"],
  F: ["Fox", "Frog", "Falcon"],
  G: ["Giraffe", "Goat", "Gorilla"],
  H: ["Horse", "Hawk", "Hamster"],
  I: ["Iguana", "Indian Cobra"],
  J: ["Jaguar", "Jackal", "Jellyfish"],
  K: ["Kangaroo", "Koala", "Kingfisher"],
  L: ["Lion", "Leopard", "Lemur"],
  M: ["Monkey", "Moose", "Meerkat"],
  N: ["Newt", "Nightingale", "Numbat"],
  O: ["Ostrich", "Otter", "Ocelot"],
  P: ["Panda", "Penguin", "Panther"],
  Q: ["Quokka", "Quail"],
  R: ["Rabbit", "Raccoon", "Rhinoceros"],
  S: ["Snake", "Sheep", "Swan"],
  T: ["Tiger", "Turtle", "Toucan"],
  U: ["Urial", "Uakari"],
  V: ["Vulture", "Viper"],
  W: ["Wolf", "Walrus", "Whale"],
  X: ["X-ray Tetra"],
  Y: ["Yak", "Yellowfin Tuna"],
  Z: ["Zebra", "Zebu"]
};

const AnimalExplorer = () => {
  const [letter, setLetter] = useState("");
  const [animalList, setAnimalList] = useState([]);
  const [message, setMessage] = useState("");

  const handleSearch = () => {
    const upperLetter = letter.toUpperCase();
    if (animals[upperLetter]) {
      setAnimalList(animals[upperLetter]);
      setMessage("");
    } else {
      setAnimalList([]);
      setMessage("No animals found for this letter.");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Animal Alphabet Explorer</h1>
        <input
          type="text"
          maxLength="1"
          placeholder="Enter a letter"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          className="input-box"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
        <div className="result">
          {message ? (
            <p className="error">{message}</p>
          ) : (
            <p className="animals">{animalList.join(", ")}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimalExplorer;
