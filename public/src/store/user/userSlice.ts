import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface languageParams {
  acronym: string;
  createdAt: string;
  id: string;
  updatedAt: string;
}

export interface portfolioParams {
  category: string;
  createdAt: string;
  githubUrl: string;
  id: string;
  image: string;
  info: string;
  liveUrl: string;
  updatedAt: string;
  userId: string;
  title: string;
  language: languageParams[];
}

interface homeParams {
  createdAt: string;
  id: string;
  logo: string;
  topBgImage: string;
  updatedAt: string;
  userId: string;
}

interface skillParams {
  createdAt: string;
  id: string;
  name: string;
  updatedAt: string;
  url: string;
  userId: string;
}

export interface User {
  aboutMe: string;
  createdAt: string;
  firstName: string;
  id: string;
  lastName: string;
  roles: [string];
  username: string;
  email: string;
  githubLink: string;
  home: homeParams[];
  image: string;
  linkedinLink: string;
  message: string;
  portfolios: portfolioParams[];
  speciality: string;
  technicalSkills: skillParams[];
  twitterLink: string;
}

const initialState: Array<User> = [];

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});
export const { addUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;
