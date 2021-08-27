import React, { createContext } from "react";
//import * as firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pesquisa } from "../services/pesquisa";

import { LIST_NAME } from "./Constants";

const ContextAuth = createContext();
export default ContextAuth;

const AuthProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
      }
    },
    {
      isLoading: false,
      isSignout: true,
      user: {},
      userToken: null,
      info: undefined,
      lista: []
    }
  );

  const action = React.useMemo(() => ({}));
  return (
    <ContextAuth.Provider value={{ action, state }}>
      {children}
    </ContextAuth.Provider>
  );
};

export { AuthProvider };
