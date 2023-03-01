import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen";
import RoomsScreen from "../Screens/RoomsScreen";
import SingleRoom from "../Screens/SingleRoomScreen";
import NotFoundScreen from "../Screens/NotFoundScreen";
// import DashboardScreen from "../Screens/DashboardScreen";
// import Orders from "../components/Dashboard/Orders/Orders";
// import Receipt from "../components/Dashboard/Receipts/Receipt";
// import Layout from "../components/Dashboard/Layout/Layout";
import DefaultLayout from '../components/Layout/Layout'
// import Profile from "../components/Dashboard/Profile/Profile";
import ContactScreen from "../Screens/ContactScreen";
import DashboardScreen from "../Screens/DashboardScreen";

const Router = () => { 
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <HomeScreen />
          </DefaultLayout>
        }
      />
      <Route
        path="/rooms"
        element={
          <DefaultLayout>
            <RoomsScreen />
          </DefaultLayout>
        }
      />
      <Route
        path="/rooms/:slug"
        element={
          <DefaultLayout>
            <SingleRoom />
          </DefaultLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <DefaultLayout>
            <ContactScreen />
          </DefaultLayout>
        }
      />
      <Route
        path="/not-found"
        element={
          <DefaultLayout>
            <NotFoundScreen />
          </DefaultLayout>
        }
      />

<Route
        path="/mydashboard"
        element={
        
            <DashboardScreen />
         
        }
      />
      {/* <Route path="/dashboard" element={<Layout />}>
        <Route index element={<DashboardScreen />} />
        <Route path="orders" element={<Orders />} />
        <Route path="profile" element={<Profile />} />
        <Route path="receipts" element={<Receipt />} />
      </Route> */}

      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default Router;
