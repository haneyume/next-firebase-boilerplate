import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import { AppContext, IndexPage, HomePage, LoginPage } from '../components';

const Header = () => {
  const appCtx = React.useContext(AppContext);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <div className="border-b border-gray-300 mb-5">
      <div className="container mx-auto px-5">
        <div className="flex justify-start items-center py-5 space-x-3">
          <div className="text-2xl text-gray-700">
            next-firebase-boilerplate
          </div>

          <div className="px-3 text-xs text-gray-400 border border-gray-400 rounded-md">
            {t('light')}
          </div>

          <div className="flex-1" />

          <select onChange={(evt) => i18n.changeLanguage(evt.target.value)}>
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
        </div>
      </div>
    </div>
  );
};

export default function Index() {
  const appCtx = React.useContext(AppContext);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <>
      <NextSeo
        title="next-firebase-boilerplate"
        description="This is description"
        openGraph={{
          url: 'https://next-firebase-boilerplate.haneyume.vercel.app/',
          title: 'next-firebase-boilerplate',
          description: 'next-firebase-boilerplate',
          images: [
            {
              url: '/aaa',
              width: 800,
              height: 600,
              alt: 'bg',
            },
          ],
          site_name: 'next-firebase-boilerplate',
        }}
      />

      <Header />

      <IndexPage authedPage={<HomePage />} unauthedPage={<LoginPage />} />
    </>
  );
}
