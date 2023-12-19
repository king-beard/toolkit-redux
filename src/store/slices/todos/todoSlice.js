import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {}
})

// export const {} = todoSlice.actions
export const todoReducer = todoSlice.reducer
