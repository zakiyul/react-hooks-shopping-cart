import React, { useState, useContext, useReducer } from "react";
import { CartContext } from "../context/CartContext";
import { AiOutlineShop, AiOutlineShoppingCart } from "react-icons/ai";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";

const Example = () => {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-3">
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">
          <AiOutlineShop /> Ecommerce
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/all-products">
                All products
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/cart">
                <AiOutlineShoppingCart /> Cart
                <Badge className="ml-1" color="success" pill>
                  {cart ? cart.length : 0}
                </Badge>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
