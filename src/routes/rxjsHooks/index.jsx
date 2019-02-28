import React, { useState } from 'react';
import { useObservable } from 'rxjs-hooks';
import { interval } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { connect } from 'dva';
import MainLayout from '../../layouts/main';

const RxjsHooks = () => {
  const value = useObservable(state$ => interval(1000).pipe(withLatestFrom(state$), map(([index, prev]) => index + prev)), -10);
  return (
    <MainLayout selectedKey="rxjs_hooks">
      <h1>{value}</h1>
    </MainLayout>
  );
};

export default connect()(RxjsHooks);
