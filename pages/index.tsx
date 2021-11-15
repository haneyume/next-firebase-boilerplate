import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../components/AppContext';

export default function Home() {
  const appCtx = React.useContext(AppContext);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <>
      <NextSeo
        title="next-tailwind-boilerplate"
        description="This is description"
        openGraph={{
          url: 'https://next-tailwind-boilerplate.haneyume.vercel.app/',
          title: 'next-tailwind-boilerplate',
          description: 'next-tailwind-boilerplate',
          images: [
            {
              url: '/aaa',
              width: 800,
              height: 600,
              alt: 'bg',
            },
          ],
          site_name: 'next-tailwind-boilerplate',
        }}
      />

      <div className="border-b border-gray-300 mb-5">
        <div className="container mx-auto px-5">
          <div className="flex justify-start items-center py-5 space-x-3">
            <div className="text-2xl text-gray-700">
              next-tailwind-boilerplate
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
                  'https://github.com/haneyume/next-tailwind-boilerplate',
                )
              }
            >
              <FaGithub className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: 'Next.js', url: 'https://nextjs.org/' },
            { title: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
            { title: 'Typescript', url: 'https://www.typescriptlang.org/' },
            { title: 'axios', url: 'https://axios-http.com/' },
            { title: 'i18next', url: 'https://www.i18next.com/' },
            { title: 'swr', url: 'https://swr.vercel.app/' },
            { title: 'npm', url: 'https://www.npmjs.com/' },
            { title: 'ESLint', url: 'https://eslint.org/' },
          ].map((item, index) => {
            return (
              <div
                key={index}
                className="px-5 py-5 rounded-md bg-gray-100 cursor-pointer"
                onClick={() => window.open(item.url)}
              >
                <div>{item.title}</div>
                <div className="text-sm text-gray-500">{item.url}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
