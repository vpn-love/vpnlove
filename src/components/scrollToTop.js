import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById('wrapper').scrollIntoView({ behavior: 'smooth' });
  }, [pathname]);

  return <>{children}</>;
}
