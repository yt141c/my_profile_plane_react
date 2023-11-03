import { RefObject, useEffect } from 'react';

type Callback = (isIntersecting: boolean) => void;

export const useScrollObserver = (
  ref: RefObject<Element>,
  callback: Callback,
  // IntersectionObserverのオプションのデフォルト値
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: '80px',
    threshold: 0.1,
  }
): void => {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.isIntersecting);
          obs.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(ref.current);

    // コンポーネントのアンマウント時に監視を解除
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, callback]); // optionsは動的に変更しないので依存配列から除外する
};
