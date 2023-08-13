import React from 'react';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
    <h3 className=''>Royal Real Estate</h3>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
      </li>
    </ul>
    <button class="btn  mx-2" type="button">Login</button>
    <button class="btn " type="button">Signup</button>
  </div>
</nav>
  )
};

export default Header;
