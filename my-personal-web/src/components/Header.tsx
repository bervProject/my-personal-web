import { useState } from 'react';
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
} = Navbar;

export default function Header() {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  function clickBurgerHandler() {
    setIsBurgerActive(!isBurgerActive);
  }

  return (
    <Navbar active={isBurgerActive} color="primary" fixed="top">
      <NavbarBrand>
        <Link to="/" className="navbar-item">
          <img
            alt="Bulma: a modern CSS framework based on Flexbox"
            height="28"
            src={Logo}
            width="28"
          />
        </Link>
        <NavbarBurger onClick={clickBurgerHandler} />
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
              <NavLink
                to="/certification"
                className={({ isActive }) =>
                  [isActive ? 'active' : '', 'navbar-item'].join(' ')
                }
              >
                Certification
              </NavLink>
            </NavbarDropdown>
          </NavbarItem>
          <NavbarItem href="#" hoverable>
            <NavbarLink>Community</NavbarLink>
            <NavbarDropdown>
              <NavLink
                to="/public-speaking"
                className={({ isActive }) =>
                  [isActive ? 'active' : '', 'navbar-item'].join(' ')
                }
              >
                Public Speaking Histories
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  [isActive ? 'active' : '', 'navbar-item'].join(' ')
                }
              >
                Blog
              </NavLink>
            </NavbarDropdown>
          </NavbarItem>
          <NavbarItem href="#" hoverable>
            <NavbarLink>About</NavbarLink>
            <NavbarDropdown>
              <NavLink
                to="/hobbies"
                className={({ isActive }) =>
                  [isActive ? 'active' : '', 'navbar-item'].join(' ')
                }
              >
                Hobbies
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  [isActive ? 'active' : '', 'navbar-item'].join(' ')
                }
              >
                Contact
              </NavLink>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarContainer>
        <NavbarContainer align="right">
          <NavbarItem href="https://github.com/bervProject/my-personal-web">
            <Button color="dark">Github</Button>
          </NavbarItem>
        </NavbarContainer>
      </NavbarMenu>
    </Navbar>
  );
}
