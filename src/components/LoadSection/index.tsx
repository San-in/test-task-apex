import React, { useEffect, useState } from 'react';
import Loader from '../MUI/Loader';
import './styles.scss';
import CustomText from '../CustomText';

interface LoadSectionProps {
  loading: boolean;
}

const LoadSection: React.FC<LoadSectionProps> = ({ loading }) => {
  const [timeLeft, setTimeLeft] = useState(
    parseInt(localStorage.getItem('timeLeft') || '15', 10)
  );

  const onReload = () => {
    window.location.reload();
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (loading && timeLeft) {
      interval = setTimeout(() => {
        setTimeLeft(prevState => prevState - 1);
        localStorage.setItem('timeLeft', (timeLeft - 1).toString());
      }, 1000);
    }
    if (loading && !timeLeft) {
      localStorage.removeItem('timeLeft');
      onReload();
      interval && clearInterval(interval);
    }
    if (!loading) {
      localStorage.removeItem('timeLeft');
    }
    return () => {
      interval && clearInterval(interval);
    };
  }, [loading, timeLeft]);
  return (
    <div className={'flex-center loader__container'}>
      <Loader />
      <CustomText>
        Please wait <span>{timeLeft}</span> sec.. and page will reload
        automatically
      </CustomText>
    </div>
  );
};

export default LoadSection;
