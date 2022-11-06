import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "1m",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuits,
  reducers: {
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    deleteTuit(state, action) {
      const index = state.findIndex(tuit => tuit._id === action.payload);
      state.splice(index, 1);
    }
  }
})

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;