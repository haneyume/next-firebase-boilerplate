import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';

import { AppContext } from '../utils/AppContext';

interface FormInput {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const appCtx = React.useContext(AppContext);
  const { t, i18n } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    appCtx.loginWithEmail(data.email, data.password).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">{t('email')}</label>
        <input
          placeholder="Please input email"
          type="email"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="password">{t('password')}</label>
        <input
          placeholder="Please input password"
          type="password"
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </div>

      <input type="submit" value="Login" />
    </form>
  );
};
