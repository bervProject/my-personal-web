import { Button, Navbar } from 'react-bulma-components';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/my-logo.png';

const {
  Brand: NavbarBrand,
  Item: NavbarItem,
  Menu: NavbarMenu,
  Burger: NavbarBurger,
  Dropdown: NavbarDropdown,
  Link: NavbarLink,
  Container: NavbarContainer,
  Divider: NavbarDivider,
} = Navbar;

export default function Header() {
  return (
    <Navbar color="primary" fixed="top">
      <NavbarBrand>
        <Link to="/" className="navbar-item">
          <img
            alt="Bulma: a modern CSS framework based on Flexbox"
            height="28"
            src={Logo}
            width="28"
          />
        </Link>
        <NavbarBurger />
      </NavbarBrand>
      <NavbarMenu>
        <NavbarContainer>
          <NavbarItem href="#" hoverable>
            <NavbarLink>Experience</NavbarLink>
            <NavbarDropdown>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  [isActive ? 'active' : '', 'navbar-item'].join(' ')
                }
              >
                Experience
              </NavLink>
              <NavbarItem href="#">Subitem 2</NavbarItem>
              <NavbarDivider />
              <NavbarItem href="#">After divider</NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
          <NavbarItem href="#">Second</NavbarItem>
        </NavbarContainer>
        <NavbarContainer align="right">
          <NavbarItem href="https://github.com/bervProject/my-personal-web"><Button color="dark">Github</Button></NavbarItem>
        </NavbarContainer>
      </NavbarMenu>
    </Navbar>
  );
}
