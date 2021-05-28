import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import styles from '../Phonebook.module.css';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';
import UserMenu from './UserMenu';
import Divider from '@material-ui/core/Divider';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <>
      <header className={styles.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Divider />
    </>
  );
}
