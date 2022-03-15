import { useGetUsersQuery } from '../../store/services/users';
import { authCredentialsInterface } from '../../store/slices/auth';
import { deleteUser, updateUser } from '../../store/slices/users';
import useTypedDispatch from '../../hooks/useTypedDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import { useState } from 'react';

interface usersListProps {
  filterData?: string,
}

function UsersListComponent({ filterData }: usersListProps): JSX.Element {
  const dispatch = useTypedDispatch();
  const data = useTypedSelector((state) => state.users);

  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <table>
      {/* Rendering table head columns */}
      <thead>
      {
        data.length > 0 && Object.keys(data[0]).map((value: string): JSX.Element => (
          <th key={`${value}-key`}>
            {value}
          </th>
        ))
      }
      </thead>
      {/* Rendering list of all active users */}
      <tbody>
      {
        Object
          .values(data)
          .filter(({ username, password }) => filterData
            ? (username.includes(filterData!) || password.includes(filterData!))
            : true
          )
          .map(({ username, password }: authCredentialsInterface): JSX.Element => (
            <tr key={`${username}-tr-key`}>
              <td>
                <input
                  type="text"
                  defaultValue={username}
                  onChange={(el): void => {
                    setNewUsername(el.target.value);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={password}
                  onChange={(el): void => {
                    setNewPassword(el.target.value);
                  }}
                />
              </td>
              <td onClick={() => dispatch(deleteUser(username))}>
                Delete {username}
              </td>
              <td onClick={() => {
                dispatch(updateUser({
                  filterValue: username,
                  username: newUsername ? newUsername : username,
                  password: newPassword ? newPassword : password,
                }));
              }}>
                Update {username}
              </td>
            </tr>
          ))
      }
      </tbody>
    </table>
  );
}

export default UsersListComponent;
