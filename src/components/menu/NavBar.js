
import CartWidget from '../CartWidget/CartWidget';
import NavLink from '../NavLink/NavLink';
import './Navbar.css';


function NavBar() {
  return (
    <nav className="navBar">
    <div className='logo'>
    </div>
    <div
      className="navMenu">
      <ul>
        <NavLink title="Home"/>
        <NavLink title="Art"/>
        <NavLink title="Galery"/>
        <CartWidget/>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;
