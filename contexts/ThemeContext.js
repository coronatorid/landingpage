import {createContext, useEffect, useState} from 'react';
import localStorageData from '../utils/localStorageData';

const Context = createContext();

const Provider = (props) => {
  const [theme, setTheme] = useState('normal');
  const [initialized, setInitialized] = useState(false);

  const allowedThemes = [
    'normal',
    'dark'
  ];

  useEffect(() => {
    const theme = localStorageData.get('theme');
    if(theme) {
      setTheme(theme);
    }

    setInitialized(true);
  }, []);

  useEffect(() => {
    if(initialized) {
      localStorageData.set('theme', theme);
      const htmlElement = document.getElementsByTagName('html')[0];
      if(htmlElement) {
        htmlElement.className = theme;
      }
    }
  }, [theme]);

  function switchTheme(value = 'normal') {
    if(Array.from(allowedThemes).includes(value)) {
      setTheme(value);
    }
  }

  return (
    <Context.Provider value={{
      theme,
      switchTheme
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default {
  Context,
  Provider
}
