import React, { useState } from 'react'
import './Asset/style/App.scss';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import SideBar from './Components/Sidebar/SideBar';
import WithActive from './Components/HOC/WithActive';
const App = ({ isActive, setIsActive }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const DarkModeHandler = () => {
    setDarkMode(!isDarkMode);
  }
  const ToggleActiveHandler = () => {
    setIsActive();
  }
  return (
    <>
      <Navbar />
      <Content isDark={isDarkMode} onChangeTheme={() => DarkModeHandler()} isActived={isActive} />
      <SideBar isToggle={isActive} setIsToggle={() => ToggleActiveHandler()} />
    </>
  )
}

export default WithActive(App);