import React, { memo, Suspense } from 'react';

export default function lazyComponent(Component) {
  return memo(props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  ));
}

