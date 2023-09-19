const useDebounce = () => {
  let timeout: number | null = null;

  return (action: () => void, delayTime: number) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      action();
    }, delayTime);
  };
};

export default useDebounce;
