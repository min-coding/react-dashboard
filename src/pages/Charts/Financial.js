import React from 'react';
import { Header } from '../../components';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Category,
  Tooltip,
  Zoom,
  Crosshair,
  Logarithmic,
  DateTime,
} from '@syncfusion/ej2-react-charts';
import {
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
  financialChartData,
} from '../../data/dummy';
import { Context } from '../../context/ContextProvider';

export default function Financial() {
  const { currentMode } = React.useContext(Context);

  const date1 = new Date('2017, 1, 1');
  function filterValue(value) {
    if (value.x >= date1) {
      return value.x, value.high, value.low;
    }
  }
  const returnValue = financialChartData.filter(filterValue);
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Financial" title="Financial chart"></Header>
      <ChartComponent
        id="Financial Chart"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        title="AAPLE Historical"
        tooltip={{ enable: true, shared: true }}
        crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
        chartArea={{ border: { width: 0 } }}
        titleStyle={{
          color: currentMode === 'Dark' ? '#fff' : '#33373E',
          size: '23px',
        }}
      >
        <Inject
          services={[
            HiloSeries,
            Logarithmic,
            Tooltip,
            Category,
            Crosshair,
            Zoom,
            DateTime,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={returnValue}
            xName="x"
            yName="low"
            name="AAPLE Inc"
            type="Hilo"
            low="low"
            high="high"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
