import React, { useContext } from "react";

import { MagazineContext } from "../contexts/MagazineContext";
import {
  SHOW_MY_SUBSCRIPTION,
  SHOW_MAGAZINE_LIST,
} from "../constant/appConstant";

export const Header = () => {
  // @ts-ignore
  const { state, dispatch } = useContext(MagazineContext);

  const showMySubscription = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({ type: SHOW_MY_SUBSCRIPTION });
  };

  const showMagazineList = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({ type: SHOW_MAGAZINE_LIST });
  };

  const handleLogin = () => {
    dispatch({ type: "SHOW_LOGIN_POPUP", payload: { showLogIn: true } });
  };
  return (
    <div className="navbar">
      <h1 className="app-title" onClick={showMagazineList}>
        Magazine App
      </h1>
      {state.username ? (
        <div className="my-subscription" onClick={showMySubscription}>
          My Subscription
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};
