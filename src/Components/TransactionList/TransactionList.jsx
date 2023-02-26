import React from 'react'
import style from './TransactionList.module.scss';
import { IoFilterOutline } from 'react-icons/io5';
import Transaction from '../Transaction/Transaction';
import { useTheme } from '../Context/ThemeProvider';
const TransactionList = () => {
  const themeStatus = useTheme();
  return (
    <section className={style.TransactionList}>
      <div className={style.TransactionListTitle}>
        <h4>Transaction List</h4>
        <span>
          <IoFilterOutline />
        </span>
      </div>
      <div className={style.TransactionOrder}>
        <ul>
          <li>Transaction</li>
          <li>Date</li>
          <li>Quantity</li>
          <li>Status</li>
          <li>Totla</li>
          <li>Manage</li>
        </ul>
      </div>
      <div className={`${style.TransactionWrapper} ${themeStatus.darkMode ? style.scroll_Dark : style.scroll_Light}`}>
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
    </section>
  )
}

export default TransactionList