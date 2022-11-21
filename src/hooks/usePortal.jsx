import { useEffect, useState } from 'react';

export function usePortal() {
  const [element] = useState(document.createElement('div'));
  const [root] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.append(root);
    root.id = 'portal-toasts';
    root.appendChild(element);

    return () => root.removeChild(element);
  }, []);

  return element;
}
