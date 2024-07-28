import { Navigation } from '../Navigation/Navigation';
import {UserMenu} from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import {AuthNav} from '../AuthNav/AuthNav';
import {selectIsLoggedIn} from '../../redux/auth/selectors';
import css from '../AppBar/AppBar.module.css';
import SearchBox from '../SearchBox/SearchBox';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn && <SearchBox />}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
