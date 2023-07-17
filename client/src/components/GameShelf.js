import React, { useEffect} from "react";
// import one from "../assets/1.jpg";
// import two from "../assets/2.jpg";
import Game from "./Game";
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

function GameShelf() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }
  return (
    <div className="mx-[2rem]">
      <p className="text-white pt-6">GAMING SHELF</p>
      {state.products.length ? (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-3">
        {filterProducts().map((product) => (
            <Game
            key={product._id}
            _id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            type={product.type}
          />
        ))}
          <h3>You haven't added any products yet!</h3>
      </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <p>Loading</p> : null}
    </div>
  );
};

export default GameShelf;