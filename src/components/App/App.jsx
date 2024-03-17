import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import styles from './App.module.css';

const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1 className={styles.title}>Phonebook</h1>
      </div>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <p className={styles.noContacts}>
          Your phonebook is empty. Add first contact!
        </p>
      )}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
