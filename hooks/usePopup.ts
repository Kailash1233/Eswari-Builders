
import { useState, useEffect } from 'react';

const usePopup  = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsPopupOpen(true);
  }, 3000);

  return () => clearTimeout(timer);
}, []);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return { isPopupOpen, closePopup };
}; 


export default usePopup


  