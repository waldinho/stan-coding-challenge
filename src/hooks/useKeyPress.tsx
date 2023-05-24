import { useEffect} from 'react';

const useKeypress = (key: number, action: () => void) => {
  useEffect(() => {
    const onKeyup = (e) => {
      if (e.keyCode === key) action()
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, []);
}

export default useKeypress;