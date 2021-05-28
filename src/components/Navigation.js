import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth';
import styles from '../Phonebook.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav className={styles.Navigation}>
      <NavLink
        to="/"
        exact
        className={styles.titleHead}
        activeClassName={styles.activeLink}
      >
        Phonebook
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={styles.Contacts}
          activeClassName={styles.activeLink}
          to="/contacts"
          exact
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
