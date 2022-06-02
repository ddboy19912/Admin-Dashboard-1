import React from 'react'
import './Sidebar.css'
import {TrendingUp, Timeline, LineStyle, Person, Store, AttachMoney, SignalCellularAlt, Email, Archive, Message, Report, BusinessCenter} from '@material-ui/icons'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
        <Link to="/" className="link">
          <li className="sidebarListItem active"> <LineStyle className='sidebarIcon' />Home</li>
          </Link>
           <li className="sidebarListItem"> <Timeline className='sidebarIcon'/>Analytics</li>
             <li className="sidebarListItem"> <TrendingUp className='sidebarIcon'/>Sales</li>
        </ul>
      </div>

{/* NEXT MENU */}

       <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
        <Link to='/users' className="link">
          <li className="sidebarListItem"> <Person className='sidebarIcon' />User</li>
          </Link>
          <Link to='/products' className="link">
           <li className="sidebarListItem"> <Store className='sidebarIcon'/>Products</li>
           </Link>
             <li className="sidebarListItem"> <AttachMoney className='sidebarIcon'/>Transactions</li>
              <li className="sidebarListItem"> <SignalCellularAlt className='sidebarIcon'/>Reports</li>
        </ul>
      </div>

      {/* NEXT MENU */}

        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Notifications</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem"> <Email className='sidebarIcon' />Mail</li>
           <li className="sidebarListItem"> <Archive className='sidebarIcon'/>Feedback</li>
             <li className="sidebarListItem"> <Message className='sidebarIcon'/>Messages</li>
        </ul>
      </div>
{/* NEXT MENU */}

        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Staff</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem"> <BusinessCenter className='sidebarIcon' />Manage</li>
           <li className="sidebarListItem"> <Timeline className='sidebarIcon'/>Analytics</li>
             <li className="sidebarListItem"> <Report className='sidebarIcon'/>Reports</li>
        </ul>
      </div>
      
    </div>
    </div>
  )
}

export default Sidebar