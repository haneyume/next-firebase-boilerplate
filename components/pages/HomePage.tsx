import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../utils/AppContext';
import { Header } from '../layout/Header';

export const HomePage = () => {
  const appCtx = React.useContext(AppContext);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <>
      <Header />

      <div className="container mx-auto px-5">
        <div>Home</div>
      </div>
    </>
  );
};
