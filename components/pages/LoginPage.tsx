import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../utils/AppContext';
import { LoginForm } from '../forms/LoginForm';

export const LoginPage = () => {
  const appCtx = React.useContext(AppContext);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto px-5">
      <div className="w-full md:w-1/2 mx-auto">
        <LoginForm />
      </div>
    </div>
  );
};
