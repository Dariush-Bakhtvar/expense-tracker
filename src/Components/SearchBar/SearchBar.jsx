import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { HiMoon, HiSun } from 'react-icons/hi'
import style from './search.module.scss';
const SearchBar = ({ isDark, onClickHandler }) => {
  return (
    <section className={`${style.SearchBar} ${isDark ? style.br_gray : style.br_light}`}>
      <div className={`${isDark ? style.DarkMode : style.lightMode}`}>
        <div className={`${style.SwitchBtn} ${isDark ? style.ActiveDarkMode : ''}`} onClick={() => onClickHandler()}>
          <span><HiMoon /></span>
          <span><HiSun /></span>
        </div>
      </div>
      <div className={`${isDark ? style.Notification_Dark : style.Notification_light}`}>
        <span></span>
        <span><IoMdNotificationsOutline /></span>
      </div>
      <form action="#">
        <div className={style.SearchWrapper}>
          <input type="text" placeholder='search or type keyworad' className={`${isDark ? style.DarkTheme : ''}`} />
          <span><RiSearchLine /></span>
        </div>
      </form>
    </section>
  )
}

export default SearchBar