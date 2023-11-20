import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { AppProps } from 'next/app';
import Layout from '../src/components/layout';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { RecoilRoot } from 'recoil';
import 'firebase/auth';
import React from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Head from 'next/head';
import Script from 'next/script';

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
export const kakaoKey = process.env.NEXT_PUBLIC_FIREBASE_KAKAO_KEY;
export const firebaseapp = initializeApp(firebaseConfig);
export const authInstance = getAuth();
export const db = getFirestore(firebaseapp);
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_FIREBASE_KAKAO_KEY}&autoload=false`}
        strategy="beforeInteractive"
      />
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
