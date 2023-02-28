import React, { useState } from 'react'
import style from './Navbar.module.scss';
import { BiChevronDown } from 'react-icons/bi';
import { AiFillGithub, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
import { useTheme } from '../Context/ThemeProvider';
const Navbar = () => {
  const themeStatus = useTheme();
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    console.log(toggle);
    setToggle(!toggle);
  }
  return (
    <header className={`Navbar`}>
      <nav className={`${style.Navigation} ${themeStatus.darkMode && 'DarkTheme'}`}>
        <ul>
          <li>Transaction</li>
          <li>Scheduler</li>
          <li>Reports</li>
          {/* <li>Othres</li> */}
        </ul>
      </nav>
      <div className={`${style.Profile} ${themeStatus.darkMode && 'DarkTheme'}`}>
        <div className={style.ProfileBtnMenu} onClick={toggleHandler}>
          <img src={require('../../Asset/img/Dariush.jpg')} alt="Profile" />
          <span>Dariush Bakhtvar</span>
          <BiChevronDown />
        </div>
        {
          toggle && <ul className={`${style.SubMenu} ${themeStatus.darkMode && style.DarkTheme}`}>
            <li>
              <span><AiFillGithub /></span>
              <span> My Github</span>
            </li>
            <li>
              <span><AiOutlineSetting /></span>
              <span>Setting</span>
            </li>
            <li>
              <span><AiOutlineLogout /></span>
              <span>Log Out</span>
            </li>
          </ul>
        }
      </div>
    </header>
  )
}

export default Navbar