import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import style from './Content.module.scss';
import { HiPlusSm, HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
const Content = ({ isDark, onChangeTheme }) => {
  return (
    <main className='Content'>
      <SearchBar isDark={isDark} onClickHandler={() => onChangeTheme()} />
      {/* welcome section */}
      <section className={style.WellcomeMassage}>
        <div className={style.TextInfo}>
          <h4>hi,dariush bakhtvar</h4>
          <p>welcome back to budget</p>
        </div>
        <button className={style.newBudgetBtn}>
          <span>New Transaction</span>
          <span><HiPlusSm /></span>
        </button>
      </section>
      <section className={style.TransactionChart}>
        <aside className={style.sideChart}>
          <div className={style.totoalBudget}>
            <div className={style.totoalBudgetInfo}>
              <div className={style.totoalBudgetDetail}>
                <p>Total Money</p>
                <h2>545472</h2>
                <p>increase compeared to last Week</p>
              </div>
              <span><FiArrowUpRight /></span>
            </div>
            <button>
              <span>See Details</span>
              <span><HiOutlineChevronDoubleRight /></span>
            </button>
          </div>
          <div className={style.totoalChart}>
            <p>test</p>
          </div>
        </aside>
        <div className={style.DetailChart}>
          <div className={style.DetailBudget}>
            {/* inCome section */}
            <div className={style.totoalBudget}>
              <div className={style.totoalBudgetInfo}>
                <div className={style.totoalBudgetDetail}>
                  <p className={style.IncomeText}>Total Income</p>
                  <h2>545472</h2>
                  <p>increase compeared to last Week</p>
                </div>
                <span><FiArrowUpRight /></span>
              </div>
              <button className={style.NoneBtnBg}>
                <span>See Details</span>
                <span><HiOutlineChevronDoubleRight /></span>
              </button>
            </div>
            {/* Expense section */}
            <div className={style.totoalBudget}>
              <div className={style.totoalBudgetInfo}>
                <div className={style.totoalBudgetDetail}>
                  <p className={style.ExpenseText}>Total Expense</p>
                  <h2>545472</h2>
                  <p>increase compared to last Week</p>
                </div>
                <span className={style.colorRed}><FiArrowDownRight /></span>
              </div>
              <button className={style.NoneBtnBg}>
                <span>See Details</span>
                <span><HiOutlineChevronDoubleRight /></span>
              </button>
            </div>
          </div>
          <div className={style.DetailHistogram}>
            <p>test</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Content