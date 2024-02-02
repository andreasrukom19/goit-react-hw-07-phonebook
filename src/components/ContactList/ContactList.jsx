import { useDispatch, useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { deleteContact, fetchContacts } from '../../redux/operations';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/selectors';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  return (
    <ul className={css['contact-list']}>
      {filteredContacts.map(contact => {
        return (
          <ContactListItem
            contact={contact}
            key={contact.id}
            handleDeleteContact={handleDeleteContact}
          />
        );
      })}
    </ul>
  );
};
