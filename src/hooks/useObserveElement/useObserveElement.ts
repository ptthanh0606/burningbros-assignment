import { useEffect, useRef } from "react";

export interface useObserveElementParams {
  encounterAction: () => void;
}

const useObserveElement = ({ encounterAction }: useObserveElementParams) => {
  const targetObserveRef = useRef(null);

  useEffect(() => {
    const targetElement = targetObserveRef.current;

    if (!targetElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) encounterAction();
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(targetElement);

    return () => {
      observer.unobserve(targetElement);
    };
  }, [encounterAction]);

  return targetObserveRef;
};

export default useObserveElement;
