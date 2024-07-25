import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import i18n from '../../i18n'
import { defaultThemeLanguage, IThemeLanguage } from '../../models/reducers/themeLanguage.model'

const initialState: IThemeLanguage = defaultThemeLanguage

export const themeLanguageSlice = createSlice({
  name: 'themeLanguage',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    },
    setLanguge: (state, action: PayloadAction<string>) => {
      state.language = action.payload
      i18n.changeLanguage(action.payload)
    },
  },
})

export const { setTheme, setLanguge } = themeLanguageSlice.actions

export default themeLanguageSlice.reducer
