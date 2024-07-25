import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { defaultLoadingBar, ILoadingBar } from '../../models/reducers/loadingbar.model'

const initialState: ILoadingBar = defaultLoadingBar

export const loadingBarSlice = createSlice({
  name: 'themeLanguage',
  initialState,
  reducers: {
    setLoadingBar: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload
      return state
    },
  },
})

export const { setLoadingBar } = loadingBarSlice.actions

export default loadingBarSlice.reducer
