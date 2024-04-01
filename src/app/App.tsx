import React, { useEffect, useState } from 'react';
import { useStockData } from '../providers/StockDataProvider';
import Chart from '../components/Chart';
import LoadSection from '../components/LoadSection';
import './styles.scss';
import SelectGroup from '../components/MUI/SelectGroup';

const App: React.FC = () => {
  const { stockData, loading } = useStockData();
  const [period, setPeriod] = useState<number>(30);
  const [renderData, setRenderData] = useState(stockData);

  useEffect(() => {
    if (!loading) {
      localStorage.removeItem('timeLeft');
    }
  }, [loading]);

  useEffect(() => {
    setRenderData(prevState => {
      if (stockData) {
        return stockData.slice(-period);
      }
      return null;
    });
  }, [period, stockData]);

  return (
    <div className={'flex-center main__container'}>
      {loading ? (
        <LoadSection loading={loading} />
      ) : (
        <>
          <SelectGroup value={period} setValue={setPeriod} />
          <div>{renderData && <Chart data={renderData} />}</div>
        </>
      )}
    </div>
  );
};
export default App;
