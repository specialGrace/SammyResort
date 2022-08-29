import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Layout(props) {
  return (
    <div>
      <NavBar />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
