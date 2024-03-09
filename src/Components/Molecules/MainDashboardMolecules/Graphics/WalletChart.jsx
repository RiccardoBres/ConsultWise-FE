import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import CustomTitle from '../../../Atoms/CustomTitle';
import CustomParagraph from '../../../Atoms/CustomParagraph';
import { useSelector } from 'react-redux';
import '../dashboard.css';
import Chart from 'chart.js/auto';
import { selectCompany } from '../../../../States/CompanyState';

const generateLineChartData = (annualRevenue, profitMargin) => ({
  labels: ['Annual Revenue', 'Profit Margin'],
  datasets: [
    {
      label: 'Financial Performance',
      data: [annualRevenue, profitMargin],
      fill: false,
      backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
    },
  ],
});

const generateBarChartData = (expensesBreakdown) => ({
  labels: Object.keys(expensesBreakdown),
  datasets: [
    {
      label: 'Expenses Breakdown',
      data: Object.values(expensesBreakdown),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
});

const WalletChart = () => {
  const company = useSelector(selectCompany);

  const lineChartData = generateLineChartData(
    company[0]?.specificCompanyInfo?.annualRevenue || 0,
    company[0]?.specificCompanyInfo?.profitMargin || 0
  );

  const barChartData = generateBarChartData(
    company[0]?.specificCompanyInfo?.expensesBreakdown || {}
  );

  return (
    <div className='container-wallet'>
      <Card className='container-chart'>
        <Card.Body>
          <CustomTitle className='small-title' text='Wallet Overview' />
          <CustomParagraph className='small-p' text='This line chart shows the financial performance of the company, including annual revenue and profit margin.' />
          <Line data={lineChartData} />
        </Card.Body>
      </Card>
      <Card className='container-chart'>
        <Card.Body>
          <CustomTitle className='small-title' text='Expenses Breakdown' />
          <CustomParagraph className='small-p my-3' text='This bar chart displays the breakdown of expenses across different categories.' />
          <Bar data={barChartData} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default WalletChart;
