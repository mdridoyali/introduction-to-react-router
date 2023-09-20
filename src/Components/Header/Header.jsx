import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-5">My WebSite</h2>
      <nav className="nav flex gap-5 font-bold text-blue-600">

      <NavLink to='/'>Home</NavLink>
      <NavLink to={'/users'} >Users</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact us</NavLink>
      <NavLink to={'/posts'}>posts</NavLink>

      </nav>
    </div>
  );
};

export default Header;
