import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Region() {
  const router = useRouter();
  useEffect(() => {
    router.push('/region/seoul');
  });
  return <></>;
}
