import React from 'react';
import { HiOutlinePencilSquare, HiOutlineTrash } from 'react-icons/hi2'
import style from './transaction.module.scss';
const Transaction = () => {
  return (
    <div className={style.Transaction}>
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