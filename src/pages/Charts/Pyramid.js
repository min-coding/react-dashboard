import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';
import { Context } from '../../context/ContextProvider';
import { Header } from '../../components';

export default function Pyramid() {
  const { currentMode } = React.useContext(Context);
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pyramid" title="Pyramid chart"></Header>
      <AccumulationChartComponent
        id="charts"
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{
          visible: true,
          background: '#fff'
        }}
      >
        <Inject
          services={[
            AccumulationLegend,
            PyramidSeries,
            AccumulationTooltip,
            AccumulationDataLabel,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={PyramidData}
            xName="x"
            yName="y"
            type="Pyramid"
            pyramidMode="Surface"
            dataLabel={{
              visible: true,
              name: 'text',
              position: 'Inside',
              font: {
                fontWeight: '600',
                color: '#fff',
              },
            }}
          ></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
}
