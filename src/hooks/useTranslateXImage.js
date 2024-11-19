import { useState, useEffect } from 'react';
import useScrollHandling from './useScrollHandling';

const useTranslateXImage = () => {
  const { scrollDrection, scrollPosition } = useScrollHandling();
  const [traslateXPosition, setTranslateXPosition] = useState(80);

  const handleTranslateX = () => {
    if (scrollDrection === 'down' && scrollPosition >= 1500) {
      setTranslateXPosition(traslateXPosition <= 0 ? 0 : traslateXPosition - 1);
    } else if (scrollDrection === 'up') {
      setTranslateXPosition(
        traslateXPosition >= 80 ? 80 : traslateXPosition + 1
      );
    }
  };

  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);
  return traslateXPosition;
};

export default useTranslateXImage;
