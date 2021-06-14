import { useEffect } from 'react';
/**
 * useKeyPress
 * @param {string} key - the name of the key to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 */
export default function useKey(key, action,on = "keyup") {
  useEffect(() => {
    function onKeyEnter(e) {
      if ([key].includes(e.key)) action()
    }
    window.addEventListener(on, onKeyEnter);
    return () => window.removeEventListener(on, onKeyEnter);
  }, []);
}