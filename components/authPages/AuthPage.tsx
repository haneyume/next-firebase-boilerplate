import React from 'react';
import { useRouter } from 'next/router';

import { AppContext } from '../utils/AppContext';

export interface AuthPageProps {
  children: React.ReactNode;
}

export const AuthPage = ({ children }: AuthPageProps) => {
  const appCtx = React.useContext(AppContext);
  const router = useRouter();

  React.useEffect(() => {
    // Redirect to login if user is not logged in
    if (appCtx.initialized && appCtx.user === null) {
      router.push('/');
    }
  }, [appCtx.initialized, appCtx.user]);

  // render nothing if the app is not initialized
  if (!appCtx.initialized) {
    return <div></div>;
  }

  // render if not authenticated
  if (appCtx.user === null) {
    return <div></div>;
  }

  return <>{children}</>;
};
