import React from 'react'
import './WidgetSm.css'
import {Visibility} from '@material-ui/icons'

function WidgetSm() {
  return (
   <div className="WidgetSm">
<span className="WidgetSmTitle">New Join Members</span>
<ul className="WidgetSmList">
<li className="WidgetSmListItem">
<img src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pebbles Onatro" className="WidgetSmImage" />
<div className="WidgetSmUserInfo">
  <span className="WidgetSmUsername">Pebbles Onatro</span>
   <span className="WidgetSmUserTitle">Digital Marketer</span>
</div>
<button className="WidgetSmButton"><Visibility className="WidgetSmIcon"/> Display</button>
</li>

<li className="WidgetSmListItem">
<img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/09/Dark-Knight-Harvey-Dent-Aaron-Eckhart-Two-Face.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5" alt="Pebbles Onatro" className="WidgetSmImage" />
<div className="WidgetSmUserInfo">
  <span className="WidgetSmUsername">Harvey Dent</span>
   <span className="WidgetSmUserTitle">District Attorney</span>
</div>
<button className="WidgetSmButton"><Visibility className="WidgetSmIcon" /> Display</button>
</li>


<li className="WidgetSmListItem">
<img src="https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=960" alt="Pebbles Onatro" className="WidgetSmImage" />
<div className="WidgetSmUserInfo">
  <span className="WidgetSmUsername">Darth Vader</span>
   <span className="WidgetSmUserTitle">Restaurant Owner</span>
</div>
<button className="WidgetSmButton"><Visibility className="WidgetSmIcon"/> Display</button>
</li>



<li className="WidgetSmListItem">
<img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/03/space-jam-2-character-poster-bugs-bunny-social-featured.jpg?q=50&fit=contain&w=943&h=472&dpr=1.5" alt="Pebbles Onatro" className="WidgetSmImage" />
<div className="WidgetSmUserInfo">
  <span className="WidgetSmUsername">Bugs Bunny</span>
   <span className="WidgetSmUserTitle">Professional Basketballer</span>
</div>
<button className="WidgetSmButton"><Visibility className="WidgetSmIcon"/> Display</button>
</li>

<li className="WidgetSmListItem">
<img src=" https://images.pexels.com/photos/3541389/pexels-photo-3541389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Pebbles Onatro" className="WidgetSmImage" />
<div className="WidgetSmUserInfo">
  <span className="WidgetSmUsername">Annabelle Musanza</span>
   <span className="WidgetSmUserTitle">Digital Marketer</span>
</div>
<button className="WidgetSmButton"><Visibility className="WidgetSmIcon"/> Display</button>
</li>

</ul>

   </div>
  )
}

export default WidgetSm