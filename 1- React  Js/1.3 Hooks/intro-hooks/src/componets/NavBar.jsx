import { Link, NavLink } from "react-router-dom";
import { Logo, MenuLi, MenuUl, NavBarContainer } from "../styles/Styled";

const NavBar = () => {
  return (
    <div>
      <NavBarContainer>
        <Logo>Logo</Logo>
        <MenuUl>
          <MenuLi>
            <NavLink to="/home">Home</NavLink>
          </MenuLi>
          <MenuLi>          
            <NavLink to="/counter">Counter</NavLink>
          </MenuLi>
          <MenuLi>    
            <Link to="/register">Producto</Link>
          </MenuLi>
        </MenuUl>
      </NavBarContainer>
    </div>
  );
}

export default NavBar