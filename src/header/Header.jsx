import './header.css';
export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img 
        className='headerImg'
        src='https://images.unsplash.com/photo-1439194850785-37cfb3d7efc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwc3VucmlzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60'
        alt='flower'
        />
    </div>
  );
}
