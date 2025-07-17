import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Giả lập API: thêm sản phẩm mới
export const addProductAsync = createAsyncThunk(
  'product/addProductAsync',
  async (newProduct) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Giả delay 1s
    return newProduct;
  }
);

const initialState = {
  products: [
    {
      id: '123456',
      name: 'Example Product',
      price: 9.99,
      description: 'This is an example product.',
      catalogs: ['catalog1', 'catalog2'],
    },
  ],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProductAsync.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
  },
});

export default productSlice.reducer;
