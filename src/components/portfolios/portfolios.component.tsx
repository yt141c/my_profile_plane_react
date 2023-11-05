import { FC } from 'react';
import { PortfoliosComponent } from './portfolios.styles';

import Work, { WorkItem } from '../work/work.component';

import workData from '../work/workData.json';

type WorkData = {
  works: WorkItem[];
};

const Portfolios: FC = () => {
  const { works } = workData as WorkData;
  return (
    <PortfoliosComponent>
      <h2 className="portfolios">最近の活動</h2>
      <div className="works">
        {works.map((work) => {
          return <Work work={work} key={work.id} />;
        })}
      </div>
    </PortfoliosComponent>
  );
};

export default Portfolios;
