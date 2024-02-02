import axios from "axios";

axios.defaults.baseURL = 'https://65bc9c5ab51f9b29e931da46.mockapi.io/api';

export const requestContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const requestAddContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};
export const requestDeleteContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}