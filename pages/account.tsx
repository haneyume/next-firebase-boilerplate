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
        <h1 className="text-2xl">{t('Account')}</h1>

        <div className="my-10">
          <p>{appCtx.user?.uid}</p>
          <p>{appCtx.user?.email}</p>
          <p>{appCtx.user?.photoURL}</p>
        </div>

        <input
          className="bg-red-500"
          type="button"
          value={t('Logout').toString()}
          onClick={() => appCtx.logout()}
        />
      </div>
    </AuthPage>
  );
}
