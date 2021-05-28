import axios from 'axios';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './actions';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.massage));
  }
};

const addContact =
  ({ name, number }) =>
  async dispatch => {
    const contacts = { name, number };
    dispatch(addContactRequest());
    try {
      const { data } = await axios.post('/contacts', contacts);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error.massage));
    }
  };

const deleteContacts = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.massage));
  }
};

export default {
  fetchContacts,
  addContact,
  deleteContacts,
};
