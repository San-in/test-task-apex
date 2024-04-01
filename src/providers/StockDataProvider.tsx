import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchStockData } from '../services/fetchStockData';
import { formatStockData } from '../untils/formatStockData';

interface ProviderProps {
  children: React.ReactNode;
}
export interface StockData {
  high: number;
  low: number;
  open: number;
  close: number;
  timestamp: number;
  timestampHuman: string;
  volume: number;
}
export interface FormatData {
  x: number | Date;
  y: number[];
}

interface StockDataContextType {
  stockData: FormatData[] | null;
  loading: boolean;
}

const StockDataContext = createContext<StockDataContextType>({
  stockData: null,
  loading: true,
});

export const useStockData = () => useContext(StockDataContext);

const StockDataProvider: React.FC<ProviderProps> = ({ children }) => {
  const [stockData, setStockData] = useState<FormatData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchStockData()
      .then(res => {
        if (res) {
          setStockData(formatStockData(res));
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Failed to fetch stock data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <StockDataContext.Provider value={{ stockData, loading }}>
      {children}
    </StockDataContext.Provider>
  );
};

export default StockDataProvider;
