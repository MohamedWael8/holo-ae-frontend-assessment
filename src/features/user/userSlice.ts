import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  query: string;
  type: string;
  results: Array<any>;
}

// Define the initial state using that type
const initialState: UserState = {
  query: "",
  type: "",
  results: [],
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getQueryAndResults: (state) => state,
    addQueryAndResults: (state, action: PayloadAction<UserState>) => {
      state.query = action.payload.query;
      state.type = action.payload.type;
      state.results = action.payload.results;
    },
  },
});

export const { addQueryAndResults, getQueryAndResults } = userSlice.actions;

export default userSlice.reducer;
