import React, { useState } from 'react';

import { TimelineComponent } from './timeline.styles';

import Tag, { TAG_TYPE_CLASSES } from '../tag/tag.component';
import timelineJson from './timelineData.json';

interface Tech {
  front?: string[];
  back?: string[];
  other?: string[];
}

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  tech: Tech;
}

interface TimelineData {
  timeline: TimelineItem[];
}

const Timeline: React.FC = () => {
  const { timeline } = timelineJson as TimelineData;
  const [timelineData] = useState<TimelineItem[]>(timeline);

  return (
    <TimelineComponent>
      {timelineData.map((item, index) => (
        <li key={index}>
          <p className="timeline-date">{item.date}</p>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tech-used">
              {item.tech.front &&
                item.tech.front.map((tech: string) => (
                  <Tag tagType={TAG_TYPE_CLASSES.front} key={tech}>
                    {tech}
                  </Tag> // Tagコンポーネントを利用
                ))}
              {item.tech.back &&
                item.tech.back.map((tech: string) => (
                  <Tag tagType={TAG_TYPE_CLASSES.back} key={tech}>
                    {tech}
                  </Tag> // Tagコンポーネントを利用
                ))}
              {item.tech.other &&
                item.tech.other.map((tech: string) => (
                  <Tag tagType={TAG_TYPE_CLASSES.other} key={tech}>
                    {tech}
                  </Tag> // Tagコンポーネントを利用
                ))}
            </div>
          </div>
        </li>
      ))}
    </TimelineComponent>
  );
};

export default Timeline;
