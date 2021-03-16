import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className="mb-3">
        <Navbar dark expand="md" style={{ backgroundColor: "#64a7dc", paddingLeft: 50, paddingRight: 50, boxShadow: " 0px 5px 10px #8a8a8a" }}>
          <NavbarBrand href="/"><h2>Task Manager</h2></NavbarBrand>
          <div className="ml-auto">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Hi, Tân
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Logout
                    </DropdownItem>
                    <DropdownItem divider />
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }

  export default Header