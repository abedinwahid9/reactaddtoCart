import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Badge } from "react-bootstrap";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import { CreateCartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Nav() {
  const { total_Item } = useContext(CreateCartContext);

  return (
    <>
      <Navbar expand="lg" variant="light" bg="light" fixed="top">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Link>
          <Link to="cart">
            <button className={`${style.btn} btn position-relative`}>
              <i class="fa-solid fa-cart-shopping"></i>
              <Badge className={`${style.badge} position-absolute  `}>
                {total_Item}
              </Badge>
            </button>{" "}
          </Link>
        </Container>
      </Navbar>
    </>
  );
}
