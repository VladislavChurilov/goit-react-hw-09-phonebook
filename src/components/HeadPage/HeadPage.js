import { useSelector } from 'react-redux';
import style from './HeadPage.module.css';
import { authSelectors } from '../../redux/auth';

export default function HeadPage() {
  const name = useSelector(authSelectors.getUsername);
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return isAuthenticated ? (
    <h1 className={style.HeadPage}>Hi, {name}, good luck </h1>
  ) : (
    <div className={style.HeadPageConteiner}>
      <h1 className={style.HeadPage}>Welcome</h1>
      <p className={style.HeadingText}>
        Do you want to use the app? Please log in or register
      </p>
    </div>
  );
}
