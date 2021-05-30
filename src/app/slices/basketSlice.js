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
        state.cart = state.cart.filter((r) => r.id !== action.payload)
    },
  },
});
export const getProducts = (payload) => (dispatch) => {
    fetch('https://fakestoreapi.com/products')
    .then(res=> res.json())
    .then((data) =>  dispatch(loadProducts(data)))
}

export const { addToBasket, removeFromBasket, loadProducts } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
// export const selectItems = (state) => state.basket.items;
// export const selectProducts = (state) => state.basket.products;
// export const selectFilteredProducts = (state) => state.basket.filteredProducts;
// export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price * item.quantity, 0);
// export const selectTotalItems = (state) => state.basket.items.reduce((total, item) => total + item.quantity, 0);

export default basketSlice.reducer;