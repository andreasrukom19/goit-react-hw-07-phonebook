import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestContacts, requestAddContact, requestDeleteContact } from "services/api";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await requestContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const contactItem = await requestAddContact(contact);
      return contactItem;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const contactItem = await requestDeleteContact(contactId);
      return contactItem;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)