import React from 'react';
import { useRouter } from 'next/router';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../utils/AppContext';

export const Header = () => {
  const appCtx = React.useContext(AppContext);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <div className="border-b border-gray-300 mb-5">
      <div className="container mx-auto px-5">
        <div className="flex justify-start items-center py-5 space-x-3">
          <div
            className="text-2xl text-gray-700 cursor-pointer"
            onClick={() => router.push('/')}
          >
            next-firebase-boilerplate
          </div>

          <div className="px-3 text-xs text-gray-400 border border-gray-400 rounded-md">
            {t('light')}
          </div>

          <div className="flex-1" />

          <select
            value={i18n.language}
            onChange={(evt) => i18n.changeLanguage(evt.target.value)}
          >
            <option value="en">English</option>
            <option value="ja">日本語</option>
            <option value="zhHant">繁體中文</option>
            <option value="zhHans">简体中文</option>
          </select>

          <div
            className="cursor-pointer"
            onClick={() =>
              window.open(
                'https://github.com/haneyume/next-firebase-boilerplate',
              )
            }
          >
            <FaGithub className="text-2xl" />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => router.push('/account')}
          >
            {appCtx.user?.email}
          </div>
        </div>
      </div>
    </div>
  );
};
