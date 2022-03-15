import { useState } from 'react';
import useTypedDispatch from '../../hooks/useTypedDispatch';
import { createUser } from '../../store/slices/users';

function UsersAddComponent(): JSX.Element {
  const dispatch = useTypedDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
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
        onClick={(el) => {
          el.preventDefault();

          dispatch(createUser({
            username,
            password
          }))
        }}
        type="submit"
      >
        Add user "{username}"
      </button>
    </form>
  );
}

export default UsersAddComponent;
