import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { HiMoon, HiSun } from 'react-icons/hi'
import style from './search.module.scss';
const SearchBar = ({ isDark, onClickHandler }) => {
  // const testHandler = () => {
  //   console.log(isDark);
  // }
  return (
    <section className={style.SearchBar}>
      <div className={style.DarkMode}>
        <div className={`${style.SwitchBtn} ${isDark ? style.ActiveDarkMode : ''}`} onClick={() => onClickHandler()}>
          <span><HiMoon /></span>
          <span><HiSun /></span>
        </div>
      </div>
      <div className={style.Notification}>
        <span></span>
        <span><IoMdNotificationsOutline /></span>
      </div>
      <form action="#">
        <div className={style.SearchWrapper}>
          <input type="text" placeholder='search or type keyworad' />
          <span><RiSearchLine /></span>
        </div>
      </form>
    </section>
  )
}

export default SearchBar