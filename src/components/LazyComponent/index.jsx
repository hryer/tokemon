import React, { memo, Suspense } from 'react';
import Loading from '@/components/Loading';

export default function lazyComponent(Component) {
  return memo(props => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  ));
}

