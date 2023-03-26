import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import style from './Content.module.scss';
// import faker from 'faker';
import { Doughnut, Line } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, } from "chart.js";
import { HiPlusSm, HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { TfiMoreAlt } from 'react-icons/tfi';
import TransactionList from '../TransactionList/TransactionList';
import WithActive from '../HOC/WithActive';
import { useTheme, useThemeAction } from '../Context/ThemeProvider';
import NewTransaction from '../NewTransition/NewTransaction';
Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: '',// hiden chart title
      position: 'left',
    },
    tooltip: {
      enabled: true,
      intersect: false,
      mode: 'nearest',
      yAlign: 'bottom',
      titleColor: '#3B3B61',
      bodyColor: '#3B3B61',
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return {
            backgroundColor: '#625BC9',
          }
        },
      },
      backgroundColor: 'rgb(255,255,255)',
    },
    title: {
      // display: '',
      fontFamily: 'Source Sans Pro',
      fontSize: 15,
      color: '#3B3B61',
      display: true,// hiden chart title
      text: 'Daily Analytics',
      position: 'top',
      align: 'start',
      padding: {
        top: 15,
        bottom: 30,
      }
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const Linedata = {
  labels,
  datasets: [
    {
      fill: true,
      label: '',
      data: [200, 600, 180, 200, 450, 500, 370],
      // data: labels.map(() => faker.random.number({ min: 0, max: 1000 })),
      // labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#625BC9',
      backgroundColor: '#625bc917',
      pointBackgroundColor: '#FFF',
      pointRadius: 4,
      pointHoverRadius: 4
    },
  ],
};
// const data = {
//   datasets: [
//     {
//       data: [50, 35, 100],
//       backgroundColor: [
//         "#625BC9",
//         "#21CC9E",
//         // '#EFF4F8',
//         '#A9B0C5'
//       ],
//       display: true,
//       // borderColor: '#F7F0F5',
//     }
//   ]
// };
const Content = () => {
  const [transaction, setTransaction] = useState(false);
  const themeStatus = useTheme();
  const Dispatch = useThemeAction();
  useEffect(() => {
    transaction ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [transaction]);
  const changeThemeHandler = () => {
    Dispatch({ type: 'Theme' })
  }
  const newTransactionHandler = () => {
    setTransaction(!transaction);
    console.log(transaction);
  }
  const chartMode = themeStatus.darkMode ? '#A9B0C5' : '#EFF4F8';
  return (
    <main className={`Content ${themeStatus.darkMode ? 'DarkTheme' : ''}`}>
      <SearchBar isDark={themeStatus.darkMode} onClickHandler={changeThemeHandler} />
      {/* welcome section */}
      <section className={style.WellcomeMassage}>
        <div className={style.TextInfo}>
          <h3>hi,dariush bakhtvar</h3>
          <p>welcome back to budget</p>
        </div>
        <button className={style.newBudgetBtn} onClick={newTransactionHandler}>
          <span>New Transaction</span>
          <span><HiPlusSm /></span>
        </button>
        {
          transaction && <NewTransaction />
        }
      </section>
      {/* Transanction Detail and chanrt */}
      <section className={style.TransactionWrapper}>
        <section className={style.TotalTransanction}>
          <section className={style.TransactionBox}>
            <div className={`${style.totalBudget} ${themeStatus.darkMode ? style.total_dark : style.total_light}`}>
              <div className={style.totalBudgetInfo}>
                <div className={style.totalBudgetDetail}>
                  <p className={`${style.IncomeText} ${themeStatus.darkMode ? style.Bg_Dark : style.Bg_Light}`}>Total Income</p>
                  <h2>545472</h2>
                  <p>increase compeared to last Week</p>
                </div>
                <span className={`${themeStatus.darkMode ? style.Bg_Dark : style.Bg_Light}`}><FiArrowUpRight /></span>
              </div>
              <button className={`${style.Btn_BgTranparent} ${themeStatus.darkMode ? style.br_dark : style.br_light}`}>
                <span>See Details</span>
                <span><HiOutlineChevronDoubleRight /></span>
              </button>
            </div>
            <div className={`${style.totalBudget} ${themeStatus.darkMode ? style.total_dark : style.total_light}`}>
              <div className={style.totalBudgetInfo}>
                <div className={style.totalBudgetDetail}>
                  <p className={`${style.ExpenseText} ${themeStatus.darkMode ? style.Bg_Dark : style.Bg_Expense_Light}`}>Total Expense</p>
                  <h2>545472</h2>
                  <p>increase compared to last Week</p>
                </div>
                <span className={`${style.colorRed} ${themeStatus.darkMode ? style.Bg_Dark : style.Bg_Expense_Light}`}><FiArrowDownRight /></span>
              </div>
              <button className={`${style.Btn_BgTranparent} ${themeStatus.darkMode ? style.br_dark : style.br_light}`}>
                <span>See Details</span>
                <span><HiOutlineChevronDoubleRight /></span>
              </button>
            </div>
            <div className={`${style.totalBudget} ${themeStatus.darkMode ? style.total_dark : style.total_light}`}>
              <div className={style.totalBudgetInfo}>
                <div className={style.totalBudgetDetail}>
                  <p>Total Money</p>
                  <h2>545472</h2>
                  <p>increase compeared to last Week</p>
                </div>
                <span className={`${themeStatus.darkMode ? style.Bg_Dark : style.Bg_Light}`}><FiArrowUpRight /></span>
              </div>
              <button>
                <span>See Details</span>
                <span><HiOutlineChevronDoubleRight /></span>
              </button>
            </div>
          </section>
          <section className={style.TransactionCharts}>
            <div className={`${style.DetailHistogram} ${themeStatus.darkMode ? style.total_dark : style.total_light}`}>
              <Line options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: '',// hiden chart title
                    position: 'left',
                  },
                  tooltip: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    yAlign: 'bottom',
                    titleColor: '#3B3B61',
                    bodyColor: '#3B3B61',
                    callbacks: {
                      labelColor: function (tooltipItem, chart) {
                        return {
                          backgroundColor: '#625BC9',
                        }
                      },
                    },
                    backgroundColor: 'rgb(255,255,255)',
                  },
                  title: {
                    // display: '',
                    fontFamily: 'Source Sans Pro',
                    fontSize: 14,
                    color: themeStatus.darkMode ? '#A9B0C5' : '#3B3B61',
                    display: true,// hiden chart title
                    text: 'Daily Analytics',
                    position: 'top',
                    align: 'start',
                    padding: {
                      top: 15,
                      bottom: 30,
                    }
                  },
                  borderColor: '#fff',
                },
              }} data={Linedata} />
            </div>
            <div className={`${style.totalChart} ${themeStatus.darkMode ? style.total_dark : style.total_light}`}>
              <Doughnut
                data={{
                  datasets: [
                    {
                      data: [50, 35, 100],
                      backgroundColor: [
                        "#625BC9",
                        "#21CC9E",
                        chartMode,
                      ],
                      display: true,
                      borderColor: '#F7F0F5',
                    }
                  ]
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false
                    },
                    tooltip: {
                      enabled: false
                    }
                  },
                  rotation: -90,
                  circumference: 180,
                  cutout: "60%",
                  maintainAspectRatio: true,
                  responsive: true
                }}
              />
              <div className={style.totalChartHeader}>
                <p className={`${themeStatus.darkMode ? style.Light_text : style.Dark_text}`}>Total Chart</p>
                <span>
                  <TfiMoreAlt />
                </span>
              </div>
              <div className={style.totalChartInfo}>
                <p>Total Budget</p>
                <p className={`${themeStatus.darkMode ? style.Light_text : style.Dark_text}`}>54589</p>
              </div>
              <div className={style.totalChartPrice}>
                <div>
                  <span>income</span>
                  <p>1500</p>
                </div>
                <div>
                  <span>expence</span>
                  <p>2700</p>
                </div>
                <div>
                  <span>Total</span>
                  <p>1000</p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <TransactionList />
      </section>
    </main>
  )
}

export default WithActive(Content);