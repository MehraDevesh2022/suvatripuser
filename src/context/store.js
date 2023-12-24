import { useReducer, useContext, createContext } from "react";

// initial State
const initialState = {
  isLoggedIn: false,
  hotel: [],
  userData: null,
  isLoading: false,
  hotelDetails: {},
};

// action types

const actionTypes = {
  IS_LOADING: "LOADING",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SET_HOTEL: "SET_HOTEL",
  SET_USER_DATA: "SET_USER_DATA",
  SET_HOTEL_DETAILS: "SET_HOTEL_DETAILS",
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
    case actionTypes.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case actionTypes.SET_HOTEL_DETAILS:
      return { ...state, hotelDetails: action.payload };
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
  const isLoading = () => dispatch({ type: actionTypes.IS_LOADING });

  const setHotel = (hotel) =>
    dispatch({ type: actionTypes.SET_HOTEL, payload: hotel });
  const setUserData = (userData) =>
    dispatch({ type: actionTypes.SET_USER_DATA, payload: userData });

  const setHotelDetails = (hotelDetails) =>
    dispatch({ type: actionTypes.SET_HOTEL_DETAILS, payload: hotelDetails });

  const contextValue = {
    state,
    actions: {
      login,
      logout,
      setHotel,
      setUserData,
      isLoading,
      setHotelDetails,
    },
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
