import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  }

  return (
    <div className="container">
      <Navbar color='light' light expand='md'>
        <NavbarBrand tag={Link} to='/'>Minhas Series</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink tag={Link} to='/series'>Séries</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/generos'>Gêneros</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;