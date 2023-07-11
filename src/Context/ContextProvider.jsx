import { API } from "aws-amplify";
import React, { useEffect, useState, useMemo } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});
  const [loader, setLoader] = useState(false);
  const [upcomingClasses, setUpcomingClasses] = useState([]);
  const [previousClasses, setPreviousClasses] = useState([]);
  const [userList, setUserList] = useState([]);
  const [productList, setProductList] = useState([]);


useEffect(() => {
  if (isAuth) {
    const onLoad = async () => {
      try {
        const classes = await API.get("user", "/user/upcoming-schedule/happyprancer");
        setUpcomingClasses(classes);
      } catch (e) {
        setUpcomingClasses([]);
        console.log(e);
      }

      try {
        const classes = await API.get("user", "/user/previous-schedule/happyprancer");
        setPreviousClasses(classes);
      } catch (e) {
        setPreviousClasses([]);
        console.log(e);
      }

      try {
        const list = await API.get("user", "/admin/profile-list/happyprancer");
        setUserList(list);
      } catch (e) {
        console.log(e);
        setUserList([]);
      }
    };

    onLoad();
  }
}, [isAuth]);

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

const setUpcomingClassesFn = (classes) => {
  setUpcomingClasses(classes);
};

const setPreviousClassesFn = (classes) => {
  setPreviousClasses(classes);
};

const setUserListFn = (list) => {
  setUserList(list);
};

const checkSubscriptionStatus = useMemo(() => {
  if (userData && userData.userType) {
    const subscriptionType = userData.userType;
    const subscriptionStatus = userData.status;
    console.log("Subscription Type:", subscriptionType);
    if (subscriptionType === "admin") {
      return { borderColor: "green" };
    } else if (subscriptionType === "instructor") {
      return { borderColor: "blue" };
    } else if ((subscriptionType === "member") && (subscriptionStatus === "Active")) {
      return { borderColor: "#FFC73B" };
    }
  }
  // Return the default style for non-admin and non-active accounts
  return { borderColor: "red" };
}, [userData]);



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
  setUpcomingClasses: setUpcomingClassesFn,
  previousClasses: previousClasses,
  setPreviousClasses: setPreviousClassesFn,
  userList: userList,
  setUserList: setUserListFn,
  productList: productList,
  setProductList: () => { },
  checkSubscriptionStatus: checkSubscriptionStatus,
};

return (
  <Context.Provider value={ContextData}>{props.children}</Context.Provider>
);
};

export { ContextProvider };
