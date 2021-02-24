import React, { useEffect } from 'react';

import Navigator from './navigation/Navigator';

export default function AppView() {

  useEffect(() => {

    return () => {
      
    }
  }, [])

  return <Navigator onNavigationStateChange={(v) => {
    console.warn('onNavigationStateChange', v)
  }} uriPrefix="/app"/>;
}