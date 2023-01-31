import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import style from './Content.module.scss';
// import faker from 'faker';
import { Doughnut, Line } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, } from "chart.js";
import { HiPlusSm, HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { TfiMoreAlt } from 'react-icons/tfi';
import TransactionList from '../TransactionList/TransactionList';
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
const Content = ({ isDark, onChangeTheme }) => {
  const data = {
    datasets: [
      {
        data: [50, 35, 100],
        backgroundColor: [
          "#625BC9",
          "#21CC9E",
          '#EFF4F8',
        ],
        display: true,
        borderColor: '#F7F0F5',
      }
    ]
  };

  return (
    <main className='Content'>
      <SearchBar isDark={isDark} onClickHandler={() => onChangeTheme()} />
      {/* welcome section */}
      <section className={style.WellcomeMassage}>
        <div className={style.TextInfo}>
          <h3>hi,dariush bakhtvar</h3>
          <p>welcome back to budget</p>
        </div>
        <button className={style.newBudgetBtn}>
          <span>New Transaction</span>
          <span><HiPlusSm /></span>
        </button>
      </section>
      {/* Transanction Detail and chanrt */}
      <section className={style.TotalTransanction}>
        <section className={style.TransactionBox}>
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
        </section>
        <section className={style.TransactionCharts}>
          <div className={style.DetailHistogram}>
            <Line options={options} data={Linedata} />
          </div>
          <div className={style.totoalChart}>
            <Doughnut
              data={data}
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
              <p>Total Chart</p>
              <span>
                <TfiMoreAlt />
              </span>
            </div>
            <div className={style.totoalChartInfo}>
              <p>Total Budget</p>
              <p>54589</p>
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
        <TransactionList />
      </section>
    </main>
  )
}

export default Content