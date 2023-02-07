import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PostsStore, VPNsStore } from '../stores/';

export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById('wrapper').scrollIntoView({ behavior: 'smooth' });
    PostsStore.isLoadedPost = false;
    PostsStore.post = null;
    VPNsStore.isLoadedVPNData = false;
    VPNsStore.vpnDescr = null;
  }, [pathname]);

  return <>{children}</>;
}
