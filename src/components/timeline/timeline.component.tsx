import { FC, useState } from 'react';

import { TimelineComponent } from './timeline.styles';
import TimelineItem from '../timeline-item/timeline-item.component';

import timelineJson from './timelineData.json';

export type Tech = {
  front?: string[];
  back?: string[];
  other?: string[];
};

export type TimelineItemType = {
  date: string;
  title: string;
  description: string;
  tech: Tech;
};

type TimelineData = {
  timeline: TimelineItemType[];
};

const Timeline: FC = () => {
  const { timeline } = timelineJson as TimelineData;
  const [timelineData] = useState<TimelineItemType[]>(timeline);

  return (
    <TimelineComponent>
      {timelineData.map((item, index) => (
        <TimelineItem item={item} key={index} />
      ))}
    </TimelineComponent>
  );
};

export default Timeline;
