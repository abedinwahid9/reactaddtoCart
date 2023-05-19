import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "../items/Items";
import { useContext } from "react";
import { itemContext } from "../cart/Cart";

export default function Cartcontext() {
  const { item, removeAll, totalItem, totalAmount } = useContext(itemContext);

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img
            src="../../../public/images/arrow.png"
            alt="arrow"
            className="arrow-icon"
          />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="../../../public/images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>shopping cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem}</span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curtItem) => {
                return <Items key={curtItem.id} {...curtItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            cart total <span>{totalAmount}</span>
          </h3>
          <button>check out</button>
          <button className="clear-cart" onClick={removeAll}>
            remove all
          </button>
        </div>
      </section>
    </>
  );
}
