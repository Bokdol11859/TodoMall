import { useRouter } from 'next/router';
import React from 'react';

const auth = () => {
  const { query } = useRouter();

  return <>{query.code}</>;
};

export default auth;
