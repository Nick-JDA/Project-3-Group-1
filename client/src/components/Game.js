import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers"
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

function Game(item) {
  const [state, dispatch] = useStoreContext();
  const { name, image, _id, price, quantity, type } = item;
  const { cart } = state;
  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }
  return (
    <div>
      <div className="max-w-[70vw] mx-auto">
        <Link to={`/products/${_id}`}>
        <img src={`/images/${image}`} alt="Game" />
        <div className="bg-teal-600 h-[8rem]">
          <p className="text-[15px] text-white pl-2 pt-2">{name}</p>
          <p className="text-[11px] text-white pl-2 pt-2">
            {type}
          </p>
          <div className="max-w-[5.4rem]">
            <p className="ml-4 text-[28px] text-white bg-[#5c7e10] pl-1 mt-2"><span>${price}</span></p>
          </div>
        </div>
        </Link>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default Game;