import { NavLink } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle';
import css from '../HomePage/HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>
          Your Phonebook{' '}
          <span role="img" aria-label="Greeting icon">
            📲
          </span>
        </h1>
        <NavLink className={css.link} to="/login">
        Go to Log In
      </NavLink>
      </div>
    </>
  );
}
