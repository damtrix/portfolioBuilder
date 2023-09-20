import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface NavbarState {
  navOpen: boolean;
}

const initialState: NavbarState = {
  navOpen: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.navOpen = !state.navOpen;
    },
    setNavbarState: (state, action: PayloadAction<boolean>) => {
      state.navOpen = action.payload;
    },
  },
});

export const { toggleNavbar, setNavbarState } = navbarSlice.actions;
export const navBarSelector = (state: RootState) => state.navBarReducer;
export default navbarSlice.reducer;
