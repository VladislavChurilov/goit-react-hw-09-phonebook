import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from '../../redux';
import style from './ContactList.module.css';
import { Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getVisibleContacts);
  const isLoading = useSelector(selectors.getLoading);
  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);
  const onDelete = useCallback(
    id => {
      dispatch(operations.deleteContacts(id));
    },
    [dispatch],
  );

  return (
    <div className={style.conteiner}>
      <h2 className={style.title}>Contacts</h2>
      {isLoading && <h1>Loading...</h1>}
      <Divider />
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem className={style.ListItem} key={id}>
            {name}: {number}
            <ListItemText className={style.ListItem} />
            <Button
              variant="outlined"
              color="primary"
              onClick={() => onDelete(id)}
            >
              Delete
            </Button>
            <Divider />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
