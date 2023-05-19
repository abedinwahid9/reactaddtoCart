import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import style from "./items.module.css";
import { Button } from "react-bootstrap";
import { CreateCartContext } from "../context/CartContext";

export default function Item({ value }) {
  // console.log(value);
  const { id, title, description, price, img, quantity } = value;

  const { addtoCart } = useContext(CreateCartContext);

  return (
    <Col lg={3} xs={6} className="p-2 ">
      <div className={`${style.cardbody}  overflow-hidden`}>
        <div className={`${style.img} `}>
          <img src={img} alt="" />
        </div>
        <div className="p-3 d-flex flex-column align-items-center  ">
          <div className="title">
            <p className="h5">{title}</p>
          </div>
          <div className="price">
            <p className="h5">৳ {price}</p>
          </div>

          <Button className="w-100 mt-2 " onClick={() => addtoCart(value)}>
            add to cart
          </Button>
        </div>
      </div>
    </Col>
  );
}
