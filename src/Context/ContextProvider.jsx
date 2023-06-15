import { API } from "aws-amplify";
import React, { useEffect, useState, useCallback } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});
  const [upcomingClasses, setUpcomingClasses] = useState([]);
  const [previousClasses, setPreviousClasses] = useState([]);
  const [userList, setUserList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

  const onLoad = useCallback(() => {
    if (isAuth) {
      API.get("user", "/user/upcoming-schedule/happyprancer")
        .then((classes) => {
          setUpcomingClasses(classes);
        })
        .catch((e) => {
          setUpcomingClasses([]);
          console.log(e);
        });
      API.get("user", "/user/previous-schedule/happyprancer")
        .then((classes) => {
          setPreviousClasses(classes);
        })
        .catch((e) => {
          setPreviousClasses([]);
          console.log(e);
        });
      API.get("user", "/admin/profile-list/happyprancer")
        .then((list) => {
          setUserList(list);
        })
        .catch((e) => {
          console.log(e);
          setUserList([]);
        });
    }
  }, [isAuth]);

  useEffect(() => {
    onLoad();
  }, [isAuth, onLoad]);

  useEffect(() => {
    API.get("user", "/any/products/happyprancer")
      .then((list) => {
        console.log(list);
        setProductList(list);
      })
      .catch((e) => {
        console.log(e);
        setUserList([]);
      });
  }, []);

  const setIsAuthFn = (data) => {
    setIsAuth(data);
  };

  const setUserDataFn = (data) => {
    setUserData(data);
  };

  const setLoaderFn = (data) => {
    setLoader(data);
  };

  const setIsUserDataLoadedFn = (data) => {
    setIsUserDataLoaded(data);
  };

  const ContextData = {
    isAuth: isAuth,
    setIsAuth: setIsAuthFn,
    userData: userData,
    setUserData: setUserDataFn,
    isUserDataLoaded: isUserDataLoaded,
    setIsUserDataLoaded: setIsUserDataLoadedFn,
    util: {
      loader: loader,
      setLoader: setLoaderFn,
    },
    upcomingClasses: upcomingClasses,
    setUpcomingClasses: () => {},
    previousClasses: previousClasses,
    setPreviousClasses: () => {},
    userList: userList,
    setUserList: () => {},
    productList: productList,
    setProductList: () => {},
    reloadClasses: onLoad,
  };

  return (
    <Context.Provider value={ContextData}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
