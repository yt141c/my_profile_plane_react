import { FC, useState, useRef } from 'react';
import { Skills } from '../skills/skills.component';

import { useScrollObserver } from '../../utils/scroll-observer/scroll-observer.utils';

import { TimelineItemType } from '../timeline/timeline.component';
import { TimelineItemComponent } from './timeline-item.styles';

type TimelineItemProps = {
  item: TimelineItemType;
};

const TimelineItem: FC<TimelineItemProps> = ({ item }) => {
  const [isIntersected, setIsIntersected] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);

  const callback = (isIntersecting: boolean) => {
    if (isIntersecting) {
      setIsIntersected(true);
    }
  };

  useScrollObserver(itemRef, callback, {
    root: null,
    rootMargin: '100px',
    threshold: 0.1,
  });

  return (
    <TimelineItemComponent
      className={isIntersected ? 'animate-fade' : ''}
      ref={itemRef}
    >
      <p className="date">{item.date}</p>
      <div className="content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <Skills skills={item.tech} />
      </div>
    </TimelineItemComponent>
  );
};

export default TimelineItem;
