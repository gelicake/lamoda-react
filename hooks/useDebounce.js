import { useEffect, useState } from "react";

export function useDebounce(value, timeout = 500) {
  const [state, setState] = useState(value);
  useEffect(() => {
    const tm = setTimeout(() => setState(value), timeout);
    return () => clearTimeout(tm);
  }, [value, timeout]);
  return state;
}
