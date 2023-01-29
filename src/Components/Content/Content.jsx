import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import style from './Content.module.scss';
// import faker from 'faker';
import { Doughnut, Line } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, } from "chart.js";
import { HiPlusSm, HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: '',// hiden chart title
      position: 'left'
    },
    tooltip: {
      enabled: true,
      intersect: false,
      mode: 'nearest',
      yAlign: 'bottom',
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return {
            backgroundColor: '#625BC9',
          }
        },
      },
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    title: {
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
            <div
              style={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center"
              }}
            >
              <div>Text Here</div>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Content