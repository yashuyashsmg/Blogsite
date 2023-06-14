import Sidebar from '../../sidebar/Sidebar';
import './setting.css';

export default function Setting() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img 
                    src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                    alt="Profile Pic" 
                />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                </label>
                <input type="file" id='fileInput' style={{display:'none'}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder='Safak'/>
            <label>Email</label>
            <input type="email" placeholder='asdf@gmail.com'/>
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
