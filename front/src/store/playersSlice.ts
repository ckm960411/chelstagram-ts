import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPlayersList = createAsyncThunk(
  "GET/LOAD_PLAYERS_LIST_REQUEST",
  async () => {
    const response = await axios.get('/players')
    return response.data
  } 
)

interface PlayersState {
  loading: boolean,
  value: any, // 일단 any 로 선언
  error: null | string
}

const initialState: PlayersState = {
  loading: false,
  value: [],
  error: null,
}

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers: {

  },
})

export default playersSlice.reducer