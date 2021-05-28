import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { selectors } from '../../redux';
import style from './Filter.module.css';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);

  const onChange = useCallback(
    e => {
      dispatch(actions.changeFilter(e.target.value));
    },
    [dispatch],
  );

  return (
    <form className={style.form}>
      <FormControl className={style.FormControl}>
        <InputLabel>Find contacts by name </InputLabel>
        <Input
          className={style.inputFilter}
          type="text"
          value={value}
          onChange={onChange}
        />
      </FormControl>
    </form>
  );
}
