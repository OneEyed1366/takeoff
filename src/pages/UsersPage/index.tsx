import { useState } from 'react';
import UsersSearchComponent from '../../components/UsersSearchComponent';
import UsersListComponent from '../../components/UsersListComponent';
import UsersAddComponent from '../../components/UsersAddComponent';
import usePrivateRoute from '../../hooks/usePrivateRoute';
import styles from './UsersPage.module.scss';

function UsersPage(): JSX.Element {
  const [search, setSearch] = useState('');

  usePrivateRoute();

  return (
    <article className={styles.wrapper}>
      <header>
        <h1>
          Here you filter all users by username
        </h1>
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
