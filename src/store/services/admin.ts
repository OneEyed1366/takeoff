import { initialApi } from './index';
import { authCredentialsInterface } from '../slices/auth';

const adminApi = initialApi.injectEndpoints({
  endpoints: (build) => ({
    getAdminData: build.query<authCredentialsInterface, undefined>({
      query: () => 'admin',
    }),
  }),
});

export const { useGetAdminDataQuery } = adminApi;
