import { Auth } from "aws-amplify";
import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    const onLoad = async () => {
      try {
        await Auth.signOut();
        window.location.href = "/";
      } catch (e) {
        console.log(e);
      }
    };

    onLoad();
  }, []);

  return <div>Logout</div>;
};

export default Logout;
