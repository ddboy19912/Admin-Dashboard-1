import './NewUser.css';

function NewUser() {
  return (
  <div className="newUser">
     <h1 className="NewUserTitle">New User</h1>
     <form className="newUserForm">

<div className="newUserItem">
<label>Username</label>
<input type="text" placeholder="John" />
</div>

<div className="newUserItem">
<label>Full name</label>
<input type="text" placeholder="John Smith" />
</div>

<div className="newUserItem">
<label>Email</label>
<input type="text" placeholder="Johnweeks@gmail.com" />
</div>

<div className="newUserItem">
<label>Password</label>
<input type="text" placeholder="Password" />
</div>

<div className="newUserItem">
<label>Phone Number</label>
<input type="text" placeholder="+1 123 456 89" />
</div>

<div className="newUserItem">
<label>Address</label>
<input type="text" placeholder="New York | USA" />
</div>

<div className="newUserItem">
<label>Gender</label>
<div className="newUserGender">
<input type="radio" name='gender' id='male' value='male' />
<label htmlFor="male">Male</label>

<input type="radio" name='gender' id='female' value='female' />
<label htmlFor="female">Female</label>

<input type="radio" name='gender' id='other' value='other' />
<label htmlFor="other">Other</label>
</div>


</div>
<div className="newUserItem">
  <label >Active</label>
  <select name="Active" id="active" className="newUserSelect">
    <option value="yes">Yes</option>
      <option value="no">No</option>
  </select>
</div>
<button className="newUserButton">Create</button>
     </form>
  </div>
  )
}

export default NewUser