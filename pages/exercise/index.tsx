import { useEffect } from 'react';

import { useRouter } from 'next/router';

export default function Exercise() {
  const router = useRouter();
  useEffect(() => {
    router.push('/exercise/workout');
  });
  return <></>;
}
