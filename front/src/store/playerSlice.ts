import { createSlice } from "@reduxjs/toolkit";

interface PlayerState {
  loading: boolean,
  value: any, // 일단 any 로 선언
  error: null | string
}
const initialState: PlayerState = {
  loading: false,
  value: [],
  error: null,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
  
  },
  extraReducers: {

  },
})


export default playerSlice.reducer