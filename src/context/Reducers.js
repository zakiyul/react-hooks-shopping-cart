export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QTY = "INCREASE_QTY";
export const REDUCE_QTY = "REDUCE_QTY";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const sudahAda = state.some((item) => {
        return item.id === action.cart.id;
      });
      if (sudahAda) {
        const copyOldCart = [...state];
        const idx = copyOldCart.findIndex(
          (product) => product.id === action.cart.id
        );
        let obj = { ...copyOldCart[idx] };
        obj = {
          ...obj,
          qty: obj.qty + 1,
        };
        copyOldCart[idx] = obj;
        return copyOldCart;
      } else {
        return [
          ...state,
          {
            qty: 1,
            category: action.cart.category,
            description: action.cart.description,
            id: action.cart.id,
            image: action.cart.image,
            price: action.cart.price,
            title: action.cart.title,
          },
        ];
      }
    case REMOVE_FROM_CART:
      return state.filter((cart) => cart.id !== action.id);
    case INCREASE_QTY:
      const copyOldCart = [...state];
      const idx = copyOldCart.findIndex((product) => product.id === action.id);
      let obj = { ...copyOldCart[idx] };
      obj = {
        ...obj,
        qty: obj.qty + 1,
      };
      copyOldCart[idx] = obj;
      return copyOldCart;
    case REDUCE_QTY:
      const copyOlderCart = [...state];
      const index = copyOlderCart.findIndex(
        (product) => product.id === action.id
      );
      let objectku = { ...copyOlderCart[index] };
      objectku = {
        ...objectku,
        qty: objectku.qty - 1,
      };
      copyOlderCart[index] = objectku;
      return copyOlderCart;

    default:
      return state;
  }
};
