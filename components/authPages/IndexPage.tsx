import React from 'react';
import { useRouter } from 'next/router';

import { AppContext } from '../utils/AppContext';

export interface IndexPageProps {
  authedPage: React.ReactNode;
  unauthedPage: React.ReactNode;
}

export const IndexPage = ({ authedPage, unauthedPage }: IndexPageProps) => {
  const appCtx = React.useContext(AppContext);

  // render nothing if the app is not initialized
  if (!appCtx.initialized) {
    return <div></div>;
  }

  // render if not authenticated
  if (appCtx.user === null) {
    return <>{unauthedPage}</>;
  }

  return <>{authedPage}</>;
};
