import { createAsyncThunk } from "@reduxjs/toolkit";
// import { collection, getDocs } from "firebase/firestore";
import MOVIES_SNAPSHOT from "../../data/movies.json";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (_: void, thunkAPI) => {
    try {
      // const moviesCollection = collection(db, "movies");
      // const moviesSnapshot = await getDocs(moviesCollection);
      // return moviesSnapshot.docs;
      return MOVIES_SNAPSHOT;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
