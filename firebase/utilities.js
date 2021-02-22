import { auth } from './config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const router = useRouter();

export const signOut = () => {
  auth.signOut();
  router.push('/');
};

export default signOut;
