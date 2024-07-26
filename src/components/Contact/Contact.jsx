import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operations';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactContainer}>
      <div className={css.title}>
        <p className={css.userName}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <div className={css.separator} />
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </button>
    </div>
  );
}
