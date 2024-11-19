import { useEffect, useRef, useState } from 'react';

const useScrollHandling = () => {
  const [scrollDrection, setScrollDrection] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const previousScrollPosition = useRef(0);

  const srollTracking = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDrection('down');
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDrection('up');
    }

    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', srollTracking);
    return () => window.removeEventListener('scroll', srollTracking);
  }, []);

  return {
    scrollDrection,
    scrollPosition,
  };
};

export default useScrollHandling;
