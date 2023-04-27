import { createContext } from "react";

const Context = createContext({
  isAuth: "",
  setIsAuth: () => {},
  userData: "",
  setUserData: () => {},
  isUserDataLoaded: false,
  setIsUserDataLoaded: () => {},
  util: {
    loader: false,
    setLoader: () => {},
  },
  upcomingClasses: [],
  setUpcomingClasses: () => {},
  previousClasses: [],
  setPreviousClasses: () => {},
  userList: [],
  setUserList: () => {},
  productList: [],
  setProductList: () => {},
  reloadClasses: () => {},
});

export default Context;
