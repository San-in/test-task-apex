import { StockData } from '../providers/StockDataProvider';

export const formatStockData = (stock: StockData[]) => {
  return stock.map(data => {
    return {
      x: new Date(data.timestampHuman).getTime(),
      y: [data.open, data.high, data.low, data.close],
    };
  });
};
