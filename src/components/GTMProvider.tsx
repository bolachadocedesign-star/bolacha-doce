'use client';

import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

export function GTMProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && GTM_ID !== 'GTM-XXXXXXX') {
      TagManager.initialize({ gtmId: GTM_ID });
    }
  }, []);

  return <>{children}</>;
}

