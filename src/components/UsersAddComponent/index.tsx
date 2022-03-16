import { useState } from 'react';
import useTypedDispatch from '../../hooks/useTypedDispatch';
import { createUser } from '../../store/slices/users';
import styles from './UsersAddComponent.module.scss';

function UsersAddComponent(): JSX.Element {
  const dispatch = useTypedDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className={styles.wrapper}>
      <fieldset>
        <label htmlFor="username-input">
          <span>Username</span>
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
      <button
        disabled={username === ''}
        onClick={(el) => {
          el.preventDefault();

          dispatch(createUser({
            username,
            password
          }))
        }}
        type="submit"
      >
        {
          username !== '' ? `Add new user ${username}` : 'Please, write new user"s data'
        }
      </button>
    </form>
  );
}

export default UsersAddComponent;
