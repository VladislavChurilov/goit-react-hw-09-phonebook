import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Button } from '@material-ui/core';
import styles from '../../Phonebook.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar =
    'https://cdn.pixabay.com/photo/2013/07/13/12/16/horse-159512_960_720.png';

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);
  return (
    <div className={styles.UserMenu}>
      <img src={avatar} alt="" width="32" height="32" />
      <span className={styles.UserText}>Welcome, {name}</span>
      <Button
        type="button"
        variant="outlined"
        color="primary"
        onClick={onLogOut}
      >
        LogOut
      </Button>
    </div>
  );
}
