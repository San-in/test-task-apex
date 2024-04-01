import { StockData } from '../providers/StockDataProvider';

const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjYwOTFjMTEyYzczYzFlM2ZkZmE1ZmMyIiwiaWF0IjoxNzExODczMTQ2LCJleHAiOjMzMjE2MzM3MTQ2fQ.Y91tN2nHI1Dg4HKtuPiK1lhKFAGCnBrmanzoW2ugAxU';

export const fetchStockData = async (): Promise<StockData[] | null> => {
  try {
    const response = await fetch(
      `https://api.taapi.io/candles?secret=${API_KEY}&exchange=binance&symbol=BTC/USDT&period=30&interval=1d`
    );
    const data = await response.json();

    if (!data?.error) {
      return data;
    } else {
      console.warn(data.error);
      return null;
    }
  } catch (error) {
    console.error('Failed to fetch stock data:', error);
    return null;
  }
};
