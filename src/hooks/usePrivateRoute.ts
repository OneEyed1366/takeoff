import useTypedSelector from './useTypedSelector';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../utils/routes';

export default function usePrivateRoute(): void {
  const navigate = useNavigate();
  const { isAuthorized } = useTypedSelector((state) => state.auth);

  if (!isAuthorized) {
    useEffect(() => {
      navigate(routes.initial.path);
    }, []);
  }
}
