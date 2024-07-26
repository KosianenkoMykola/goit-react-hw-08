import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchAll } from '../contacts/operations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      items: [],
      loading: false,
      error: false
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchAll.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchAll.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
    }
  });

export default contactsSlice.reducer;