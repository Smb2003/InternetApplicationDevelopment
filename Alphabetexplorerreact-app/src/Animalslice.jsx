import { createSlice } from "@reduxjs/toolkit";

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

export const animalSlice = createSlice({
  name: "animal",
  initialState: {
    letter: "",
    animalList: [],
    message: "",
  },
  reducers: {
    setLetter: (state, action) => {
      state.letter = action.payload.toUpperCase();
    },
    searchAnimals: (state) => {
      if (animals[state.letter]) {
        state.animalList = animals[state.letter];
        state.message = "";
      } else {
        state.animalList = [];
        state.message = "No animals found for this letter.";
      }
    },
  },
});
export default animalSlice.reducer;
export const { setLetter, searchAnimals } = animalSlice.actions;

