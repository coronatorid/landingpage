import {createContext, useContext, useEffect, useState} from 'react';
import userApi from '../services/api/userApi';

const Context = createContext();

const Provider = (props) => {
  const [user, setUser] = useState(null);

  async function getUser() {
    try {
      const response = await userApi.getUser();
      setUser(response.data);
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  }

  return (
    <Context.Provider value={{
      user,
      getUser
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default {
  Context,
  Provider
}
