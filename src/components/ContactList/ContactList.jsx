import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul className={styles.contactListUl}>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
