import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    console.log(current_user);

    return (
      <>
        <Navbar color="info" expand fixed="top" light>
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/index/">See all Apartments</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Add a Listing
                </NavLink>
                <NavbarText></NavbarText>
              </NavItem>
            </Nav>

            <NavbarText>
              {logged_in && (
                <div>
                  <a href={sign_out_route}>Sign Out</a>
                </div>
              )}
              {!logged_in && (
                <div>
                  <a href={sign_in_route}>Sign In / Sign Up</a>
                </div>
              )}
            </NavbarText>
          </Collapse>
        </Navbar>
      </>
    );
  }
}
