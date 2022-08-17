import { NavLink, useMatch, useNavigate } from 'react-router-dom';
import style from "./Header.module.css";

function Header() {
  const navigate = useNavigate();
  const {pathname} = useMatch("*");

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <header className={style.header}>
        {pathname === "/"? null : <button style={{position:'absolute', top: 0, bottom: 0, left: 0}} onClick={goBack}>Go Back</button>}
        <nav className={style.navigation}>
          <NavLink to='/'
                   className={isActive =>
                     (isActive.isActive ? style.activeLink : style.link)}
          >Home
          </NavLink>
          <NavLink to='/movies'
                   className={isActive =>
                     (isActive.isActive ? style.activeLink : style.link)}
          >Movies
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
