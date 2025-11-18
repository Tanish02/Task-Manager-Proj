import { useCallback, useState } from "react";

export function useModel() {
  const [open, setOpen] = useState(false);
  const openModel = useCallback(() => setOpen(true), []);
  const closeModel = useCallback(() => setOpen(false), []);
  return { open, openModel, closeModel };
}

// end code
