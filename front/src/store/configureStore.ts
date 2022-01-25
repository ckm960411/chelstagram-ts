import { configureStore } from "@reduxjs/toolkit";
import playersReducer from '@/store/playersSlice'
import playerReducer from '@/store/playerSlice'
import userReducer from '@/store/userSlice'

export default configureStore({
  reducer: {
    players: playersReducer,
    player: playerReducer,
    user: userReducer,
  }
})