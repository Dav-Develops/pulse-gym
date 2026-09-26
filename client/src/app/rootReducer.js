import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import cameraReducer from '../features/camera/cameraSlice';
import uiReducer from '../redux/slices/uiSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  camera: cameraReducer,
});

export default rootReducer;
