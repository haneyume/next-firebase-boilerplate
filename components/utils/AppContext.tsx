import React from 'react';
import axios from 'axios';

import './firebase';
import './i18n';

import {
  getAuth,
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth';

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface AppContextProps {
  initialized: boolean;
  setInitialized: React.Dispatch<React.SetStateAction<boolean>>;

  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;

  loginWithEmail: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;

  showLoading: (value: boolean) => void;
  showNotification: (title: string, body: string) => void;
  fetchApi: (method: HttpMethod, url: string, data?: any) => Promise<any>;
}

export const AppContext = React.createContext<AppContextProps>(undefined!);

export interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [initialized, setInitialized] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setInitialized(true);
    });
  }, []);

  const showNotification = (title: string, body: string) => {
    // notification.error({
    //   message: title,
    //   description: body,
    //   duration: 1,
    // });
  };

  const fetchApi = async (method: HttpMethod, url: string, data?: any) => {
    let responseData: any = null;

    try {
      const response = await axios({
        method,
        url,
        data,
      });

      responseData = response.data;
    } catch (error: any) {
      showNotification('Error', error.message);
    }

    return responseData;
  };

  return (
    <AppContext.Provider
      value={{
        initialized,
        setInitialized,

        user,
        setUser,

        loginWithEmail: (email: string, password: string) => {
          const auth = getAuth();
          return signInWithEmailAndPassword(auth, email, password);
        },
        logout: () => {
          const auth = getAuth();
          return signOut(auth);
        },

        showLoading: () => {},
        showNotification,
        fetchApi,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
