import { useEffect } from 'react';

export const useLockBodyScroll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => document.body.style.overflow = originalStyle;
  }, []);

};
