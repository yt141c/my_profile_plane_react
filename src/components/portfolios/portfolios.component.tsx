import { FC, useState, useRef } from 'react';
import { PortfoliosComponent } from './portfolios.styles';
import { useScrollObserver } from '../../utils/scroll-observer/scroll-observer.utils';

import Work, { WorkItem } from '../work/work.component';

import workData from '../work/workData.json';

type WorkData = {
  works: WorkItem[];
};

const Portfolios: FC = () => {
  const { works } = workData as WorkData;
  const [isInterspected, setIsIntersected] = useState(false);
  const worksRef = useRef<HTMLDivElement>(null);

  const callback = (isIntersecting: boolean) => {
    if (isIntersecting) {
      setIsIntersected(true);
    }
  };

  useScrollObserver(worksRef, callback, {
    root: null,
    rootMargin: '-100px',
    threshold: 0.3,
  });

  return (
    <PortfoliosComponent>
      <h2 className="portfolios">最近の活動</h2>
      <div
        className={'works ' + (isInterspected ? 'animate-fade' : '')}
        ref={worksRef}
      >
        {works.map((work) => {
          return <Work work={work} key={work.id} />;
        })}
      </div>
    </PortfoliosComponent>
  );
};

export default Portfolios;
