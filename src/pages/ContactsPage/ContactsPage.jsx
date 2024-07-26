import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import ContactList from '../../components/ContactList/ContactList'
import ContactForm from '../../components/ContactForm/ContactForm';
import { fetchAll } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
     </>
  );
}
