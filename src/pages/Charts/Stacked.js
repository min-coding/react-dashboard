import React from 'react';
import { Header, Stacked as StackedComponent } from '../../components/';

export default function Stacked() {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Stacked" title="Stacked chart">
        <div className="w-full">
          <StackedComponent width="600px" height="600px" />
        </div>
      </Header>
    </div>
  );
}
