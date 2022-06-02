import './Topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
import {Link} from 'react-router-dom'



function Topbar() {
  return (
    <div className="topbar">
<div className="top-container">
    <div className="top-left">
    <Link to='/' className="link">
    <div className="logo"><h1>Octavion</h1></div>
    </Link>
    </div>
    <div className="top-right">
        <div className="icons">
            <div className="icon">
<NotificationsNone className="iconer"/>
<span className="topIconBadge">2</span>
            </div>
            <div className="icon">
<Language className="iconer"/>
<span className="topIconBadge">4</span>
            </div>
            <div className="icon">
<Settings className="iconer"/>

            </div>
            <div className="top-avatar">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Alan wake" className='profile-picture'/>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Topbar