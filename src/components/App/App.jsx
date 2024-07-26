import "modern-normalize";
import css from "../App/App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { TiContacts } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAll } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { ThreeDots } from 'react-loader-spinner'


export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook
        <TiContacts />
      </h1>
      <ContactForm />
      <SearchBox />
      <div className={css.loader}>
      {loading && <ThreeDots
        visible={true}
        height="40"
        width="80"
        color="#7c7c7c"
        />}
      </div>
      {isError && <p className={css.error}>Oops, something went wrong! <br/> Try again later</p> }
      <ContactList />
    </div>
  );
}
