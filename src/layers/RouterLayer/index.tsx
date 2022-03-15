import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../root/App';
import HomePage from '../../pages/Home';
import UsersPage from '../../pages/UsersPage';
import { routes } from '../../utils/routes';

function RouterLayer(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.initial.path} element={<App />}>
            <Route index element={<HomePage />} />
            <Route path={routes.users.path} element={<UsersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default RouterLayer;
