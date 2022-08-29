import React, {useState} from "react";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { FcSalesPerformance } from "react-icons/fc";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineChat } from "react-icons/hi";
import { BsTag } from "react-icons/bs";
import {MdOutlineDashboardCustomize, MdStarBorder, MdOutlineEmail} from "react-icons/md";

 import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from "chart.js";
 ChartJS.register( Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler);
 
const Dashboard = () => {
  
  
  const [data, setData] = useState({
    labels: ["2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: ["Total Earning", "Total Tax"],
        data: [0, 7, 2, 8],
        
        // backgroundColor: [" rgb(5, 5, 102)", "#e1b12c"],
        borderColor: "rgb(5, 5, 102)",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

  return (
    <div className={styles.main}>
      <div className={styles.defaultContainer}>
        <div className={styles.dashboardDefault}>
          <h4 className={styles.default}>Default</h4>

          <Link
            to="/dashboard"
            className={`${styles.dashboardDefaultIcon} ${styles.defaultPara}`}
          >
            <MdOutlineDashboardCustomize className={styles.icon} />
          </Link>
          <p className={styles.defaultPara}>/Dashboard/</p>
          <p className={styles.defaultPara}>Default</p>
        </div>

        <div className={styles.defaultIcon}>
          <Link to="/calender">
            <AiOutlineCalendar className={styles.icon} />
          </Link>
          <Link to="/email-app">
            <MdOutlineEmail className={styles.icon} />
          </Link>
          <Link to="/chat">
            <HiOutlineChat className={styles.icon} />
          </Link>
          <MdStarBorder className={styles.starIcon} />
        </div>
      </div>

      <div className={styles.totalCardsContainer}>
        <div className={styles.totalInfoCard}>
          <span className={styles.totalInfo}>
            <p className={styles.priceTag}>$5789</p>
            <BsTag />
          </span>
          <p className={styles.totalPara}>Total Visits</p>
        </div>

        <div className={styles.totalInfoCard}>
          <span className={styles.totalInfo}>
            <p className={styles.priceTag}>$4986</p>
            <FcSalesPerformance />
          </span>
          <p className={styles.totalPara}>Total Sale</p>
        </div>

        <div className={styles.totalInfoCard}>
          <span className={styles.totalInfo}>
            <p className={styles.priceTag}>$8568</p>
            <BsTag />
          </span>
          <p className={styles.totalPara}>Total Value</p>
        </div>

        <div className={styles.totalInfoCard}>
          <span className={styles.totalInfo}>
            <p className={styles.priceTag}>$8568</p>
            <BsTag />
          </span>
          <p className={styles.totalPara}>Total Value</p>
        </div>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.valuation}>
          <h6>PRODUCTION VALUATION</h6>
          <Line data={data} />
        </div>
        {/* <div></div> */}

        <div className={styles.activityContainer}>
          <h5>ACTIVITY</h5>
          <span className={styles.activityInfo}>
            <div className={styles.activityIcon}>
              <MdOutlineEmail />
            </div>
            <p className={styles.activityTopic}>New Sale</p>
            <p className={styles.time}>Time</p>
          </span>
          <div className={styles.activityParagraph}>
            <div className={styles.activityLine}></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <span className={styles.activityInfo}>
            <div className={styles.activityIcon}>
              <MdOutlineEmail />
            </div>
            <p className={styles.activityTopic}>New Message</p>
            <p className={styles.time}>Time</p>
          </span>
          <div className={styles.activityParagraph}>
            <div className={styles.activityLine}></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <span className={styles.activityInfo}>
            <div className={styles.activityIcon}>
              <MdOutlineEmail />
            </div>
            <p className={styles.activityTopic}>New Report</p>
            <p className={styles.time}>Time</p>
          </span>
          <div className={styles.activityParagraph}>
            <div className={styles.activityLine}></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
            </p>
          </div>

          <span className={styles.activityInfo}>
            <div className={styles.activityIcon}>
              <MdOutlineEmail />
            </div>
            <p className={styles.activityTopic}>New Sale</p>
            <p className={styles.time}>Time</p>
          </span>
          <div className={styles.activityParagraph}>
            <div className={styles.activityLine}></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
