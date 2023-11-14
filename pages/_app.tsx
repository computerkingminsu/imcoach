import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { AppProps } from 'next/app';
import Layout from '../src/components/layout';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { RecoilRoot, useRecoilState } from 'recoil';
import 'firebase/auth';
import React from 'react';
import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
import Head from 'next/head';
import { isLoggedIn } from '../src/commons/globalstate/globalstate';
import { firebaseConfig } from '../api';

export const firebaseapp = initializeApp(firebaseConfig);
export const authInstance = getAuth();
export const db = getFirestore(firebaseapp);
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>I'm coach</title>
        <meta name="description" content="아임코치의 트레이너들을 만나보세요" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1" />
        <meta property="og:title" content="I'm coach"></meta>
        <meta property="og:url" content="https://imcoach.vercel.app/"></meta>
        <meta property="og:image" content="https://i.ibb.co/gPXN2Ry/image.png"></meta>
        <meta property="og:description" content="아임코치의 트레이너들을 만나보세요"></meta>
        <link rel="icon" href="./Logo.ico"></link>
      </Head>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}
