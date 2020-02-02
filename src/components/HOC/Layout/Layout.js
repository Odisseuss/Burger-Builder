import React, { useState } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawer";
const Layout = props => {
  const [sideDrawerShowingState, setSideDrawerShowingState] = useState({
    showSideDrawer: false
  });

  const sideDrawerClosedHandler = () => {
    setSideDrawerShowingState({
      showSideDrawer: !sideDrawerShowingState.showSideDrawer
    });
  };

  const sideDrawerOpenedHandler = () => {
    setSideDrawerShowingState({
      showSideDrawer: !sideDrawerShowingState.showSideDrawer
    });
  };

  return (
    <React.Fragment>
      <Toolbar openSideDrawer={sideDrawerOpenedHandler} />
      <SideDrawer
        showing={sideDrawerShowingState.showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
