import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { addContacts } from '../../redux/operations';

const nameInputId = nanoid();
const numberInputId = nanoid();

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isInContacts) {
      return Notify.warning(`${name} is already in contacts`);
    }
    dispatch(addContacts({ name, number }))
      .unwrap()
      .then(() => {
        Notify.success(`New contact added`);
      })
      .catch(() => {
        Notify.failure(`OOPS...`);
      });

    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor={nameInputId}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={styles.label} htmlFor={numberInputId}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={styles.button} type="submit">
          Add contact{' '}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
