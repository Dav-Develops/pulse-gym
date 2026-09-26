import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookingModal: {
    isOpen: false,
    classTitle: '',
    classTime: '',
  },
  trainerModal: {
    isOpen: false,
    name: '',
    role: '',
    bio: '',
  },
  toast: {
    isOpen: false,
    message: '',
  },
  billingCycle: 'monthly',
  classesFilter: 'all',
  scheduleDayFilter: 'all',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openBookingModal: (state, action) => {
      state.bookingModal = {
        isOpen: true,
        classTitle: action.payload.classTitle || '',
        classTime: action.payload.classTime || '',
      };
    },
    closeBookingModal: (state) => {
      state.bookingModal.isOpen = false;
      state.bookingModal.classTitle = '';
      state.bookingModal.classTime = '';
    },
    openTrainerModal: (state, action) => {
      state.trainerModal = {
        isOpen: true,
        name: action.payload.name || '',
        role: action.payload.role || '',
        bio: action.payload.bio || '',
      };
    },
    closeTrainerModal: (state) => {
      state.trainerModal.isOpen = false;
    },
    showToast: (state, action) => {
      state.toast = {
        isOpen: true,
        message: action.payload,
      };
    },
    hideToast: (state) => {
      state.toast.isOpen = false;
      state.toast.message = '';
    },
    setBillingCycle: (state, action) => {
      state.billingCycle = action.payload;
    },
    setClassesFilter: (state, action) => {
      state.classesFilter = action.payload;
    },
    setScheduleDayFilter: (state, action) => {
      state.scheduleDayFilter = action.payload;
    },
  },
});

export const {
  openBookingModal,
  closeBookingModal,
  openTrainerModal,
  closeTrainerModal,
  showToast,
  hideToast,
  setBillingCycle,
  setClassesFilter,
  setScheduleDayFilter,
} = uiSlice.actions;

export default uiSlice.reducer;
