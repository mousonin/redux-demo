import { createSlice } from "@reduxjs/toolkit";
const photo = createSlice({
  name: "photos",
  initialState: [],
  reducers: {
    addPhoto: (state: any, action) => {
      state.push(action.payload);
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto } = actions;
export default reducer;
