import React, { createContext, useContext } from "react";

const ContextAuth = createContext();
export default ContextAuth;

const Provider = ({ children }) => {
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

export { Provider };
export const useInfo = () => useContext(ContextAuth);
