import { authCredentialsInterface } from '../slices/auth';
import { initialApi } from './index';

export const usersApi = initialApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<authCredentialsInterface[], undefined>({
      query: () => 'users',
    })
  }),
});

export const { useGetUsersQuery } = usersApi;
