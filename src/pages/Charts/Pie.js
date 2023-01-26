import React from 'react';
import { Header } from '../../components';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PieSeries,
  AccumulationLegend,
  AccumulationTooltip,
  AccumulationDataLabel,
} from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';
import { Context } from '../../context/ContextProvider';

export default function Pie() {
  const { currentMode } = React.useContext(Context);
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pie" title="Pie chart"></Header>
      <h1
        className={`text-center text-${
          currentMode === 'Dark' ? 'white' : 'bg-gray-600'
        } `}
      >
        Project Cost Breakdown
      </h1>
      <AccumulationChartComponent
        id="chart-pie"
        legendSettings={{
          visible: true,
          background: '#fff',
          position: 'Bottom',
        }}
        height="full"
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[
            AccumulationLegend,
            PieSeries,
            AccumulationDataLabel,
            AccumulationTooltip,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieChartData}
            xName="x"
            yName="y"
            dataLabel={{
              visible: true,
              name: 'text',
              position: 'Inside',
              font: {
                fontWeight: '600',
                color: '#fff',
              },
            }}
            innerRadius="40%"
          ></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
}
