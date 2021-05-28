import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import style from './Register.module.css';
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

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.warn(`error`);
    }
  }, []);
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.register({ name, email, password }));
      setEmail('');
      setPassword('');
    },
    [name, email, password, dispatch],
  );
  return (
    <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
      <FormControl style={styles.FormControl}>
        <InputLabel>Name</InputLabel>
        <Input type="text" name="name" value={name} onChange={handleChange} />
      </FormControl>
      <FormControl style={styles.FormControl}>
        <InputLabel>Enter email</InputLabel>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl style={styles.FormControl}>
        <InputLabel>Password</InputLabel>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </FormControl>
      <Button
        className={style.LoginButton}
        type="submit"
        variant="outlined"
        color="primary"
      >
        Register
      </Button>
    </form>
  );
}
