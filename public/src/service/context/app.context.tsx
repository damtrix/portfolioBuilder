import React, { Dispatch, SetStateAction, useState } from 'react';
import projects from './data';

export interface project {
  id: number;
  category?: string;
  title: string;
  lang: string[];
  url: string;
  live?: string;
  slug?: string;
  info: string;
  images: {
    mobil?: string;
    tablet?: string;
    desktop?: string;
  };
}

export type projectContextType = {
  projects: project[];
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
  dropDownCategories: string[];
};

interface IProps {
  children: React.ReactNode;
}

export const AppContext = React.createContext<projectContextType | null>(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppProvider = ({ children }: IProps) => {
  const [navOpen, setNavOpen] = useState(false);

  //category to be shown in drop down
  const dropDownCategories = [
    'All',
    ...new Set(projects.map((category) => category.category)),
  ];

  return (
    <AppContext.Provider
      value={{ navOpen, setNavOpen, dropDownCategories, projects }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return React.useContext(AppContext) as projectContextType;
};
