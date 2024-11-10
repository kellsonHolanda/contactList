import { createSlice } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface State {
  contacts: Contact[];
}

const initialState: State = {
  contacts: [], // Deve ser um array vazio
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      console.log('addContact action:', action.payload);
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      console.log('removeContact action:', action.payload);
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    editContact: (state, action) => {
      console.log('editContact action:', action.payload);
      state.contacts = state.contacts.map(contact =>
        contact.id === action.payload.id ? action.payload : contact
      );
    },
  },
});

export const { addContact, removeContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;



