import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';

import { AppContext, IndexPage, HomePage, LoginPage } from '../components';

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

      <IndexPage authedPage={<HomePage />} unauthedPage={<LoginPage />} />
    </>
  );
}
