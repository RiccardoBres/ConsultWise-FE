import React from "react";
import { Doughnut } from "react-chartjs-2";
import CustomTitle from "../../../Atoms/CustomTitle";
import { useSelector } from "react-redux";
import { selectCompany } from "../../../../States/CompanyState";
import './Graphics.css';
import CustomParagraph from "../../../Atoms/CustomParagraph";

const CustomerRetentionChart = () => {
  const company = useSelector(selectCompany);

  // Retention Rate Chart Data
  const retentionRateData = {
    labels: ["Retention Rate", "Churn Rate"],
    datasets: [
      {
        data: [
          company[0]?.specificCompanyInfo.customerRetentionRate || 0,
          100 - (company[0]?.specificCompanyInfo.customerRetentionRate || 0),
        ],
        backgroundColor: ["#FF6384", "#9cb9fb"],
        hoverBackgroundColor: ["#98A8F8", "#36A2EB"],
      },
    ],
  };

  // Profit Margin Chart Data
  const profitMarginData = {
    labels: ["Profit Margin", "Expenses"],
    datasets: [
      {
        data: [
          company[0]?.specificCompanyInfo.profitMargin || 0,
          100 - (company[0]?.specificCompanyInfo.profitMargin || 0),
        ],
        backgroundColor: ["#FF6384", "#98A8F8"],
        hoverBackgroundColor: ["#98A8F8", "#36A2EB"],
      },
    ],
  };

  return (
    <>
      <div className="container-intro-graphics">
        <CustomTitle text="Customer Retention" className="medium-title" />
      </div>
      <div className="graphics-container pb-5">
        <div className="chart-container">
          <CustomTitle text="Retention Metrics" className="medium-title" />
          <Doughnut data={retentionRateData} />
          <CustomParagraph className="medium-p my-5" text='  The retention rate represents the percentage of customers that a
          company retains over a specific period. A higher retention rate is
          generally positive, indicating customer loyalty.'/>
        </div>
        <div className="chart-container">
          <CustomTitle text="Profit Margin" className="medium-title" />
          <Doughnut data={profitMarginData} />
          <CustomParagraph className="medium-p my-5" text=' Profit margin is a financial metric that represents the percentage
          of revenue that exceeds the costs associated with a product or
          service. A higher profit margin indicates more efficient
          profitability.'/>
        </div>
      </div>
    </>

  );
};

export default CustomerRetentionChart;
