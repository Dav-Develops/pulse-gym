import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('pulse_token');
const user = localStorage.getItem('pulse_user') ? JSON.parse(localStorage.getItem('pulse_user')) : null;

const initialState = {
  user: user,
  token: token,
  isAuthenticated: Boolean(token),
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    authSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
      if (action.payload.token) {
        localStorage.setItem('pulse_token', action.payload.token);
      }
      if (action.payload.user) {
        localStorage.setItem('pulse_user', JSON.stringify(action.payload.user));
      }
    },
    authFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      localStorage.removeItem('pulse_token');
      localStorage.removeItem('pulse_user');
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { authStart, authSuccess, authFailure, logout, clearError } = authSlice.actions;

export default authSlice.reducer;
