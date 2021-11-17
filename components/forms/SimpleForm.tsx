import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormFields {
  [key: string]: any;
}

interface FormFieldProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
}

export const SimpleForm = <T extends FormFields>({
  properties,
  onSubmit,
}: {
  properties: Record<keyof T, FormFieldProps>;
  onSubmit: SubmitHandler<T>;
}) => {
  const { t, i18n } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<T>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.entries(properties).map(([key, props]) => {
        // @ts-ignore
        const err = !!errors[key];

        return (
          <div key={key}>
            <label htmlFor={key}>{t(key)}</label>
            <input
              type={props.type}
              placeholder={props.placeholder ? t(props.placeholder) : undefined}
              {...register(key as any, { required: props.required })}
            />
            {err && <span>{t('This field is required')}</span>}
          </div>
        );
      })}

      <input type="submit" value={t('Login').toString()} />
    </form>
  );
};
