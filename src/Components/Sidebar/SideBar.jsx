import React from 'react'
import style from './SideBar.module.scss';
import { RxDashboard } from 'react-icons/rx';
import { IoCardOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiPieChartAlt2, BiTransferAlt } from 'react-icons/bi';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { FiPenTool } from 'react-icons/fi';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import WithActive from '../HOC/WithActive';
const SideBar = ({ isToggle, setIsToggle }) => {
  // const ToggleClickHandler = () => {
  //   setIsToggle();
  // }
  return (
    <aside className={isToggle ? 'SidebarCollapsed' : 'Sidebar'}>
      <div className={style.Toggle} onClick={() => setIsToggle()}>
        {
          isToggle ? <MdChevronRight /> : <MdChevronLeft />
        }
      </div>
      <div className={`${style.SideBarLogo} ${isToggle ? style.SideBarLogoCollapse : ''}`}>
        <img src={require('../../Asset/img/budget.png')} alt="SidebarLogo" />
        <p>Budget Saver</p>
      </div>
      <ul className={`${style.sidebarMenu} ${isToggle ? style.fadeMenuTitle : ''}`}>
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
            <span> Transaction List</span>
            <span className={`${style.badge} ${isToggle ? style.fadeBadge : ''}`}>2</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span><HiOutlineEnvelope /></span>
            <span>Message</span>
            <span className={`${style.badge} ${isToggle ? style.fadeBadge : ''}`}>4</span>
          </a>
        </li>
      </ul>
      <ul className={`${style.sidbarMangeMenu} ${isToggle ? style.fadeMenuMangeTitle : ''}`}>
        <p>Account</p>
        <li>
          <a href="/#">
            <span><AiOutlineSetting /></span>
            <span>Setting</span>
            <span className={`${style.badge} ${isToggle ? style.fadeBadge : ''}`}>2</span>
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

export default WithActive(SideBar)
