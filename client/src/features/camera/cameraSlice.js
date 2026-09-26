import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cameraPosition: [0, 0, 5],
  targetPosition: [0, 0, 0],
  isRotating: true,
  activeSceneMode: 'gym-symbol', // 'gym-symbol' | 'dumbbell' | 'arena'
};

export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    setCameraPosition: (state, action) => {
      state.cameraPosition = action.payload;
    },
    setRotating: (state, action) => {
      state.isRotating = action.payload;
    },
    setSceneMode: (state, action) => {
      state.activeSceneMode = action.payload;
    },
    resetCamera: (state) => {
      state.cameraPosition = [0, 0, 5];
      state.targetPosition = [0, 0, 0];
      state.isRotating = true;
    },
  },
});

export const { setCameraPosition, setRotating, setSceneMode, resetCamera } = cameraSlice.actions;

export default cameraSlice.reducer;
