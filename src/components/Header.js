import React from 'react';
import { Context } from '../context/ContextProvider';

export default function Header({ category, title }) {
  const { currentMode } = React.useContext(Context);
  return (
    <div className="mb-10">
      <p className="text-gray-400"> {category}</p>
      <p
        className={`text-3xl font-extrabold tracking-tight text-${
          currentMode === 'Dark' ? 'white' : 'slate-900'
        }`}
      >
        {title}
      </p>
    </div>
  );
}
