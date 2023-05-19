import { itemContext } from "../cart/Cart";
import { useContext } from "react";

export default function Items({
  id,
  title,
  description,
  price,
  img,
  quantity,
}) {
  const { removeItem, incrementItem, decrementItem } = useContext(itemContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="product" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i
            className="fas fa-minus minus"
            onClick={() => decrementItem(id)}
          ></i>
          <input type="text" placeholder={quantity} />
          <i className="fas fa-plus add" onClick={() => incrementItem(id)}></i>
        </div>
        <div className="price">
          <h3>{price * quantity} tk</h3>
        </div>
        <div className="remove-item">
          <i
            className="fas fa-trash-alt trash"
            onClick={() => removeItem(id)}
          ></i>
        </div>
      </div>
      <hr />
    </>
  );
}
