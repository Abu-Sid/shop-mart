import { createSlice } from "@reduxjs/toolkit";

// export const     = createAsyncThunk(
//     'books/loadBooks',
//     async () => {
//         const res = await fetch('https://redux-book-shelf.herokuapp.com/books')
//         const data = await res.json();

//         return data.data;
//     }
// );


export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    cart: [],
    products: [],
  },
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload
    },
    addToBasket: (state, action) => {
        state.cart.push(action.payload) 
    },
    
    removeFromBasket: (state, action) => {
        let pos = state.cart.findIndex((item) => item.id === action.payload.id);
      let newBasket = [...state.cart];

      if (pos > -1) {
        newBasket.splice(pos, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in the basket`
        );
      }

      state.cart = newBasket;
    },
    removeAllFromBasket: (state, action) => {
       let newBasket= state.cart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart=newBasket
      },
  },
});
export const getProducts = (payload) => (dispatch) => {
    fetch('https://fakestoreapi.com/products')
    .then(res=> res.json())
    .then((data) =>  dispatch(loadProducts(data)))
}

export const { addToBasket, removeFromBasket, loadProducts ,removeAllFromBasket} = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
// export const selectItems = (state) => state.basket.items;
// export const selectProducts = (state) => state.basket.products;
// export const selectFilteredProducts = (state) => state.basket.filteredProducts;
// export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price * item.quantity, 0);
// export const selectTotalItems = (state) => state.basket.items.reduce((total, item) => total + item.quantity, 0);

export default basketSlice.reducer;