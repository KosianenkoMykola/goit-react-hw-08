import css from './Contact.module.css';
import { useState } from 'react';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operations';
import DeleteModal from '../DeleteModal/DeleteModal'

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDeleteContact = () => {
    dispatch(deleteContacts(id));
    handleCloseModal();
  };

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
      <button className={css.btn} onClick={handleOpenModal}>
        Delete
      </button>
      <DeleteModal 
        open={isModalOpen} 
        handleClose={handleCloseModal} 
        handleDelete={handleDeleteContact} 
      />
    </div>
  );
}
