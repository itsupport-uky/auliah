import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { guestParser } from '../utils/guestParser';

const useGuestName = () => {
  const location = useLocation();

  const guestName = useMemo(() => {
    return guestParser(location.search);
  }, [location.search]);

  return {
    guestName
  };
};

export default useGuestName;