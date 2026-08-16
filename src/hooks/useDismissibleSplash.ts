import { useEffect, useState } from "react";

export function useDismissibleSplash() {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setPhase(1);
    }, 800);

    const titleTimer = setTimeout(() => {
      setPhase(2);
    }, 2200);

    const promptTimer = setTimeout(() => {
      setPhase(3);
    }, 3400);

    return () => {
      clearTimeout(bootTimer);
      clearTimeout(titleTimer);
      clearTimeout(promptTimer);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
  };

  return {
    visible,
    phase,
    onDismiss: dismiss,
  };
}
