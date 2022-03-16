import { useState } from 'react';
import { authState, login, logout } from '../../store/slices/auth';
import useTypedSelector from '../../hooks/useTypedSelector';
import useTypedDispatch from '../../hooks/useTypedDispatch';
import styles from './LoginComponent.module.scss';

function LoginComponent(): JSX.Element {
  const dispatch = useTypedDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthorized } = useTypedSelector((state) => state.auth);

  return (
    <form action="" className={styles.wrapper}>
      <fieldset>
        <label htmlFor="username-input">
          <span>Login</span>
          <input
            type="text"
            name="username-input"
            onChange={(el): void => {
              setUsername(el.target.value);
            }}
          />
        </label>
        <label htmlFor="password-input">
          <span>Password</span>
          <input
            type="password"
            name="password-input"
            onChange={(el): void => {
              setPassword(el.target.value);
            }}
          />
        </label>
      </fieldset>
      <section>
        <button
          type="submit"
          onClick={(el): void => {
            el.preventDefault();

            dispatch(login({
              username,
              password
            }));
          }}
        >
          Login
        </button>
        {
          isAuthorized && (
            <button
              type="submit"
              onClick={(el): void => {
                el.preventDefault();

                dispatch(logout());
              }}
            >
              Logout
            </button>
          )
        }
      </section>
    </form>
  );
}

export default LoginComponent;
