import './User.css'
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish} from '@material-ui/icons'
import {Link} from 'react-router-dom'

function User() {
  return (
   <div className="user">
       <div className="userEditTitleContainer">
           <h1 className="userEditTitle">Edit User</h1>
           <Link to='/newUser'>
           <button className="userEditButton">Create</button>
           </Link>
       </div>
       <div className="userEditContainer">
           <div className="userShow">
 <div className="userShowTop">
     <img src="https://www.pinkvilla.com/files/styles/gallery-preview/public/christian_bale_birthday.jpeg?itok=2OR-9WOS" alt="" className="userShowTopImage" />

     <div className="userShowTopTitle">
         <span className="userShowTopUsername">Christian Bale</span>
          <span className="userShowTopJob">Actor</span>
     </div>
 </div>
<div className="userShowBottom">
    <span className="userShowBottomTitle">Account Details</span>
    <div className="userShowInfo">
    <PermIdentity className="userShowIcon"/>
    <span className="userShowBottomUsername">CBale99</span>
    </div>

     <div className="userShowInfo">
    <CalendarToday className="userShowIcon"/>
    <span className="userShowBottomUsername">30.01.1974</span>
    </div>

 <span className="userShowBottomTitle">Account Details</span>

     <div className="userShowInfo">
    <PhoneAndroid className="userShowIcon"/>
    <span className="userShowBottomUsername">+1 123 456 67</span>
    </div>

     <div className="userShowInfo">
    <MailOutline className="userShowIcon"/>
    <span className="userShowBottomUsername">cbale@gmail.com</span>
    </div>

       <div className="userShowInfo">
    <LocationSearching className="userShowIcon"/>
    <span className="userShowBottomUsername">Gotham | USA</span>

    
    </div>

</div>
           </div>
           <div className="userUpdate">
               <span className="userUpdateTitle">Edit</span>
               <form className="userUpdateForm">
                   <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder="CBale99" className="userUpdateInput" />
                    </div>

                        <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input type="text" placeholder="Christian Bale" className="userUpdateInput" />
                    </div>

                        <div className="userUpdateItem">
                        <label>Phone Number</label>
                        <input type="text" placeholder="+1 123 456 67" className="userUpdateInput" />
                    </div>

                        <div className="userUpdateItem">
                        <label>Email</label>
                        <input type="text" placeholder="cbale@gmail.com" className="userUpdateInput" />
                    </div>

                     <div className="userUpdateItem">
                        <label>Address</label>
                        <input type="text" placeholder="Gotham | USA" className="userUpdateInput" />
                    </div>


                   </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://www.pinkvilla.com/files/styles/gallery-preview/public/christian_bale_birthday.jpeg?itok=2OR-9WOS" alt="" className="userUpdateImg" />

<label htmlFor="file"><Publish className="userUploadIcon" /></label>
                            <input type="file" id="file" style= {{display: "none"}} />
                        </div>
                        <button className="userUploadButton">Upload</button>
                    </div>
               </form>
           </div>
       </div>
   </div>
  )
}

export default User