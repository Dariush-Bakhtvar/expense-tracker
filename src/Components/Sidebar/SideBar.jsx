import React from 'react'
import style from './SideBar.module.scss';
import { RxDashboard } from 'react-icons/rx';
import { IoCardOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiPieChartAlt2, BiTransferAlt } from 'react-icons/bi';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { FiPenTool } from 'react-icons/fi';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useTheme } from '../Context/ThemeProvider';
const SideBar = ({ isToggled, setIsToggled }) => {
  const themeStatus = useTheme();
  return (
    <aside className={`${isToggled ? `SidebarCollapsed` : 'Sidebar'} ${themeStatus.darkMode && 'DarkTheme'}`}>
      <div className={style.Toggle} onClick={() => setIsToggled()}>
        {
          isToggled ? <MdChevronRight /> : <MdChevronLeft />
        }
      </div>
      <div className={`${style.SideBarLogo} ${isToggled ? style.SideBarLogoCollapse : ''}`}>
        <img src={require('../../Asset/img/budget.png')} alt="SidebarLogo" />
        <p>Budget Saver</p>
      </div>
      <ul className={`${style.sidebarMenu} ${isToggled ? style.fadeMenuTitle : ''}`}>
        <li>
          <a href="/#">
            <span><RxDashboard /></span>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span><IoCardOutline /></span>
            <span>Budget</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span><BiPieChartAlt2 /></span>
            <span> Charts</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span><BiTransferAlt /></span>
            <span> Transaction</span>
            <span className={`${style.badge} ${isToggled ? style.fadeBadge : ''}`}>2</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span><HiOutlineEnvelope /></span>
            <span>Message</span>
            <span className={`${style.badge} ${isToggled ? style.fadeBadge : ''}`}>4</span>
          </a>
        </li>
      </ul>
      <ul className={`${style.sidbarMangeMenu} ${isToggled ? style.fadeMenuMangeTitle : ''} ${themeStatus.darkMode ? style.br_darkGray : style.br_lightGray}`}>
        <p>Account</p>
        <li>
          <a href="/#">
            <span><AiOutlineSetting /></span>
            <span>Setting</span>
            <span className={`${style.badge} ${isToggled ? style.fadeBadge : ''}`}>2</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span><FiPenTool /></span>
            <span>Themes</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span><IoHelpCircleOutline /></span>
            <span>Helps</span>
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default SideBar
