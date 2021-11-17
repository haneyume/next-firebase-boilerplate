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
        <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow">
                <img
                  className="w-full"
                  src={`https://api.lorem.space/image/movie?w=150&h=220&t=${index}`}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
