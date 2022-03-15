import './App.scss'
import NavbarComponent from '../components/NavbarComponent';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import useTypedDispatch from '../hooks/useTypedDispatch';
import { register } from '../store/slices/auth';
import { useGetAdminDataQuery } from '../store/services/admin';
import useTypedSelector from '../hooks/useTypedSelector';
import { useGetUsersQuery } from '../store/services/users';
import { createUser } from '../store/slices/users';

function App(): JSX.Element {
  const dispatch = useTypedDispatch();
  const { data: adminData, isLoading: adminIsLoading } = useGetAdminDataQuery(undefined);
  const { data: usersData, isLoading: usersIsLoading } = useGetUsersQuery(undefined);
  const { isAuthorized } = useTypedSelector((state) => state.auth);
  // When app is mounted, fetch data about admin
  useEffect(() => {
    if (!adminIsLoading) {
      dispatch(register(adminData!));
    }
  }, [adminIsLoading]);

  useEffect(() => {
    if (!usersIsLoading) {
      usersData!.forEach((data) => {
        dispatch(createUser(data));
      })
    }
  }, [usersIsLoading]);

  return (
    <>
      {
        isAuthorized && (
          <NavbarComponent />
        )
      }
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
