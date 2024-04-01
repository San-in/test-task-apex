import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { FormatData } from '../../providers/StockDataProvider';
import { options } from './options';
import './styles.scss';

interface ChartProps {
  data: FormatData[];
}
const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <ReactApexChart
      series={[{ data: data }]}
      width={800}
      type={'candlestick'}
      options={options}
    />
  );
};

export default Chart;
