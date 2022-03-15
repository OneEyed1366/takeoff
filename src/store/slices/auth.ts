import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

export interface authCredentialsInterface {
  username: string,
  password: string,
}

interface authSliceInterface extends Partial<authCredentialsInterface>{
  isAuthorized: boolean,
}

const initialState: authSliceInterface = {
  isAuthorized: false,
  username: undefined,
  password: undefined,
};

const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    login: (state: authSliceInterface, { payload }: PayloadAction<authCredentialsInterface>): void => {
      try {
        if (
          (payload.password === state.password) && (payload.username === state.username)
        ) {
          state.isAuthorized = true;
        } else {
          state.isAuthorized = false;
        }
      } catch (authError) {
        console.error(`Error in authorization -> ${authError}`);

        state.isAuthorized = false;
      }
    },
    logout: (state: authSliceInterface, { payload }: PayloadAction<string>): void => {
      try {
        if (payload === state.username && state.isAuthorized) {
          state.isAuthorized = false;
        }
      } catch (logoutError) {
        console.error(`Cannot logout -> ${logoutError}`);
      }
    },
    register: (state: authSliceInterface, { payload }: PayloadAction<authCredentialsInterface>): void => {
      try {
        state.username = payload.username;
        state.password = payload.password;
      } catch (registerError) {
        console.error(`Error in register -> ${registerError}`);
      }
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export const authState = (state: RootState) => state.auth;

export default authSlice.reducer;
