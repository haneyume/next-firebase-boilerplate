import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';

import { AppContext, AuthPage, Header } from '../components';

export default function Account() {
  const appCtx = React.useContext(AppContext);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <AuthPage>
      <Header />

      <div className="container mx-auto px-5">
        <h1>{t('Account')}</h1>

        <div
          className="bg-red-500 text-white w-20 flex justify-center cursor-pointer"
          onClick={() => appCtx.logout()}
        >
          {t('Logout')}
        </div>
      </div>
    </AuthPage>
  );
}
