import { useReducer, useContext, createContext } from "react";

// initial State
const initialState = {
  isLoggedIn: false,
  hotel: [],
  roomData: [],
  userData: null,
  isLoading: false,
  hotelDetails: {},
  authType: "local",
  profileData: {},
  roomDetails: {},
  allRooms: [],
  allReviews: [],
  location: "",
  rate: 1,
  currency: 'USD'
};

// action types

const actionTypes = {
  IS_LOADING: "LOADING",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SET_HOTEL: "SET_HOTEL",
  SET_USER_DATA: "SET_USER_DATA",
  SET_HOTEL_DETAILS: "SET_HOTEL_DETAILS",
  SET_PROFILE_DATA: "SET_PROFILE_DATA",
  SET_AUTH_TYPE: "SET_AUTH_TYPE",
  SET_ROOM_DATA: "SET_ROOM_DATA",
  SET_ROOM_DETAILS: "SET_ROOM_DETAILS",
  SET_ALL_ROOMS: "SET_ALL_ROOMS",
  SET_ALL_REVIEW: "SET_ALL_REVIEW",
  SET_LOCATION: "SET_LOCATION",
  SET_RATE: "SET_RATE",
  SET_CURRENCY: "SET_CURRENCY"
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
    case actionTypes.SET_PROFILE_DATA:
      return { ...state, profileData: action.payload };
    case actionTypes.SET_AUTH_TYPE:
      return { ...state, authType: action.payload };
    case actionTypes.SET_ROOM_DATA:
      return { ...state, roomData: action.payload };
    case actionTypes.SET_ROOM_DETAILS:
      return { ...state, roomDetails: action.payload };

    case actionTypes.SET_ALL_REVIEW:
      return { ...state, allReviews: action.payload };
    case actionTypes.SET_ALL_ROOMS:
      return { ...state, allRooms: action.payload };

    case actionTypes.SET_RATE:
      return { ...state, rate: action.payload };

    case actionTypes.SET_CURRENCY:
      return { ...state, currency: action.payload };

    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const login = (isLoggedIn) => dispatch({ type: actionTypes.LOGIN, payload: isLoggedIn });
  const logout = () => dispatch({ type: actionTypes.LOGOUT });
  const isLoading = () => dispatch({ type: actionTypes.IS_LOADING });

  const setAuthType = (authType) =>
    dispatch({ type: actionTypes.SET_AUTH_TYPE, payload: authType });

  const setHotel = (hotel) =>
    dispatch({ type: actionTypes.SET_HOTEL, payload: hotel });
  const setUserData = (userData) =>
    dispatch({ type: actionTypes.SET_USER_DATA, payload: userData });
  const setProfileData = (profileData) =>
    dispatch({ type: actionTypes.SET_PROFILE_DATA, payload: profileData });

  const setRoomData = (roomData) => dispatch({ type: actionTypes.SET_ROOM_DATA, payload: roomData });
  const setRoomDetails = (roomDetails) => dispatch({ type: actionTypes.SET_ROOM_DETAILS, payload: roomDetails });

  const setAllRooms = (allRooms) => dispatch({ type: actionTypes.SET_ALL_ROOMS, payload: allRooms });

  const setRate = (rate) => {
    console.log(rate, 'rrrr');
    dispatch({ type: actionTypes.SET_RATE, payload: rate });}

  const setCurrency = (currency) => dispatch({ type: actionTypes.SET_CURRENCY, payload: currency });

  const setHotelDetails = (hotelDetails) =>
    dispatch({ type: actionTypes.SET_HOTEL_DETAILS, payload: hotelDetails });

  const setAllReviews = (allRewviews) =>
    dispatch({ type: actionTypes.SET_ALL_REVIEW, payload: allRewviews });

  const setLocation = (location) =>
    dispatch({ type: actionTypes.SET_LOCATION, payload: location });

  const contextValue = {
    state,
    actions: {
      login,
      logout,
      setHotel,
      setUserData,
      setAllRooms,
      isLoading,
      setHotelDetails,
      setProfileData,
      setAuthType,
      setRoomData,
      setRoomDetails,
      setAllReviews,
      setLocation,
      setRate,
      setCurrency
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
