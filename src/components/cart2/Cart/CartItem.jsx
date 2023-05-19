import { useContext, useState } from "react";
import style from "./cart.module.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CreateCartContext } from "../context/CartContext";

export default function Item() {
  const {
    cart,
    incrementItem,
    decrementItem,
    total_Item,
    total_amonut,
    removeItem,
    removeAll,
  } = useContext(CreateCartContext);

  const percentage = (total_amonut / 100) * 2;

  return (
    <Container className="pt-5">
      <div className={`${style.cartList}   px-5 `}>
        <span className="h1 text-uppercase">cart item</span>

        <span className="h6 text-uppercase">
          you have total {total_Item} item
        </span>
      </div>
      <hr />
      <Scrollbars style={{ height: 400 }}>
        {cart.map((item) => {
          return (
            <div key={item.id} className={style.cardBody}>
              <div
                className={`${style.table} d-flex justify-content-between align-items-center  px-5 `}
              >
                <div>
                  <img src={item.img} alt="" className={style.cartImg} />
                </div>
                <div className={style.title}>
                  <h6>{item.title}</h6>
                </div>
                <div className={style.addsQuantity}>
                  <i
                    className="fas fa-minus minus"
                    onClick={() => decrementItem(item.id)}
                  ></i>
                  <input
                    type="text"
                    placeholder={item.quantity}
                    disabled
                    className="mx-2"
                  />
                  <i
                    className="fas fa-plus add"
                    onClick={() => incrementItem(item.id)}
                  ></i>
                </div>
                <div className={style.price}>
                  <h6>$ {item.price * item.quantity}</h6>
                </div>
                <div className="remove-item">
                  <i
                    className="fas fa-trash-alt remove"
                    onClick={() => removeItem(item.id)}
                  ></i>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </Scrollbars>
      <div
        className={`${style.amountSecction} d-flex justify-content-between mt-4 me-5 gap-3`}
      >
        <div className={`${style.continueShipping} ms-5 `}>
          <Button className="m-2">continue shipping</Button>
          <Button className="m-2" onClick={removeAll}>
            remove all cart
          </Button>
        </div>
        <div
          className={`${style.amountCart} border p-4 d-flex flex-column mb-4`}
        >
          <div className="d-flex justify-content-between">
            <h4>Total: </h4>
            <h4 className="ms-4 ">{total_amonut} tk</h4>
          </div>

          <div className={`${style.shopCost} d-flex justify-content-between`}>
            <h4>shapping cost: </h4>
            <h4 className="ms-4">{percentage} tk</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h4>Total: </h4>
            <h4 className="ms-4">{total_amonut + percentage} tk</h4>
          </div>
        </div>
      </div>
    </Container>
  );
}
