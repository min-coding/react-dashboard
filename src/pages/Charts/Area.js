import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from '@syncfusion/ej2-react-charts';
import {
  areaCustomSeries,
  areaPrimaryYAxis,
  areaPrimaryXAxis,
} from '../../data/dummy';
import { Context } from '../../context/ContextProvider';
import { Header } from '../../components';

export default function Area() {
  const { currentMode } = React.useContext(Context);
  return (
    <>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="Area" title="Inflation Rate in Percentage"></Header>
        <ChartComponent
          id="area-chart"
          height="420px"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{
            visible: true,
            background: '#fff',
            position: 'Bottom',
          }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </>
  );
}
