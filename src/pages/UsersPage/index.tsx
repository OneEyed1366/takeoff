import { useState } from 'react';
import UsersSearchComponent from '../../components/UsersSearchComponent';
import UsersListComponent from '../../components/UsersListComponent';
import UsersAddComponent from '../../components/UsersAddComponent';

function UsersPage(): JSX.Element {
  const [search, setSearch] = useState('');

  return (
    <article>
      <UsersSearchComponent incomingFunction={setSearch} />
      <UsersAddComponent />
      <UsersListComponent filterData={search} />
    </article>
  );
}

export default UsersPage;
