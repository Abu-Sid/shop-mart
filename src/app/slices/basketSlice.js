import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadProductAsync = createAsyncThunk(
    'books/loadBooks',
    async () => {
        const res = await fetch('https://redux-book-shelf.herokuapp.com/books')
        const data = await res.json();

        return data.data;
    }
);
const initialState = {
  cart: [],
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // addProducts: (state, action) => {
    //   state.products = action.payload
    // },
    addToBasket: (state, action) => {
        state.cart.push(action.payload) 
    },
    
    removeFromBasket: (state, action) => {
        state.readingList = state.readingList.filter((r) => r.id !== action.payload)
    },
  },
});

export const { addToBasket, removeFromBasket, updateQuantity, addProducts, updateFilters, clearFilters } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectProducts = (state) => state.basket.products;
export const selectFilteredProducts = (state) => state.basket.filteredProducts;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price * item.quantity, 0);
export const selectTotalItems = (state) => state.basket.items.reduce((total, item) => total + item.quantity, 0);

export default basketSlice.reducer;