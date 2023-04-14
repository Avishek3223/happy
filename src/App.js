import { useContext, useEffect, useRef } from "react";
import { Auth, API } from "aws-amplify";
import Context from "./Context/Context";
import RoutesContainer from "./Routes";
import LoaderProvider from "./Components/LoaderProvider";

function App() {
  const UtilCtx = useRef(useContext(Context).util);
  const UserCtx = useRef(useContext(Context));

  useEffect(() => {
    const check = async () => {
      UtilCtx.current.setLoader(true);

      try {
        await Auth.currentAuthenticatedUser();
        const userdata = await API.get("user", "/user/profile/happyprancer");
        // userdata.Status = true;
        UserCtx.current.setUserData(userdata);
        UserCtx.current.setIsAuth(true);
        UtilCtx.current.setLoader(false);
      } catch (e) {
        console.log(e);
        UserCtx.current.setUserData({});
        UtilCtx.current.setLoader(false);
      }
    };
    check();
  }, []);

  return (
    <LoaderProvider>
      <RoutesContainer />
    </LoaderProvider>
  );
}

export default App;
