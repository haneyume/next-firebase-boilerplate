import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../utils/AppContext';
import { LoginForm } from '../forms/LoginForm';
import { SimpleForm } from '../forms/SimpleForm';

export const LoginPage = () => {
  const appCtx = React.useContext(AppContext);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto px-5">
      <div className="w-full md:w-1/2 mx-auto">
        <LoginForm />

        <div className="h-10" />

        <SimpleForm<{
          name: number;
          email: string;
          password: string;
        }>
          properties={{
            name: { type: 'date', placeholder: 'Please input name' },
            email: { type: 'email', required: true },
            password: { type: 'password', required: true },
          }}
          onSubmit={(data) => {
            alert(JSON.stringify(data));
          }}
        />
      </div>
    </div>
  );
};
