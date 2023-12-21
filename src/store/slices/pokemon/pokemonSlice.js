import { createSlice } from '@reduxjs/toolkit'

export const PokemonSlice = createSlice({
  name: 'Pokemon',
  initialState : {
    page : 0,
    pokemons: [],
    isLoading: false
  },
  reducers: {
    startLoadingPokemons : ( state ) => {
        state.isLoading = true
    },
    setPokemons : ( state, action ) => {
      state.isLoading = false,
      state.pokemons = action.payload.pokemons
      state.page = action.payload.page
    }
  }
})

// export const {} = PokemonSlice.actions
export const { startLoadingPokemons, setPokemons } = PokemonSlice.actions
