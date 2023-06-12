import './topbar.css';

export default function Topbar() {
  return (
    <div className='top'>
      <div className="topLeft">
        <i class="topIcon fa-brands fa-facebook"></i>
        <i class="topIcon fa-brands fa-twitter"></i>
        <i class="topIcon fa-brands fa-whatsapp"></i>
        <i class="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img src='https://5.imimg.com/data5/SELLER/Default/2020/12/AP/QI/NQ/14784178/groot1-500x500.jpg' className="topImg" alt='image'/>
        <i class="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
