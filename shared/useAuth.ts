import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAppSelector } from '@/common/hooks';

export function useAuth(redirectUrl = '/login') {
  const { isAuth } = useAppSelector(state => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push(redirectUrl);
    }
  }, [isAuth, router, redirectUrl]);
}