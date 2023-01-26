import React from 'react';
import { Header } from '../../components';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  ColumnSeries,
} from '@syncfusion/ej2-react-charts';

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from '../../data/dummy';

import { Context } from '../../context/ContextProvider';

export default function Bar() {
  const { currentMode } = React.useContext(Context);
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Bar chart"></Header>
      <ChartComponent
        id="bar-chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{
          visible: true,
          background: '#fff',
          position: 'Bottom',
        }}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
