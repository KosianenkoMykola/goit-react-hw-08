import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66a270f6967c89168f201d3b.mockapi.io/";

export const fetchAll = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async (newContacts, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", newContacts);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const deleteContacts = createAsyncThunk("contacts/deleteContacts",
    async (contactsId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactsId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);