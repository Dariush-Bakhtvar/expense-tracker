import React from 'react';
import { HiOutlinePencilSquare, HiOutlineTrash } from 'react-icons/hi2'
import style from './transaction.module.scss';
import { useTheme } from '../Context/ThemeProvider';
const Transaction = () => {
  const themeStatus = useTheme();
  return (
    <div className={`${style.Transaction} ${themeStatus.darkMode ? style.br_darkGary : style.br_lightGray}`}>
      <ul>
        <li className={style.Detail}>
          <span>#123456</span>
          <span>Salary</span>
        </li>
        <li className={style.Date}>
          <span>10:30 AM</span>
          <span>10 October 2022</span>
        </li>
        <li>1500$</li>
        <li className={`${style.Status} ${style.income}`}>InCome</li>
        <li>35000$</li>
        <li className={style.MngTransaction}>
          <button><HiOutlinePencilSquare /></button>
          <button><HiOutlineTrash /></button>
        </li>
      </ul>
    </div>
  )
}

export default Transaction