import { useRouter } from 'next/router';

export const useMoveToPage = () => {
  const router = useRouter();

  const onClickMoveToPage = (path: string) => () => {
    router.push(path);
    console.log('이동성공');
  };

  return {
    onClickMoveToPage,
  };
};
