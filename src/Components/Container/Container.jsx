import React from 'react';
import Navbar from '../Navbar/Navbar';
import SideBar from '../Sidebar/SideBar';
import Content from '../Content/Content';
import { useTheme } from '../Context/ThemeProvider';
import '../../Asset/style/App.scss';
import WithToggle from '../HOC/WithActive';
const Container = ({ isToggle, setIsToggle }) => {
  const ThemeStatus = useTheme();
  const setToggleHandler = () => {
    setIsToggle();
  }
  return (
    <div className={`container ${ThemeStatus.darkMode ? 'container-Dark' : 'container-Light'}`}>
      <Navbar />
      <Content />
      <SideBar isToggled={isToggle} setIsToggled={() => setToggleHandler()} />
    </div>
  )
}

export default WithToggle(Container);
