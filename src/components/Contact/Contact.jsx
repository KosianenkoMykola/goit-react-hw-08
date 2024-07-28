import css from './Contact.module.css';
import { useState } from 'react';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operations';
import DeleteModal from '../DeleteModal/DeleteModal'
import EditContactModal from '../EditContactModal/EditContactModal';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [contactData, setContactData] = useState({ id, name, number });

  const handleOpenDeleteModal = () => setIsDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);

  const handleOpenEditModal = () => setIsEditModalOpen(true);
  const handleCloseEditModal = () => setIsEditModalOpen(false);

  const handleEditContact = (values) => {
    setContactData({ ...contactData, name: values.name, number: values.phone });
    handleCloseEditModal();
  };

  const handleDeleteContact = () => {
    dispatch(deleteContacts(id));
    handleCloseDeleteModal();
  };

  return (
    <div className={css.contactContainer}>
    <div className={css.title}>
      <p className={css.userName}>
        <FaUser className={css.icon} />
        {contactData.name}
      </p>
      <div className={css.separator} />
      <p>
        <FaPhoneAlt className={css.icon} />
        {contactData.number}
      </p>
    </div>
    <div className={css.buttonContainer}>
      <button className={css.editBtn} onClick={handleOpenEditModal}>
        Edit
      </button>
      <button className={css.btn} onClick={handleOpenDeleteModal}>
        Delete
      </button>
    </div>
    <DeleteModal 
      open={isDeleteModalOpen} 
      handleClose={handleCloseDeleteModal} 
      handleDelete={handleDeleteContact} 
    />
    <EditContactModal 
      open={isEditModalOpen} 
      handleClose={handleCloseEditModal} 
      handleSave={handleEditContact} 
      initialValues={{ name: contactData.name, phone: contactData.number }} 
    />
  </div>
  );
}
