import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});
  const [loader, setLoader] = useState(false);
  const [upcomingClasses, setUpcomingClasses] = useState([]);
  const [previousClasses, setPreviousClasses] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (isAuth) {
      const onLoad = () => {
        API.get("user", "/user/upcoming-schedule/Bworkz")
          .then((classes) => {
            setUpcomingClasses(classes);
          })
          .catch((e) => {
            setUpcomingClasses([]);
            console.log(e);
          });
        API.get("user", "/user/previous-schedule/Bworkz")
          .then((classes) => {
            setPreviousClasses(classes);
          })
          .catch((e) => {
            setPreviousClasses([]);
            console.log(e);
          });
        API.get("user", "/admin/profile-list/Bworkz")
          .then((list) => {
            setUserList(list);
          })
          .catch((e) => {
            console.log(e);
            setUserList([]);
          });
      };
      onLoad();
    }
  }, [isAuth]);

  const setIsAuthFn = (data) => {
    setIsAuth(data);
  };

  const setUserDataFn = (data) => {
    setUserData(data);
  };

  const setLoaderFn = (data) => {
    setLoader(data);
  };

  const ContextData = {
    isAuth: isAuth,
    setIsAuth: setIsAuthFn,
    userData: userData,
    setUserData: setUserDataFn,
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
  };

  return (
    <Context.Provider value={ContextData}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
