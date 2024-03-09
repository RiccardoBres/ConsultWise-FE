// BubbleChart.jsx

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Bubble } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import CustomTitle from '../../../Atoms/CustomTitle';
import CustomParagraph from '../../../Atoms/CustomParagraph';
import { FaInfoCircle, FaChartBubble } from 'react-icons/fa'; // Import icons
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './Graphics.css';
import { selectCompany } from '../../../../States/CompanyState';

const BubbleChart = () => {
  const company = useSelector(selectCompany);
  const [showDescription, setShowDescription] = useState(false);

  const chartData = {
    datasets: [
      {
        label: 'Efficiency Metrics vs Production Output vs Employee Count',
        data: company[0]?.specificCompanyInfo
          ? [
              {
                x: company[0].specificCompanyInfo.efficiencyMetrics || 0,
                y: company[0].specificCompanyInfo.productionOutput || 0,
                r: company[0].specificCompanyInfo.numberOfEmployees || 0,
              },
            ]
          : [],
        backgroundColor: 'rgba(255,99,132,0.6)',
        borderColor: 'rgba(255,99,132,1)',
      },
    ],
  };

  const data = {
    labels: [company[0]?.companyName],
    datasets: [
      {
        label: 'Number of Employees',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [company[0]?.specificCompanyInfo.numberOfEmployees || 0],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className='container-graphics'>
        <Card className='container-chart'>
          <Card.Body className='overflow-auto'>
            <div className='chart-title-container'>
              <CustomTitle className='small-title' text='Efficiency Metrics vs Production Output vs Employee Count' />
              <FaInfoCircle className='info-icon' onClick={() => setShowDescription(!showDescription)} />
            </div>
            <Bubble data={chartData} />
            {showDescription && (
              <CustomParagraph className='small-p' text='This bubble chart illustrates the relationship between Efficiency Metrics, Production Output, and the Number of Employees. Each bubble represents a data point, with the X-axis denoting Efficiency Metrics, the Y-axis denoting Production Output, and the size of the bubble representing the Number of Employees. This chart provides insights into how these variables correlate and impact each other.' />
            )}
          </Card.Body>
        </Card>
        <Card className='container-chart'>
          <Card.Body>
            <CustomTitle className='small-title' text='Number of Employees' />
            <Bar data={data} options={options} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default BubbleChart;
