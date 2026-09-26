import authAPI from './authAPI';
import { authStart, authSuccess, authFailure, logout } from './authSlice';
import { showToast } from '../../redux/slices/uiSlice';

export const authService = {
  login: (credentials) => async (dispatch) => {
    dispatch(authStart());
    try {
      const data = await authAPI.login(credentials);
      dispatch(authSuccess(data));
      dispatch(showToast(`Welcome back, ${data.user?.name || 'Athlete'}!`));
      return data;
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed. Please check your credentials.';
      dispatch(authFailure(msg));
      throw new Error(msg);
    }
  },

  register: (userData) => async (dispatch) => {
    dispatch(authStart());
    try {
      const data = await authAPI.register(userData);
      dispatch(authSuccess(data));
      dispatch(showToast(`Account created! Welcome to PULSE, ${data.user?.name}!`));
      return data;
    } catch (err) {
      const msg = err.response?.data?.message || 'Registration failed. Please try again.';
      dispatch(authFailure(msg));
      throw new Error(msg);
    }
  },

  logoutUser: () => (dispatch) => {
    dispatch(logout());
    dispatch(showToast('Logged out successfully.'));
  },
};

export default authService;
