import Reac, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const useGotoList = () => {
  const history = useHistory();
  const handleGotoList = useCallback((title) => {
    return () => {
      history.push('/list', { title, from: '/home' })
    }
  },
    [history],
  );

  return {
    handleGotoList,
  }
};

export default useGotoList