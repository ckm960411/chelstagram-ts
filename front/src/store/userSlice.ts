import { createSlice } from "@reduxjs/toolkit";

interface userState {
  loading: boolean,
  myInfo: any, // 일단 any 로 선언
  error: null | string
}
const initialState: userState = {
  loading: false,
  myInfo: [],
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    closeError: state => {
      state.error = null
    },
  },
  extraReducers: {

  },
})

export const { closeError } = userSlice.actions

export default userSlice.reducer