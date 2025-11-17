import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

// end code

// Note ->  Classic debounce hook —> useful for search input to avoid updating
// filter on every keystroke.
