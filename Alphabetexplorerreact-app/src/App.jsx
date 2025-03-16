import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLetter, searchAnimals } from "../src/Animalslice";
import "./AnimalExplorer.css";

const App = () => {
  const dispatch = useDispatch();
  const { letter, animalList, message } = useSelector((state) => state.animal);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Animal Alphabet Explorer</h1>
        <input
          type="text"
          maxLength="1"
          placeholder="Enter a letter"
          value={letter}
          onChange={(e) => dispatch(setLetter(e.target.value))}
          className="input-box"
        />
        <button onClick={() => dispatch(searchAnimals())} className="search-button">
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

export default App;
