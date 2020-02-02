import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
const sideDrawer = props => {
  let sideDrawerClasses = [classes.SideDrawer, classes.Close];
  if (props.showing) {
    sideDrawerClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.showing} clicked={props.closed} />
      <div className={sideDrawerClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
