import dayjs from 'dayjs';
import redArrow from '../../assets/red-arrow.png';
import greenArrow from '../../assets/green-arrow.png';
import { ApexOptions } from 'apexcharts';

export const options: ApexOptions = {
  title: { text: 'CandleStick Chart', align: 'center' },
  xaxis: {
    type: 'category',
    labels: {
      formatter(
        value: string,
        timestamp?: number,
        opts?: any
      ): string | string[] {
        return dayjs(value).format('DD MMM YY');
      },
    },
  },
  tooltip: { enabled: true },
  annotations: {
    points: [
      {
        x: 1709342400000,
        y: 60250.9,

        label: {
          text: 'SELL (02.03.24/60250.90)',
          borderColor: 'transparent',
          style: {
            color: 'red',
            cssClass: 'signal__label',
          },
        },
        marker: {
          size: 0,
        },
        image: {
          path: redArrow,
          width: 20,
          height: 20,
          offsetX: 0,
          offsetY: 10,
        },
      },
      {
        x: 1709852400000,
        y: 72077.9,

        label: {
          text: 'BUY (08.03.24/72007.90)',
          borderColor: 'transparent',
          style: {
            cssClass: 'signal__label',
            color: 'green',
          },
        },
        marker: {
          size: 0,
        },
        image: {
          path: greenArrow,
          width: 20,
          height: 20,
          offsetX: 0,
          offsetY: 10,
        },
      },
      {
        x: 1711322400000,
        y: 72787.9,

        label: {
          text: 'BUY (25.03.24/72787.90)',
          borderColor: 'transparent',
          style: {
            cssClass: 'signal__label',
            color: 'green',
          },
        },
        marker: {
          size: 0,
        },
        image: {
          path: greenArrow,
          width: 20,
          height: 20,
          offsetX: 0,
          offsetY: 10,
        },
      },
      {
        x: 1709342400000,
        y: 60250.9,

        label: {
          text: 'SELL (02.03.24/60250.90)',
          borderColor: 'transparent',
          style: {
            color: 'red',
            cssClass: 'signal__label',
          },
        },
        marker: {
          size: 0,
        },
        image: {
          path: redArrow,
          width: 20,
          height: 20,
          offsetX: 0,
          offsetY: 10,
        },
      },
      {
        x: 1710800400000,
        y: 60350.9,

        label: {
          text: 'SELL (19.03.24/60350.90)',
          borderColor: 'transparent',
          style: {
            color: 'red',
            cssClass: 'signal__label',
          },
        },
        marker: {
          size: 0,
        },
        image: {
          path: redArrow,
          width: 20,
          height: 20,
          offsetX: 0,
          offsetY: 10,
        },
      },
      {
        x: 1711680400000,
        y: 67650.9,

        label: {
          text: 'SELL (29.03.24/67650.90)',
          borderColor: 'transparent',
          style: {
            color: 'red',
            cssClass: 'signal__label',
          },
        },
        marker: {
          size: 0,
        },
        image: {
          path: redArrow,
          width: 20,
          height: 20,
          offsetX: 0,
          offsetY: 10,
        },
      },
    ],
  },
};
