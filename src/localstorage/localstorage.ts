import { defaultThemeLanguage } from '../models/reducers/themeLanguage.model'

const saveTheme = (name: string, key = 'theme') => {
  localStorage.setItem(key, name)
}

const getTheme = (key = 'theme') => {
  const theme = localStorage.getItem(key)
  if (theme) {
    return theme
  } else {
    return defaultThemeLanguage.theme
  }
}

const saveLanguage = (name: string, key = 'lng') => {
  localStorage.setItem(key, name)
}

const getLanguage = (key = 'lng') => {
  const lng = localStorage.getItem(key)
  if (lng) {
    return lng
  } else {
    return defaultThemeLanguage.language
  }
}

const getAboutProduct = (key = 'aboutProduct') => {
  const aboutProduct = localStorage.getItem(key)
  if (!aboutProduct) {
    return
  }
  return JSON.parse(aboutProduct)
}

const setAboutProduct = (aboutProduct: any, key = 'aboutProduct') => {
  localStorage.setItem(key, aboutProduct)
}

export { saveLanguage, getLanguage, getAboutProduct, setAboutProduct, saveTheme, getTheme }
