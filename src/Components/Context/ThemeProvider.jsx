import React, { createContext, useContext, useReducer } from 'react'
const ThemeContext = createContext();
const ThemeContextDispatcher = createContext();
const initialTheme = {
  darkMode: false,
}
const reducer = (state, action) => {
  const cloneState = { ...state };
  switch (action.type) {
    case 'Theme':
      cloneState.darkMode = !cloneState.darkMode;
      return cloneState;
    default:
      return state;
  }
}
const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useReducer(reducer, initialTheme);
  return (
    <ThemeContext.Provider value={Theme}>
      <ThemeContextDispatcher.Provider value={setTheme}>
        {children}
      </ThemeContextDispatcher.Provider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
export const useTheme = () => useContext(ThemeContext);
export const useThemeAction = () => useContext(ThemeContextDispatcher);