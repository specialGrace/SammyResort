import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../SideBar/Sidebar'
import Tab from '../Tab/Tab'

const Layout = (props) => {
  return (
    <div>
          <Tab />
          <Sidebar />

          <div>
              {<Outlet />}
          </div>
    </div>
  )
}

export default Layout
