import { useEffect } from 'react';

export default function useKeypress(key, action) {
  useEffect(() => {
    function onKeyup(e) {
      if (e.keyCode === key) action()
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, []);
}