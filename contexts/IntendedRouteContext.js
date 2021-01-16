import {createContext, useEffect, useState} from 'react';
import Cookies from 'js-cookie';

const Context = createContext();

const Provider = (props) => {
  const [url, setUrl] = useState(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const intendedUrl = Cookies.get('intededUrl');
    if(intendedUrl) {
      setUrl(intendedUrl);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if(initialized) {
      setUrl(url);
      Cookies.set('intendedUrl', url);
    }
  }, [url]);

  return (
    <Context.Provider value={{url, setUrl}}>
      {props.children}
    </Context.Provider>
  )
}

export default {
  Context,
  Provider
}
