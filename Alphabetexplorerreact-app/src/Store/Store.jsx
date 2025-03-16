import { configureStore } from "@reduxjs/toolkit";
import animalReducer from '../Animalslice'
const store = configureStore({
    reducer: {
      animal: animalReducer,
    },
  });
  
  export default store;