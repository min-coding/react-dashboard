import React from 'react';

const Context = React.createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

function ContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = React.useState(true);

  // Color and theme
  const [currentColor, setCurrentColor] = React.useState('#03C9D7');
  const [currentMode, setCurrentMode] = React.useState('Light');
  const [themeSettings, setThemeSettings] = React.useState(false);

  function setMode(e) {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false);
  }

  function setColor(color) {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSettings(false);
  }

  // only one isClicked can be true
  const [isClicked, setIsClicked] = React.useState(initialState);

  const [screenSize, setScreenSize] = React.useState(undefined);

  function handleClick(clicked) {
    // set only the value that's clicked
    setIsClicked({ ...initialState, [clicked]: true });
  }

  return (
    <Context.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setColor,
        setMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };

/**
 * export function useStateContext(){
 * React.useContext(Context)
 *
 * }
 */
