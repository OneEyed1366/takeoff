import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { authCredentialsInterface } from './auth';

interface usersUpdateInterface extends Partial<authCredentialsInterface> {
  filterValue: string,
}

const initialState: authCredentialsInterface[] = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser: (state: authCredentialsInterface[], { payload }: PayloadAction<authCredentialsInterface>): void => {
      state.push(payload);
    },
    updateUser: (state: authCredentialsInterface[], { payload }: PayloadAction<usersUpdateInterface>): void => {
      try {
        Object.assign(
          state.find(({ username, password }) => {
            return username === payload.filterValue || password === payload.filterValue
          }),
          {
            username: payload.username,
            password: payload.password,
          }
        )
      } catch (updateError) {
        console.error(`Cannot update user ${payload.username} -> ${updateError}`);
      }
    },
    deleteUser: (state: authCredentialsInterface[], { payload }: PayloadAction<string>): void => {
      const foundIndex = state.findIndex(({ username, password }) => {
        return username === payload
      });

      try {
        state.splice(foundIndex, 1);
      } catch (deleteError) {
        console.error(`Error with deleteUser -> ${deleteError}`);
      }
    },
  },
});

export const { createUser, updateUser, deleteUser } = usersSlice.actions;
export const usersState = (state: RootState) => state.users;

export default usersSlice.reducer;
