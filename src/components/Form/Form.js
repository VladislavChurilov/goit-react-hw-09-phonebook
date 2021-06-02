import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { operations } from '../../redux';
import ContactList from '../ContactList';
import Filter from '../Filter';
import style from './Form.module.css';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = {
  FormControl: {
    display: 'flex',
    marginBottom: '20px',
  },
};

export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.warn(`error`);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div className={style.formConteiner}>
      <form className={style.form} onSubmit={handleSubmit}>
        <FormControl style={styles.FormControl}>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </FormControl>
        <FormControl style={styles.FormControl}>
          <InputLabel>Number</InputLabel>
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            onChange={handleChange}
            required
          />
        </FormControl>
        <Button
          className={style.LoginButton}
          type="submit"
          variant="outlined"
          color="primary"
          onSubmit={handleSubmit}
        >
          Add contact
        </Button>
      </form>
      <Filter />
      <ContactList />
    </div>
  );
}
