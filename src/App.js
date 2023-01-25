import React, { useState } from 'react'
import './Asset/style/App.scss';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const DarkModeHandler = () => {
    setDarkMode(!isDarkMode);
  }
  return (
    <>
      <Navbar />
      <Content isDark={isDarkMode} onChangeTheme={() => DarkModeHandler()} />
      <div className='Sidebar'>test</div>
    </>
  )
}

export default App