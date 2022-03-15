import auth from './auth';
import { initialApi } from '../services';
import users from './users';

export default {
  [initialApi.reducerPath]: initialApi.reducer,
  auth,
  users,
};
