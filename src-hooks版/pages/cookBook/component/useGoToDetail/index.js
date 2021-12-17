import React from 'react';
import { useHistory } from 'react-router-dom';

const useGotoDetail = () => {
  const history = useHistory();
  const handleGotoDetail = (title, img) => {
    return () => {
      history.push('/detail', { title, img, from: '/home' });
    }
  }
  return {
    handleGotoDetail
  }
};

export default useGotoDetail