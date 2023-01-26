import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from '@syncfusion/ej2-react-charts';
import { Context } from '../../context/ContextProvider';
import {
  colorMappingData,
  rangeColorMapping,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
} from '../../data/dummy';
import { Header } from '../../components';

export default function ColorMapping() {
  const { currentMode } = React.useContext(Context);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Color Mapping"></Header>
      <ChartComponent
        id="charts"
        style={{ textAlign: 'center' }}
        selectionMode="Point"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        title="USA CLIMATE - WEATHER BY MONTH"
        titleStyle={{
          color: currentMode === 'Dark' ? '#fff' : '#33373E',
        }}
        chartArea={{ border: { width: 0 } }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{
          mode: 'Range',
          visible: true,
          toggleVisibility: false,
          background: '#fff'
        }}
        tooltip={{ enable: true }}
      >
        <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData[0]}
            name="USA"
            xName="x"
            yName="y"
            type="Column"
            animation={{ enable: false }}
            cornerRadius={{
              topLeft: 10,
              topRight: 10,
            }}
          ></SeriesDirective>
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          {rangeColorMapping.map((item, index) => (
            <RangeColorSettingDirective
              key={index}
              {...item}
            ></RangeColorSettingDirective>
          ))}
          <RangeColorSettingDirective
            label="1°C to 10°C"
            start={1}
            end={10}
            colors="#F9D422"
          ></RangeColorSettingDirective>
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>
  );
}
