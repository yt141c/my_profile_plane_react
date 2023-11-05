import { FC, useRef, useState } from 'react';
import { useScrollObserver } from '../../utils/scroll-observer/scroll-observer.utils';

import { Skills, SkillsProps } from '../skills/skills.component';
import { WorkComponent } from './work.styles';
import Button from '../button/button.component';

export type WorkItem = {
  id: number;
  title: string;
  description: string;
  img: {
    imageUrl: string;
    imageAlt: string;
  };
  links: Link[];
} & SkillsProps;

type Link = {
  name: string;
  url: string;
};

type WorkProps = {
  work: WorkItem;
};

const Work: FC<WorkProps> = ({ work }) => {
  const { title, description, img, links, skills } = work;
  const [isInterspected, setIsIntersected] = useState(false);
  const workRef = useRef<HTMLDivElement>(null);

  const setIntersect = (isIntersecting: boolean) => {
    if (isIntersecting) {
      setIsIntersected(true);
    }
  };

  useScrollObserver(workRef, setIntersect, {
    root: null,
    rootMargin: '-100px',
    threshold: 0.1,
  });

  return (
    <WorkComponent
      ref={workRef}
      className={isInterspected ? 'animate-fade' : ''}
    >
      <div className="infos">
        <div className="img-container">
          <img className="img" src={img.imageUrl} alt={img.imageAlt} />
        </div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <Skills skills={skills} />
        <div className="links">
          {links.map((link) => {
            const isGitHub = link.url.includes('github.com');
            return (
              <Button
                key={link.name}
                content={link.name}
                url={link.url}
                buttonType={isGitHub ? 'github' : 'default'}
              />
            );
          })}
        </div>
      </div>
    </WorkComponent>
  );
};

export default Work;
