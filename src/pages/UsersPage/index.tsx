import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersSearchComponent from '../../components/UsersSearchComponent';
import UsersListComponent from '../../components/UsersListComponent';
import UsersAddComponent from '../../components/UsersAddComponent';
import usePrivateRoute from '../../hooks/usePrivateRoute';

function UsersPage(): JSX.Element {
  const [search, setSearch] = useState('');

  usePrivateRoute();

  return (
    <article>
      <header>
        <UsersSearchComponent incomingFunction={setSearch} />
      </header>
      <section>
        <h1>
          Here you can add new User
        </h1>
        <UsersAddComponent />
      </section>
      <footer>
        <h1>List of all users</h1>
        <UsersListComponent filterData={search} />
      </footer>
    </article>
  );
}

export default UsersPage;
