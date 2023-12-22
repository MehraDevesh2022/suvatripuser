import { useReducer, useContext, createContext } from "react";

// initial State

const initialState = {
  isLoggedIn: false,
  hotel: null,
  userData: null,
};

// action types

const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SET_HOTEL: "SET_HOTEL",
  SET_USER_DATA: "SET_USER_DATA",
};

const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, isLoggedIn: action.payload };
    case actionTypes.LOGOUT:
      return { ...state, isLoggedIn: action.payload };
    case actionTypes.SET_HOTEL:
      return { ...state, hotel: action.payload };
    case actionTypes.SET_USER_DATA:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const login = () => dispatch({ type: actionTypes.LOGIN });
  const logout = () => dispatch({ type: actionTypes.LOGOUT });
  const setHotel = (hotel) =>
    dispatch({ type: actionTypes.SET_HOTEL, payload: hotel });
  const setUserData = (userData) =>
    dispatch({ type: actionTypes.SET_USER_DATA, payload: userData });

  const contextValue = {
    state,
    actions: { login, logout, setHotel, setUserData },
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

export { AppProvider, useAppContext };
